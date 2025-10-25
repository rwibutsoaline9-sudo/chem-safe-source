import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { TrustBadges } from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const { data } = await supabase
        .from('products')
        .select('*')
        .limit(30);

      if (data) {
        setFeaturedProducts(data);
      }
    };

    fetchFeaturedProducts();
  }, []);
  
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBadges />
      
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Featured Products</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              High-quality industrial chemicals with full documentation and compliance certification
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="inline-block w-full sm:w-auto">
              <Button variant="default" size="lg" className="w-full sm:w-auto">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-8 sm:py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Why Choose ChemSupply Pro?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Quality Assurance</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Every batch tested and certified to meet international standards
                </p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Compliance First</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Full SDS documentation and regulatory compliance for all products
                </p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Expert Support</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Technical guidance and customer service from industry specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
