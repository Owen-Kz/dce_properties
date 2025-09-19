// App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Only one route is needed for the main app */}
          <Route path="/" element={<Index />} />
               <Route path="/about" element={<Index />} />
          <Route path="/partners" element={<Index />} />
          <Route path="/properties" element={<Index />} />
          <Route path="/services" element={<Index />} />
          <Route path="/investors" element={<Index />} />
          <Route path="/artisans" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;