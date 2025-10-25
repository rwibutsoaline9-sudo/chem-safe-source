import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { Product } from "@/lib/products";
import productUrea from "@/assets/product-urea.jpg";
import productSodiumCyanide from "@/assets/product-sodium-cyanide.jpg";
import productCausticSoda from "@/assets/product-caustic-soda.jpg";

interface ProductCardProps {
  product: Product;
}

const imageMap: Record<string, string> = {
  "product-urea.jpg": productUrea,
  "product-sodium-cyanide.jpg": productSodiumCyanide,
  "product-caustic-soda.jpg": productCausticSoda,
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const imageSrc = imageMap[product.image] || productUrea;
  
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
          {product.restricted && (
            <Badge variant="destructive" className="flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Restricted
            </Badge>
          )}
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p><span className="font-semibold text-foreground">Purity:</span> {product.purity}</p>
          <p><span className="font-semibold text-foreground">Grade:</span> {product.grade}</p>
          <p><span className="font-semibold text-foreground">CAS:</span> {product.casNumber}</p>
          <p className="line-clamp-2 mt-3">{product.description}</p>
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
