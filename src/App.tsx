import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Safety from "./pages/Safety";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/Products";
import Settings from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes with header/footer */}
          <Route path="/" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Home />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/products" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Products />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/products/:id" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <ProductDetail />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/about" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <About />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/safety" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Safety />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/contact" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Contact />
              </main>
              <Footer />
            </div>
          } />
          
          {/* Auth route (no header/footer) */}
          <Route path="/auth" element={<Auth />} />
          
          {/* Admin routes (protected, no header/footer - has its own layout) */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/products" element={
            <ProtectedRoute>
              <AdminProducts />
            </ProtectedRoute>
          } />
          <Route path="/admin/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
          
          {/* 404 */}
          <Route path="*" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <NotFound />
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
