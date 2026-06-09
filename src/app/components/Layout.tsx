import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Twitter, Youtube, Music } from "lucide-react";
import { Button } from "./ui/Button";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Releases", path: "/releases" },
    { label: "Events", path: "/events" },
    { label: "Radio", path: "/radio" },
    { label: "Merch", path: "/merch" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-brand-white font-sans selection:bg-brand-mustard selection:text-brand-black">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-black/85 backdrop-blur-md premium-transition">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard touch-target">
            <img src="/logo.png" alt="TopKlass Sounds Logo" className="h-12 md:h-16 w-auto object-contain" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-widest uppercase transition-colors hover:text-brand-mustard focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard ${
                  location.pathname === link.path ? "text-brand-mustard" : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="primary">Contact</Button>
            </Link>
          </div>

          {/* Mobile Actions (CTA + Toggle) */}
          <div className="flex md:hidden items-center gap-3">
            <button
              className="w-11 h-11 flex items-center justify-center text-white hover:text-brand-mustard transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-brand-black/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 p-4 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-heading font-black uppercase tracking-widest transition-colors hover:text-brand-mustard ${
                location.pathname === link.path ? "text-brand-mustard" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="w-full max-w-xs mt-8">
            <Button variant="primary" className="w-full text-lg py-4 min-h-[48px]">Contact Us</Button>
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-0">
        <Outlet />
      </main>

      {/* Sticky Footer */}
      <footer className="mt-auto border-t border-white/10 bg-brand-black text-white/50 py-8 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src="/logo.png" alt="TopKlass Sounds Logo" className="h-10 w-auto object-contain" />
          </div>
          <p className="text-sm">© {new Date().getFullYear()} TopKlass Sounds. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <a 
              href="https://www.instagram.com/murathedj/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="w-11 h-11 flex items-center justify-center hover:text-brand-mustard transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@murathedj" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Youtube" 
              className="w-11 h-11 flex items-center justify-center hover:text-brand-mustard transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@murathedj" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok" 
              className="w-11 h-11 flex items-center justify-center hover:text-brand-mustard transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard"
            >
              <Music className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
