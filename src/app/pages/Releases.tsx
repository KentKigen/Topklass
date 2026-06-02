import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { Play, Disc } from "lucide-react";

const releases = [
  { 
    id: 1, 
    title: "Mura, Hiribae, Ghedi, Ayrosh - My Lover", 
    src: "/assets/releases/my-lover.jpg", 
    stream: "https://orcd.co/my-lover-presave" 
  },
  { 
    id: 2, 
    title: "Mura, Sjef Rolet, Zaituni - Sema", 
    src: "/assets/releases/sema.jpg", 
    stream: "https://orcd.co/sema_djmura" 
  },
  { 
    id: 3, 
    title: "Mura, Dj Fita, N’Jiru - Kazi", 
    src: "/assets/releases/kazi.jpg", 
    elements: "https://drive.google.com/drive/folders/1xs7HDbL7mL-Cxgqw1es-tx4ZwmtR4FjG?usp=drive_link", 
    stream: "https://orcd.co/7aovpak" 
  },
  { 
    id: 4, 
    title: "Mura, Saint Evo, Labdi - Awuoro", 
    src: "/assets/releases/awuoro.jpg", 
    elements: "https://drive.google.com/drive/folders/1n48IuUlQindKDgnS7BkKnI5uC5mrhV38?usp=drive_link", 
    stream: "https://orcd.co/775ryej" 
  },
  { 
    id: 5, 
    title: "Mura, Big Nyagz, Coster Ojwang, Yah Listen - Rejea", 
    src: "/assets/releases/rejea.jpg", 
    elements: "https://drive.google.com/drive/folders/11aOnOZMqVjicURyAYBzhWFm0WbHuk03T?usp=drive_link", 
    stream: "https://orcd.co/b0dv1mo" 
  },
  { 
    id: 6, 
    title: "Mura, Big Nyagz, N’Jiru - Running", 
    src: "/assets/releases/running.jpg", 
    elements: "https://drive.google.com/drive/folders/1xs7HDbL7mL-Cxgqw1es-tx4ZwmtR4FjG?usp=drive_link", 
    stream: "https://orcd.co/d3mmp1p" 
  },
  { 
    id: 7, 
    title: "Mura, Big Nyagz - Likizo Ep", 
    src: "/assets/releases/likizo.jpg", 
    elements: "https://drive.google.com/drive/folders/1mjSln_V8cuq660v50WHYCiAL1Tsqgw9_?usp=drive_link", 
    stream: "https://orcd.co/omk9dor" 
  },
  { 
    id: 8, 
    title: "Mura, Ywaya Tajiri - Waridi", 
    src: "/assets/releases/waridi.jpg", 
    elements: "https://drive.google.com/drive/folders/1vSBpYNGvZ83qJ4H-JYIDijqYaiPsg-Ym?usp=drive_link", 
    stream: "https://orcd.co/nlzomnb" 
  },
  { 
    id: 9, 
    title: "Mura, Ywaya Tajiri - Lucky Summer", 
    src: "/assets/releases/lucky-summer.jpg", 
    elements: "https://drive.google.com/drive/folders/16IeuDeNi-1Dr-Z89ISBGqqCPNZAlvENl?usp=drive_link", 
    stream: "https://orcd.co/prjm9pw" 
  }
];

export function Releases() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
        <div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-4">
            Label <span className="text-brand-mustard">Releases</span>
          </h1>
          <p className="text-white/70 font-sans font-light max-w-2xl text-lg leading-relaxed">
            Explore the sonic world of Topklass. From deep house to experimental electronic beats.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {releases.map((release) => (
          <div key={release.id} className="group relative">
            {/* Image Thumbnail - Clickable to Stream */}
            <a 
              href={release.stream} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative aspect-square overflow-hidden bg-brand-black mb-6 border border-white/5 shadow-2xl transition-transform hover:-translate-y-1 duration-300"
            >
              <ImagePlaceholder
                src={release.src}
                alt={release.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                recommendedSize="800x800px"
              />
              <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-mustard text-brand-black flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-6 h-6 ml-1" />
                </div>
              </div>
            </a>
            
            <div className="flex flex-col">
              {/* Title Clickable to Stream */}
              <a 
                href={release.stream} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <h2 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tight mb-4 group-hover:text-brand-mustard transition-colors line-clamp-2">
                  {release.title}
                </h2>
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
