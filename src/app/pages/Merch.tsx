import { X, ShoppingCart, Disc } from "lucide-react";
import { useState } from "react";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { Button } from "../components/ui/Button";

const products = [
  { id: 1, name: "Mura, Hiribae, Ghedi, Ayrosh - My Lover", price: "Stream / Buy", category: "Music", src: "/assets/releases/my-lover.jpg", stream: "https://orcd.co/my-lover-presave", bandcamp: "https://topklasssounds.bandcamp.com/" },
  { id: 2, name: "TopKlass Logo Hoodie", price: "$65", category: "Apparel", src: "https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZXxlbnwxfHx8fDE3NzUwNTcxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 3, name: "Classic Eye Tee", price: "$35", category: "Apparel", src: "https://images.unsplash.com/photo-1759572095329-1dcf9522762b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdC1zaGlydHxlbnwxfHx8fDE3NzUxMjM5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 4, name: "Vanguard Cap", price: "$30", category: "Accessories", src: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { id: 5, name: "Show #500 Vinyl", price: "$40", category: "Music", src: "https://images.unsplash.com/photo-1580656449278-e8381933522c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHxlbnwxfHx8fDE3NzUwOTk4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 6, name: "Mura, Sjef Rolet, Zaituni - Sema", price: "Stream / Buy", category: "Music", src: "/assets/releases/sema.jpg", stream: "https://orcd.co/sema_djmura", bandcamp: "https://topklasssounds.bandcamp.com/" },
  { id: 7, name: "Mura, Dj Fita, N’Jiru - Kazi", price: "Stream / Buy", category: "Music", src: "/assets/releases/kazi.jpg", stream: "https://orcd.co/7aovpak", bandcamp: "https://topklasssounds.bandcamp.com/" },
  { id: 8, name: "Mura, Saint Evo, Labdi - Awuoro", price: "Stream / Buy", category: "Music", src: "/assets/releases/awuoro.jpg", stream: "https://orcd.co/775ryej", bandcamp: "https://topklasssounds.bandcamp.com/" },
  { id: 9, name: "Mura, Big Nyagz, Coster Ojwang, Yah Listen - Rejea", price: "Stream / Buy", category: "Music", src: "/assets/releases/rejea.jpg", stream: "https://orcd.co/b0dv1mo", bandcamp: "https://topklasssounds.bandcamp.com/" },
  { id: 10, name: "Mura, Big Nyagz, N’Jiru - Running", price: "Stream / Buy", category: "Music", src: "/assets/releases/running.jpg", stream: "https://orcd.co/d3mmp1p", bandcamp: "https://topklasssounds.bandcamp.com/" },
  { id: 11, name: "Mura, Big Nyagz - Likizo Ep", price: "Stream / Buy", category: "Music", src: "/assets/releases/likizo.jpg", stream: "https://orcd.co/omk9dor", bandcamp: "https://topklasssounds.bandcamp.com/" },
  { id: 12, name: "Mura, Ywaya Tajiri - Waridi", price: "Stream / Buy", category: "Music", src: "/assets/releases/waridi.jpg", stream: "https://orcd.co/nlzomnb", bandcamp: "https://topklasssounds.bandcamp.com/" },
  { id: 13, name: "Mura, Ywaya Tajiri - Lucky Summer", price: "Stream / Buy", category: "Music", src: "/assets/releases/lucky-summer.jpg", stream: "https://orcd.co/prjm9pw", bandcamp: "https://topklasssounds.bandcamp.com/" }
];

export function Merch() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [isAdded, setIsAdded] = useState(false);

  const filteredProducts = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
        <div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-4">
            Official <span className="text-brand-mustard">Merch</span>
          </h1>
          <p className="text-white/70 font-sans font-light max-w-2xl text-lg leading-relaxed">
            Represent the culture. Minimalist, premium gear inspired by the underground sound.
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex gap-4 text-sm font-sans uppercase tracking-widest text-white/50">
          {["All", "Apparel", "Accessories", "Music"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`${filter === category ? "text-brand-mustard border-b border-brand-mustard" : "hover:text-white"} transition-colors pb-1 focus:outline-none`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer focus-within:ring-2 focus-within:ring-brand-mustard outline-none"
            onClick={() => setSelectedProduct(product)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedSize("M");
                setIsAdded(false);
                setSelectedProduct(product);
              }
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-brand-black mb-6 border border-white/10 group-hover:border-brand-mustard/50 transition-colors">
              <ImagePlaceholder
                src={product.src}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                recommendedSize="800x1000px"
              />
              <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-brand-mustard text-brand-black font-heading font-black uppercase tracking-widest px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Quick View
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-white/40 font-sans text-xs uppercase tracking-widest mb-2">
                {product.category}
              </span>
              <h2 className="text-xl font-heading font-black text-white uppercase tracking-tight mb-2 group-hover:text-brand-mustard transition-colors">
                {product.name}
              </h2>
              <span className="text-white/80 font-mono text-lg">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-brand-black/98 backdrop-blur-xl"
          onClick={() => {
            setSelectedProduct(null);
            setIsAdded(false);
          }}
        >
          <div
            className="bg-brand-black border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="group absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-brand-mustard flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none"
              onClick={() => {
                setSelectedProduct(null);
                setIsAdded(false);
              }}
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white group-hover:text-brand-black transition-colors" />
            </button>

            <div className="w-full md:w-1/2 bg-white/5 aspect-square md:aspect-auto border-r border-white/5">
              <ImagePlaceholder
                src={selectedProduct.src}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
                recommendedSize="1000x1000px"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-brand-black">
              <span className="text-brand-mustard font-sans text-xs uppercase tracking-widest mb-4">
                {selectedProduct.category}
              </span>
              <h2 id="modal-title" className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-4">
                {selectedProduct.name}
              </h2>
              <span className="text-3xl font-mono text-white/90 mb-8 border-b border-white/10 pb-8">
                {selectedProduct.price}
              </span>

              <div className="mb-8">
                <p className="text-white/60 font-sans font-light leading-relaxed mb-6">
                  {selectedProduct.category === "Music" 
                    ? "Direct from the TopKlass archive. High-quality production curated for the global sound system culture. Stream or own it today."
                    : "Premium heavyweight cotton blend. Boxy fit. Hand-printed graphics featuring the iconic TopKlass logo. Designed in Los Angeles."}
                </p>

                {selectedProduct.category !== "Music" && (
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm font-sans uppercase tracking-widest text-white/50 mb-2">
                      <span>Size</span>
                      <button className="underline hover:text-white focus:outline-none">Size Guide</button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {['S', 'M', 'L', 'XL'].map(size => (
                        <button
                          key={size}
                          onClick={() => {
                            setSelectedSize(size);
                            setIsAdded(false);
                          }}
                          className={`h-12 border transition-colors font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard ${selectedSize === size
                              ? "border-brand-mustard text-brand-mustard bg-brand-mustard/10"
                              : "border-white/20 text-white hover:border-brand-mustard hover:text-brand-mustard"
                            }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                {selectedProduct.category === "Music" && (selectedProduct as any).stream ? (
                  <>
                    <a 
                      href={(selectedProduct as any).stream} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="lg" className="w-full gap-2 border-white/20 text-white hover:bg-white/10">
                        <Disc className="w-5 h-5 text-brand-mustard" /> Listen
                      </Button>
                    </a>
                    <a 
                      href={(selectedProduct as any).bandcamp || "https://topklasssounds.bandcamp.com/"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="primary" size="lg" className="w-full gap-2">
                        <ShoppingCart className="w-5 h-5" /> Buy on Bandcamp
                      </Button>
                    </a>
                  </>
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    className={`flex-1 gap-2 transition-all ${isAdded ? 'bg-green-500 hover:bg-green-400 text-white border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]' : ''}`}
                    onClick={() => {
                      setIsAdded(true);
                      setTimeout(() => setIsAdded(false), 3000);
                    }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {isAdded ? "Added to Cart!" : "Add to Cart"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
