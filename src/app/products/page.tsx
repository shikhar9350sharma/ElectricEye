'use client';

import { motion } from 'framer-motion';
import { products } from '@/lib/data';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            title="Featured Products"
            subtitle="Handpicked lighting solutions for you"
            centered={false}
            className="mb-0"
          />
          <Link href="/products" className="hidden sm:block">
            <Button variant="ghost" className="flex items-center gap-2 text-primary hover:text-primary/80">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}