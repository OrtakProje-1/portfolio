import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
      {/* Tüm uygulama için arka plan kapsayıcısı */}
      <div className="relative min-h-screen">
        {/* Arka plan çizgileri */}
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth=".5" className="text-gray-200 dark:text-gray-400" />
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="currentColor" strokeWidth=".5" className="text-gray-200 dark:text-gray-400" />
          <line x1="40%" y1="0" x2="40%" y2="100%" stroke="currentColor" strokeWidth=".5" className="text-gray-200 dark:text-gray-400" />
          <line x1="60%" y1="0" x2="60%" y2="100%" stroke="currentColor" strokeWidth=".5" className="text-gray-200 dark:text-gray-400" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="currentColor" strokeWidth=".5" className="text-gray-200 dark:text-gray-400" />
         
        </svg>
        {/* Tüm içerik burada */}
        <div className="relative z-10">
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
