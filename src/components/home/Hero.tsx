'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import LightGlow from '@/components/shared/LightGlow';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center hero-bg">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <LightGlow color="amber" size="lg" className="top-1/4 left-1/4" />
        <LightGlow color="cyan" size="md" className="bottom-1/4 right-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Illuminating Spaces Since 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-foreground">
              Light Up Your World with{' '}
              <span className="gradient-text">ElectricEye</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover premium LED solutions, smart sensor lights, and cutting-edge radar technology. 
              Energy-efficient, durable, and designed for modern living.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 glow-amber">
                  <Zap className="mr-2 h-5 w-5" />
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-foreground">
                View Catalog
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 mb-8 border-t border-border/50 "
          >
            {[
              { value: 200, suffix: '+', label: 'Products' },
              { value: 50, suffix: 'K+', label: 'Happy Customers' },
              { value: 5, suffix: 'yr', label: 'Warranty' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}