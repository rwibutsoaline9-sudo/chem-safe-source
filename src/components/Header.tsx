import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FlaskConical, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useAdmin } from "@/hooks/useAdmin";
import { toast } from "sonner";

export const Header = () => {
  const { user, signOut } = useAuth();
  const { isAdmin } = useAdmin();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error('Error logging out');
    } else {
      toast.success('Logged out successfully');
    }
  };

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
            {isAdmin && (
              <Link to="/admin" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                Admin
              </Link>
            )}
            {user ? (
              <>
                <span className="text-sm text-muted-foreground hidden lg:inline">
                  {user.email}
                </span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="default" size="sm">
                    Request Quote
                  </Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
