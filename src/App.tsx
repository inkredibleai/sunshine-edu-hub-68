import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import School from "./pages/School";
import College from "./pages/College";
import Coaching from "./pages/Coaching";
import Pharmacy from "./pages/Pharmacy";
import Military from "./pages/Military";
import KidsCare from "./pages/KidsCare";

const App = () => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/school" element={<School />} />
            <Route path="/college" element={<College />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/military" element={<Military />} />
            <Route path="/kidscare" element={<KidsCare />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;