'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Minus, Eye, Radar, LayoutGrid, Sun, ArrowUpRight } from 'lucide-react';
import { categories } from '@/lib/data';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import SectionHeader from '@/components/shared/SectionHeader';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Minus,
  Eye,
  Radar,
  LayoutGrid,
  Sun,
};

export default function CategoryGrid() {
  const router = useRouter();
  const { setSelectedCategory } = useStore();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    router.push('/products');
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Browse by Category"
          subtitle="Find the perfect lighting solution for every space and requirement"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Lightbulb;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="group relative p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-card-foreground">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {category.productCount} Products
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}