'use client';

import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Lightbulb } from 'lucide-react';
import { Product } from '@/types';
import { useStore } from '@/store/useStore';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="group overflow-hidden border border-border/50 hover:border-primary/30 hover:glow-amber transition-all duration-300 bg-card">
        {/* Image Area */}
        <div className="relative h-56 bg-muted/50 flex items-center justify-center overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Lightbulb className="h-20 w-20 text-amber-500/40" />
          </motion.div>

          {product.badge && (
            <Badge className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-semibold">
              {product.badge}
            </Badge>
          )}

          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 rounded-full bg-white/90 dark:bg-slate-900/90 hover:bg-white ${isWishlisted ? 'text-red-500' : 'text-slate-400'}`}
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>

          {/* Quick Add Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
            <Button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold translate-y-4 group-hover:translate-y-0 transition-transform"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Content */}
        <Link href={`/product/${product.id}`}>
          <div className="p-5">
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground ml-1">({product.wattage})</span>
            </div>

            <h3 className="font-semibold text-lg mb-1 group-hover:text-amber-500 transition-colors">
              {product.name}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-amber-500">₹{product.price}</span>
              </div>
              <span className={`text-xs font-medium ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Specs Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {product.lumens}
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {product.colorTemp}
              </span>
            </div>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
}