'use client';

import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/types';
import { useStore } from '@/store/useStore';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductImage from '@/components/shared/ProductImage';
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
        <div className="relative h-56 bg-muted/50 overflow-hidden">
          <ProductImage
            src={product.image}
            alt={product.name}
            fill
            className="group-hover:scale-105 transition-transform duration-500"
          />
          
          {product.badge && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-semibold">
              {product.badge}
            </Badge>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 rounded-full bg-background/90 hover:bg-background ${isWishlisted ? 'text-red-500' : 'text-muted-foreground'}`}
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold translate-y-4 group-hover:translate-y-0 transition-transform"
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
            
            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors text-card-foreground">
              {product.name}
            </h3>
            
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {product.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-primary">₹{product.price}</span>
              </div>
              <span className={`text-xs font-medium ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                {product.lumens}
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                {product.colorTemp}
              </span>
            </div>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
}