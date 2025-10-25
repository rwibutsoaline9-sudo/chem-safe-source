import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <FlaskConical className="w-6 h-6" />
            <span>ChemSupply Pro</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/safety" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Safety & Compliance
            </Link>
            <Link to="/contact">
              <Button variant="default" size="sm">
                Request Quote
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
