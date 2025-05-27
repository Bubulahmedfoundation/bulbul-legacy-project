
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import NewsAndPrograms from "./pages/NewsAndPrograms";
import GetInvolved from "./pages/GetInvolved";
import Filmography from "./pages/Filmography";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Admin route without Navbar/Footer */}
            <Route path="/admin" element={<Admin />} />
            
            {/* Regular routes with Navbar/Footer */}
            <Route path="/" element={
              <>
                <Navbar />
                <main>
                  <Index />
                </main>
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <Navbar />
                <main>
                  <About />
                </main>
                <Footer />
              </>
            } />
            <Route path="/news-and-programs" element={
              <>
                <Navbar />
                <main>
                  <NewsAndPrograms />
                </main>
                <Footer />
              </>
            } />
            {/* Redirect old routes to the new combined page */}
            <Route path="/news" element={<Navigate to="/news-and-programs" />} />
            <Route path="/programs" element={<Navigate to="/news-and-programs" />} />
            <Route path="/get-involved" element={
              <>
                <Navbar />
                <main>
                  <GetInvolved />
                </main>
                <Footer />
              </>
            } />
            <Route path="/filmography" element={
              <>
                <Navbar />
                <main>
                  <Filmography />
                </main>
                <Footer />
              </>
            } />
            <Route path="*" element={
              <>
                <Navbar />
                <main>
                  <NotFound />
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
