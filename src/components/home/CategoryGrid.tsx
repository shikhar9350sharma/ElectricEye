'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Minus, Eye, Radar, LayoutGrid, Sun, ArrowUpRight } from 'lucide-react';
import { categories } from '@/lib/data';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';

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
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect lighting solution for every space and requirement
          </p>
        </motion.div>

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
                  className="group relative p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-amber-500/30"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-4 mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-amber-500">
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