import heroImage from "@/assets/hero-lab.jpg";
import qualityControlImage from "@/assets/quality-control.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage, qualityControlImage];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative h-[300px] sm:h-[400px] flex items-center justify-center overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20" />
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-center mx-auto text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Reliable Industrial Chemicals
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90">
            Quality, Compliance & Global Supply for Your Business
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/products" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                View Products
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm"
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
