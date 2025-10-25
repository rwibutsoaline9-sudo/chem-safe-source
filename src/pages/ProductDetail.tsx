import { useParams, Link } from "react-router-dom";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Download, Package, Beaker, FileText, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import productUrea from "@/assets/product-urea.jpg";
import productSodiumCyanide from "@/assets/product-sodium-cyanide.jpg";
import productCausticSoda from "@/assets/product-caustic-soda.jpg";

const imageMap: Record<string, string> = {
  "product-urea.jpg": productUrea,
  "product-sodium-cyanide.jpg": productSodiumCyanide,
  "product-caustic-soda.jpg": productCausticSoda,
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const imageSrc = imageMap[product.image] || productUrea;

  const handleDownloadSDS = () => {
    toast.info("SDS download will be available upon quote request verification");
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <Link to="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Products
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-6">
                <img 
                  src={imageSrc} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.restricted && (
                <Card className="border-destructive/50 bg-destructive/5">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive mb-1">Restricted Chemical</p>
                        <p className="text-sm text-muted-foreground">
                          This product requires business license verification and proper documentation. 
                          Please ensure compliance with local regulations before requesting a quote.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-4xl font-bold">{product.name}</h1>
                {product.restricted && (
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Restricted
                  </Badge>
                )}
              </div>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Beaker className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Purity</p>
                        <p className="text-muted-foreground">{product.purity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Grade</p>
                        <p className="text-muted-foreground">{product.grade}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Package className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">CAS Number</p>
                        <p className="text-muted-foreground">{product.casNumber}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Description</h2>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Applications</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, index) => (
                      <Badge key={index} variant="secondary">{app}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Available Packaging</h2>
                  <ul className="space-y-2">
                    {product.packaging.map((pkg, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <Package className="w-4 h-4 text-primary" />
                        {pkg}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex-1">
                  <Button size="lg" className="w-full">
                    Request Quote
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleDownloadSDS}
                  className="flex-1"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download SDS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
