import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Package, DollarSign, ShieldAlert, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    restrictedProducts: 0,
    totalValue: 0,
    categories: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const { data: products } = await supabase.from('products').select('*');

      if (products) {
        const totalValue = products.reduce((sum, p) => sum + Number(p.price_value), 0);
        const categories = new Set(products.map(p => p.category)).size;
        const restrictedCount = products.filter(p => p.is_restricted).length;

        setStats({
          totalProducts: products.length,
          restrictedProducts: restrictedCount,
          totalValue,
          categories,
        });
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: Package,
      color: 'text-blue-500',
    },
    {
      title: 'Restricted Items',
      value: stats.restrictedProducts,
      icon: ShieldAlert,
      color: 'text-red-500',
    },
    {
      title: 'Categories',
      value: stats.categories,
      icon: TrendingUp,
      color: 'text-green-500',
    },
    {
      title: 'Total Catalog Value',
      value: `$${stats.totalValue.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-yellow-500',
    },
  ];

  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome to Admin Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Manage your chemical products inventory, update prices, and control product availability.
              Use the sidebar to navigate between different sections.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
