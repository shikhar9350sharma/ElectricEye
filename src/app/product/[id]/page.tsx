import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Lightbulb, Star, Check, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative h-[500px] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
          <Lightbulb className="h-40 w-40 text-amber-500/30" />
          {product.badge && (
            <Badge className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-semibold text-sm px-3 py-1">
              {product.badge}
            </Badge>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-amber-500 border-amber-500">
              {product.category.replace('-', ' ').toUpperCase()}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-medium">{product.rating}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-amber-500 mb-6">₹{product.price}</p>
          
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Wattage', value: product.wattage },
              { label: 'Lumens', value: product.lumens },
              { label: 'Lifespan', value: product.lifespan },
              { label: 'Color Temp', value: product.colorTemp },
            ].map((spec) => (
              <div key={spec.label} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
                <div className="text-sm text-muted-foreground">{spec.label}</div>
                <div className="font-semibold">{spec.value}</div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <Button size="lg" className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <Separator className="my-8" />

          {/* Tabs */}
          <Tabs defaultValue="features">
            <TabsList className="w-full">
              <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
              <TabsTrigger value="specs" className="flex-1">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-6">
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specs" className="mt-6">
              <div className="space-y-4">
                {Object.entries({
                  'Model': product.id.toUpperCase(),
                  'Category': product.category,
                  'Wattage': product.wattage,
                  'Luminous Flux': product.lumens,
                  'Color Temperature': product.colorTemp,
                  'Rated Life': product.lifespan,
                  'Warranty': '5 Years',
                }).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}