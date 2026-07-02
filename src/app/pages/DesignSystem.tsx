import { Button } from "../components/ui/Button";

export function DesignSystem() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen font-sans selection:bg-brand-mustard selection:text-brand-black">
      <div className="mb-20 pb-8 border-b border-white/10">
        <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-4">
          Design <span className="text-brand-mustard">System</span>
        </h1>
        <p className="text-white/70 font-light max-w-2xl text-lg leading-relaxed">
          Handoff documentation, component library, utility tokens, and export settings for the TOPKLASS SOUNDS website.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        {/* Sidebar Nav (Static for display) */}
        <div className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-32 flex flex-col gap-4">
            <h4 className="text-brand-mustard font-bold uppercase tracking-widest text-xs mb-2">Sections</h4>
            <a href="#colors" className="text-white/60 hover:text-white uppercase tracking-widest text-sm font-semibold transition-colors">Colors</a>
            <a href="#typography" className="text-white/60 hover:text-white uppercase tracking-widest text-sm font-semibold transition-colors">Typography</a>
            <a href="#components" className="text-white/60 hover:text-white uppercase tracking-widest text-sm font-semibold transition-colors">Components</a>
            <a href="#export" className="text-white/60 hover:text-white uppercase tracking-widest text-sm font-semibold transition-colors">Export Settings</a>
            <a href="#mobile-responsive" className="text-white/60 hover:text-white uppercase tracking-widest text-sm font-semibold transition-colors">Mobile Responsive</a>
          </div>
        </div>

        <div className="lg:col-span-9 flex flex-col gap-24">
          {/* Colors */}
          <section id="colors">
            <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-brand-mustard" /> Brand Colors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Brand Black", hex: "#000000", class: "bg-brand-black", textClass: "text-white" },
                { name: "Brand White", hex: "#FFFFFF", class: "bg-brand-white", textClass: "text-black" },
                { name: "Mustard", hex: "#D4A017", class: "bg-brand-mustard", textClass: "text-black" },
                { name: "Hunter Green", hex: "#2B512C", class: "bg-brand-green", textClass: "text-white" }
              ].map(color => (
                <div key={color.name} className="flex flex-col gap-3">
                  <div className={`w-full aspect-square ${color.class} border border-white/20 rounded-sm flex items-end p-4`}>
                    <span className={`${color.textClass} font-mono text-sm font-bold opacity-80`}>{color.hex}</span>
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-white uppercase tracking-tight">{color.name}</h5>
                    <p className="font-mono text-xs text-white/50">{`var(--color-${color.name.toLowerCase().replace(' ', '-')})`}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section id="typography">
            <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-brand-mustard" /> Typography
            </h2>
            <div className="flex flex-col gap-12 border border-white/10 p-8 bg-white/[0.02]">
              <div>
                <span className="text-brand-mustard font-mono text-xs mb-2 block">.font-heading</span>
                <h3 className="text-6xl font-heading font-black text-white uppercase tracking-tighter mb-2">Montserrat</h3>
                <p className="text-white/50 font-sans text-sm">Used for all primary headlines, navigation links, and emphasis. Weight: Black (900).</p>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div>
                <span className="text-brand-mustard font-mono text-xs mb-2 block">.font-sans</span>
                <h3 className="text-4xl font-sans font-light text-white mb-2">Inter</h3>
                <p className="text-white/50 font-sans text-sm">Used for body copy, descriptions, and secondary metadata. Weights: Light (300), Regular (400), Bold (700).</p>
              </div>
            </div>
          </section>

          {/* Components */}
          <section id="components">
            <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-brand-mustard" /> Component Library
            </h2>
            
            <div className="flex flex-col gap-16">
              {/* Buttons */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-tight mb-6">Buttons</h3>
                <div className="flex flex-wrap items-center gap-6 p-8 border border-white/10 bg-brand-black">
                  <div className="flex flex-col gap-2 items-center">
                    <Button variant="primary">Primary Button</Button>
                    <span className="text-xs font-mono text-white/40">variant="primary"</span>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <Button variant="secondary">Secondary Button</Button>
                    <span className="text-xs font-mono text-white/40">variant="secondary"</span>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <Button variant="outline">Outline Button</Button>
                    <span className="text-xs font-mono text-white/40">variant="outline"</span>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <Button variant="ghost">Ghost Button</Button>
                    <span className="text-xs font-mono text-white/40">variant="ghost"</span>
                  </div>
                </div>
              </div>

              {/* Badges/Tags */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-tight mb-6">Badges & Tags</h3>
                <div className="flex flex-wrap items-center gap-6 p-8 border border-white/10 bg-brand-black">
                  <div className="flex flex-col gap-2">
                    <span className="text-brand-mustard bg-brand-mustard/10 px-3 py-1 text-xs font-mono uppercase tracking-widest border border-brand-mustard/20">Category Tag</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-white/50 bg-white/5 px-3 py-1 text-xs font-sans font-bold uppercase tracking-widest border border-white/10">Secondary Tag</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-mustard animate-pulse" title="Live Indicator" />
                  </div>
                </div>
              </div>

              {/* Input Fields */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-tight mb-6">Forms</h3>
                <div className="flex flex-col gap-6 p-8 border border-white/10 bg-brand-black max-w-md">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-sans font-bold text-white/50 uppercase tracking-widest">Text Input</label>
                    <input 
                      type="text" 
                      className="bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-brand-mustard focus:ring-0 transition-colors placeholder:text-white/20"
                      placeholder="Placeholder text..."
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-sans font-bold text-white/50 uppercase tracking-widest">Active/Focus State</label>
                    <input 
                      type="text" 
                      className="bg-transparent border-b border-brand-mustard text-white pb-2 outline-none ring-0 placeholder:text-white/20"
                      defaultValue="Focused input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Export Settings */}
          <section id="export">
            <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-brand-mustard" /> Export Settings
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-white/10 p-8 bg-white/[0.02]">
                <h4 className="text-brand-mustard font-bold uppercase tracking-widest text-sm mb-4">Image Dimensions</h4>
                <ul className="flex flex-col gap-4 font-mono text-sm text-white/70">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Hero Backgrounds</span>
                    <span className="text-white">1920x1080px (16:9)</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Release Covers</span>
                    <span className="text-white">800x800px (1:1)</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Merch Products</span>
                    <span className="text-white">800x1000px (4:5)</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Event/Radio Thumbs</span>
                    <span className="text-white">1200x675px (16:9)</span>
                  </li>
                </ul>
              </div>

              <div className="border border-white/10 p-8 bg-white/[0.02]">
                <h4 className="text-brand-mustard font-bold uppercase tracking-widest text-sm mb-4">Breakpoints</h4>
                <ul className="flex flex-col gap-4 font-mono text-sm text-white/70">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Mobile</span>
                    <span className="text-white">375px (sm: 640px)</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Tablet</span>
                    <span className="text-white">768px (md: 768px)</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Desktop</span>
                    <span className="text-white">1440px (lg: 1024px, xl: 1280px)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mobile Responsiveness & Micro-interactions */}
          <section id="mobile-responsive">
            <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-brand-mustard" /> Mobile Responsiveness
            </h2>
            <div className="border border-white/10 p-8 bg-white/[0.02] flex flex-col gap-8">
              <div>
                <h4 className="text-brand-mustard font-bold uppercase tracking-widest text-sm mb-4">Mobile Spacing & Typography Rules</h4>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  We use fluid scaling utilizing CSS <code>clamp()</code> so headings and core container padding scale dynamically down for mobile viewports without breaking desktop composition.
                </p>
                <div className="grid md:grid-cols-2 gap-4 font-mono text-xs text-white/60">
                  <div className="bg-brand-black p-4 border border-white/5 rounded-sm">
                    <span className="text-white font-bold block mb-1">Typography Clamp Settings:</span>
                    H1: clamp(2.25rem, 5vw + 1rem, 3rem)<br />
                    H2: clamp(1.75rem, 3.5vw + 0.75rem, 2.25rem)<br />
                    H3: clamp(1.35rem, 2.5vw + 0.5rem, 1.75rem)
                  </div>
                  <div className="bg-brand-black p-4 border border-white/5 rounded-sm">
                    <span className="text-white font-bold block mb-1">Spacing Clamp Settings:</span>
                    --spacing-4: clamp(0.875rem, 2vw, 1rem)<br />
                    --spacing-6: clamp(1.125rem, 3vw, 1.5rem)<br />
                    --spacing-10: clamp(1.5rem, 5vw, 2.5rem)
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-white/10" />

              <div>
                <h4 className="text-brand-mustard font-bold uppercase tracking-widest text-sm mb-4">Interactive Mobile Touch Target Sandbox</h4>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Touch targets are guaranteed to be at least <code>44x44px</code>. Hover fallbacks prevent sticky states on touch screen devices by checking hover media support. Try the demo element below.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center p-6 bg-brand-black border border-white/5">
                  <div className="flex flex-col gap-2">
                    <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Touch Target Demo Card</span>
                    <div className="touch-target touch-hover bg-brand-green/20 border border-brand-green text-white px-6 py-4 rounded-sm flex items-center gap-3 cursor-pointer select-none premium-transition">
                      <span className="w-2 h-2 rounded-full bg-brand-mustard animate-pulse" />
                      <span className="font-heading font-black text-sm uppercase tracking-wider">Tap Me (44px+)</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-xs text-white/50 flex flex-col gap-2">
                    <span className="text-white/70 font-bold">Applied Utilities:</span>
                    <code className="text-brand-mustard bg-white/5 p-1 px-2 rounded-sm w-max">.touch-target</code>
                    <code className="text-brand-mustard bg-white/5 p-1 px-2 rounded-sm w-max">.touch-hover</code>
                    <code className="text-brand-mustard bg-white/5 p-1 px-2 rounded-sm w-max">.premium-transition</code>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
