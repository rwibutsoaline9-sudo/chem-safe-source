import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [restrictedFilter, setRestrictedFilter] = useState<string>("all");

  const categories = Array.from(new Set(products.map(p => p.category)));

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.casNumber.includes(searchQuery);
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    const matchesRestricted = restrictedFilter === "all" || 
                             (restrictedFilter === "restricted" && product.restricted) ||
                             (restrictedFilter === "non-restricted" && !product.restricted);
    
    return matchesSearch && matchesCategory && matchesRestricted;
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Chemicals Catalog</h1>
          <p className="text-lg text-muted-foreground">
            Browse our comprehensive selection of high-quality chemicals
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by name, CAS number, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={restrictedFilter} onValueChange={setRestrictedFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Restriction Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="non-restricted">Non-Restricted</SelectItem>
                <SelectItem value="restricted">Restricted Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
