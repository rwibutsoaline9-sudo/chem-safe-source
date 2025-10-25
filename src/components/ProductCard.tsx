import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import productUrea from "@/assets/product-urea.jpg";
import productSodiumCyanide from "@/assets/product-sodium-cyanide.jpg";
import productCausticSoda from "@/assets/product-caustic-soda.jpg";

import categoryAcids from "@/assets/category-acids.jpg";
import categoryAlkalis from "@/assets/category-alkalis.jpg";
import categorySolvents from "@/assets/category-solvents.jpg";
import categorySalts from "@/assets/category-salts.jpg";
import categoryOrganics from "@/assets/category-organics.jpg";
import categoryGases from "@/assets/category-gases.jpg";
import categoryPolymers from "@/assets/category-polymers.jpg";
import categoryOxides from "@/assets/category-oxides.jpg";
import categorySurfactants from "@/assets/category-surfactants.jpg";
import categoryMetalSalts from "@/assets/category-metal-salts.jpg";

interface Product {
  id: string;
  name: string;
  category: string;
  purity: string | null;
  grade: string | null;
  cas_number: string | null;
  description: string | null;
  price_value: number;
  price_unit: string;
  price_currency: string;
  is_restricted: boolean;
  image_url: string | null;
}

interface ProductCardProps {
  product: Product;
}

const imageMap: Record<string, string> = {
  "product-urea.jpg": productUrea,
  "product-sodium-cyanide.jpg": productSodiumCyanide,
  "product-caustic-soda.jpg": productCausticSoda,
  "category-acids.jpg": categoryAcids,
  "category-alkalis.jpg": categoryAlkalis,
  "category-solvents.jpg": categorySolvents,
  "category-salts.jpg": categorySalts,
  "category-organics.jpg": categoryOrganics,
  "category-gases.jpg": categoryGases,
  "category-polymers.jpg": categoryPolymers,
  "category-oxides.jpg": categoryOxides,
  "category-surfactants.jpg": categorySurfactants,
  "category-metal-salts.jpg": categoryMetalSalts,
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const imageSrc = product.image_url ? imageMap[product.image_url] || productUrea : productUrea;
  
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border-border">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
          <img 
            src={imageSrc} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          {product.is_restricted && (
            <Badge variant="destructive" className="flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Restricted
            </Badge>
          )}
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          {product.purity && <p><span className="font-semibold text-foreground">Purity:</span> {product.purity}</p>}
          {product.grade && <p><span className="font-semibold text-foreground">Grade:</span> {product.grade}</p>}
          {product.cas_number && <p><span className="font-semibold text-foreground">CAS:</span> {product.cas_number}</p>}
          <p className="text-lg font-bold text-primary mt-3">
            {product.price_currency} ${product.price_value.toLocaleString()} / {product.price_unit}
          </p>
          {product.description && <p className="line-clamp-2">{product.description}</p>}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={`/products/${product.id}`} className="w-full">
          <Button variant="default" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
