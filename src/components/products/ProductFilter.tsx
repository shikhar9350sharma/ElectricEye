'use client';

import { categories } from '@/lib/data';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function ProductFilter() {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useStore();

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
      <div className="relative w-full sm:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex gap-3 w-full sm:w-auto">
        <Select
          value={selectedCategory || 'all'}
          onValueChange={(value) => setSelectedCategory(value === 'all' ? null : value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-sm font-semibold mb-3">Price Range</h4>
                <div className="flex gap-2">
                  <Input type="number" placeholder="Min" className="w-24" />
                  <Input type="number" placeholder="Max" className="w-24" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3">Wattage</h4>
                <div className="space-y-2">
                  {['5W-10W', '10W-20W', '20W-50W', '50W+'].map((w) => (
                    <label key={w} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      {w}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}