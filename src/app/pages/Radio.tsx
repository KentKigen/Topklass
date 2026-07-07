import { Headphones, Radio as RadioIcon, Share2, Disc } from "lucide-react";
import { Button } from "../components/ui/Button";

const episodes = [
  { id: 5, title: "Radio Topklass 005 with Mura", guest: "Mura", duration: "120 min" },
  { id: 4, title: "Radio Topklass 004 with Mura", guest: "Vigro Deep (Guest)", duration: "120 min" },
  { id: 3, title: "Radio Topklass 003 with Mura", guest: "Uncle Waffles (Guest)", duration: "120 min" },
  { id: 2, title: "Radio Topklass 002 with Mura", guest: "Mura", duration: "120 min" },
];

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.241c-.6.181-1.2-.12-1.38-.72-.18-.6.12-1.2.72-1.38 4.32-1.26 11.28-.96 16.08 1.86.54.3.72 1.02.42 1.56-.24.48-.96.72-1.5.42z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export function Radio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-black via-brand-green/10 to-brand-black">
      <div className="text-white bg-gradient-to-r from-brand-green to-brand-black border-b border-brand-green/50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-4 drop-shadow-xl">
                TopKlass <span className="text-brand-mustard">Radio</span>
              </h1>
              <p className="text-white/80 font-sans font-medium max-w-2xl text-lg leading-relaxed drop-shadow-md">
                The sound of the underground, curated weekly by Mura. Tune in to the latest selections.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Main Player Area */}
        <div className="lg:col-span-8 flex-1 flex flex-col gap-12">
          
          {/* Hero Player */}
          <div className="bg-[#121212] border border-white/10 relative overflow-hidden group shadow-2xl rounded-xl ring-1 ring-white/5">
            {/* Video Container - clean 16:9 aspect ratio */}
            <div className="aspect-video relative bg-brand-black overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/C96afQY6Oc0?autoplay=0" 
                title="Radio Topklass 001 with Mura"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Metadata and Details below the video */}
            <div className="p-6 md:p-8 w-full border-t border-white/5">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                <span className="bg-brand-mustard/10 border border-brand-mustard/30 text-brand-mustard px-3 py-1 font-sans font-bold tracking-widest text-[10px] md:text-xs uppercase flex items-center gap-2 rounded-full w-max backdrop-blur-sm shadow-[0_0_15px_rgba(212,160,23,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-brand-mustard animate-pulse shadow-[0_0_5px_#D4A017]" /> Live Now
                </span>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="h-9 px-4 rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white/40 text-[10px] md:text-xs font-sans font-bold uppercase tracking-wider">
                    View Tracklist
                  </Button>
                  <button className="touch-target flex items-center justify-center gap-2 px-4 py-2 border border-white/10 hover:border-white/30 text-white/80 hover:text-white rounded-full text-[10px] md:text-xs font-sans font-bold transition-all uppercase tracking-wider bg-white/5" aria-label="Share">
                    <Share2 className="w-4.5 h-4.5" /> Share
                  </button>
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter mb-3 leading-tight">
                Radio Topklass 001 with Mura
              </h2>
              <p className="text-sm md:text-base text-white/70 font-sans leading-relaxed max-w-3xl">
                Mura takes us on a journey through some of the best Afrohouse & 3-Step jams from the continent to the world.
              </p>
            </div>
          </div>

          {/* Featured Podcasts Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight flex items-center gap-2 border-b border-white/10 pb-4">
              Featured on Platforms
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Spotify Card */}
              <a href="https://open.spotify.com/playlist/5dHLsm0N1RvseZRzC2wgyi?si=9ddf2d4dede148d8" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 bg-[#121212] border border-white/5 hover:border-[#1DB954]/50 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#1DB954]">
                <div className="w-14 h-14 bg-[#1DB954]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1DB954]/20 transition-colors">
                  <SpotifyIcon className="w-8 h-8 text-[#1DB954]" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-white uppercase tracking-tight mb-1 group-hover:text-[#1DB954] transition-colors">
                    Spotify Playlist
                  </h4>
                  <p className="text-white/50 text-sm font-sans">Curated Afro-house & 3-Step</p>
                </div>
              </a>

              {/* YouTube Card */}
              <a href="https://www.youtube.com/watch?v=C96afQY6Oc0&list=RDC96afQY6Oc0&start_radio=1" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 bg-[#121212] border border-white/5 hover:border-[#FF0000]/50 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF0000]">
                <div className="w-14 h-14 bg-[#FF0000]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF0000]/20 transition-colors">
                  <YoutubeIcon className="w-8 h-8 text-[#FF0000]" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-white uppercase tracking-tight mb-1 group-hover:text-[#FF0000] transition-colors">
                    YouTube Series
                  </h4>
                  <p className="text-white/50 text-sm font-sans">Watch exclusive live sets</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar Archives */}
        <div className="lg:col-span-4 w-full lg:w-[400px] flex flex-col gap-6 bg-brand-black/30 p-6 rounded-xl border border-white/5 h-max">
          {/* Featured Latest Release */}
          <div className="mb-8 p-6 bg-brand-mustard/5 border border-brand-mustard/20 rounded-xl relative overflow-hidden group">
            <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight mb-4 flex items-center gap-2">
              <Disc className="w-5 h-5 text-brand-mustard" /> Latest Release
            </h3>
            <a href="#" target="_blank" rel="noopener noreferrer" className="block outline-none">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4 border border-white/10 shadow-xl">
                <img src="/assets/releases/balenciaga.jpg" alt="Balenciaga Artwork" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-brand-mustard/0 group-hover:bg-brand-mustard/10 transition-colors" />
              </div>
              <h4 className="text-white font-heading font-bold uppercase tracking-tight group-hover:text-brand-mustard transition-colors leading-tight mb-1">
                Balenciaga
              </h4>
              <p className="text-white/50 text-xs font-sans uppercase tracking-[0.2em]">Mura, Big Nyagz, Ayrosh</p>
            </a>
          </div>

          <div className="hidden items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight flex items-center gap-2">
              <RadioIcon className="w-5 h-5 text-brand-mustard" /> Archive Episodes
            </h3>
            <button className="text-xs font-sans font-bold text-brand-mustard uppercase tracking-widest hover:text-white transition-colors focus:outline-none">
              View All
            </button>
          </div>

          <div className="hidden flex-col gap-3">
            {episodes.map(ep => (
              <a 
                key={ep.id} 
                href="https://www.youtube.com/watch?v=C96afQY6Oc0&list=RDC96afQY6Oc0&start_radio=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 bg-brand-black border border-white/5 hover:border-brand-mustard/30 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-brand-mustard text-left w-full"
              >
                <div className="w-12 h-12 bg-white/5 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-brand-mustard/10 transition-colors relative overflow-hidden">
                  <Headphones className="w-5 h-5 text-white/50 group-hover:text-brand-mustard relative z-10" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-heading font-bold text-white uppercase tracking-tight mb-1 group-hover:text-brand-mustard transition-colors truncate">
                    {ep.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs font-sans tracking-widest uppercase truncate pr-2">{ep.guest}</span>
                    <span className="text-brand-mustard/70 text-xs font-mono flex-shrink-0">64 Minutes</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <Button variant="outline" className="hidden w-full mt-4 border-white/10 text-white/70 hover:text-white">
            Load More Shows
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
}
