import { FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-primary mb-4">
              <FlaskConical className="w-6 h-6" />
              <span>ChemSupply Pro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted supplier of high-quality industrial chemicals worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Fertilizers</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Industrial Chemicals</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Organic Chemicals</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/safety" className="hover:text-primary transition-colors">Safety & Compliance</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Disclaimer:</strong> We supply only to verified businesses. Always consult product SDS and follow local regulations. Restricted chemicals require proper licensing and documentation.
          </p>
          <p className="text-sm text-muted-foreground text-center mt-4">
            © 2025 ChemSupply Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
