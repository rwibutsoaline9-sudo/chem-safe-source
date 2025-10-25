import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lab.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-center mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Reliable Industrial Chemicals
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Quality, Compliance & Global Supply for Your Business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="hero" size="lg">
                View Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
