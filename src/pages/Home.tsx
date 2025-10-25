import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const featuredProducts = products.filter(p => p.featured);
  
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBadges />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              High-quality industrial chemicals with full documentation and compliance certification
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <Button variant="default" size="lg">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ChemSupply Pro?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Every batch tested and certified to meet international standards
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Compliance First</h3>
                <p className="text-muted-foreground">
                  Full SDS documentation and regulatory compliance for all products
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
                <p className="text-muted-foreground">
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
