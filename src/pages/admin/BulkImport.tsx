import { useState } from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { products as staticProducts } from '@/lib/products';
import { Upload } from 'lucide-react';

const BulkImport = () => {
  const [importing, setImporting] = useState(false);

  const handleBulkImport = async () => {
    setImporting(true);
    
    try {
      // Transform static products to database format
      const productsToImport = staticProducts.map(p => ({
        name: p.name,
        category: p.category,
        purity: p.purity,
        grade: p.grade,
        cas_number: p.casNumber,
        description: p.description,
        applications: p.applications,
        packaging: p.packaging,
        price_value: p.price.value,
        price_unit: p.price.unit,
        price_currency: p.price.currency,
        is_restricted: p.restricted,
        image_url: p.image,
      }));

      const { data, error } = await supabase
        .from('products')
        .insert(productsToImport);

      if (error) throw error;

      toast.success(`Successfully imported ${productsToImport.length} products!`);
    } catch (error: any) {
      console.error('Import error:', error);
      toast.error(`Import failed: ${error.message}`);
    } finally {
      setImporting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Bulk Import Products</h1>

        <Card>
          <CardHeader>
            <CardTitle>Import 200 Chemical Products</CardTitle>
            <CardDescription>
              This will import all 200 pre-configured chemical products into your database.
              This action can only be done once - if products already exist, this will create duplicates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleBulkImport} 
              disabled={importing}
              size="lg"
              className="w-full md:w-auto"
            >
              <Upload className="mr-2 h-5 w-5" />
              {importing ? 'Importing...' : 'Import All Products'}
            </Button>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>What will be imported?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 200 industrial chemicals across 10 categories</li>
              <li>• Complete product details (name, CAS number, purity, grade)</li>
              <li>• Pricing information</li>
              <li>• Applications and packaging details</li>
              <li>• Restricted item flags</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default BulkImport;
