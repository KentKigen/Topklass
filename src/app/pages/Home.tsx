import { Link } from "react-router";
import { Button } from "../components/ui/Button";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Play, Calendar, MapPin, Radio as RadioIcon, ArrowRight } from "lucide-react";
import { motion as Motion } from "motion/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// @ts-ignore - The image exists in the local filesystem as uploaded by the user
import heroBg from "../../imports/IMG_3123.JPG";

export function Home() {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <div className="flex flex-col w-full bg-brand-black">
      {/* 1. Bold Home Hero */}
      <section className="hero-grain hero-overlay relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src={heroBg}
          alt="TopKlass Sounds Hero Background"
          className="absolute inset-0 w-full h-full object-cover scale-105 brightness-90 contrast-125"
        />
        <div className="absolute inset-0 bg-brand-black/50 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center pb-24">
          <div className="max-w-4xl flex flex-col items-center">
            {/* Staggered Premium Reveal */}
            <h1 className="flex flex-col text-6xl md:text-8xl lg:text-[10rem] font-heading font-black tracking-tighter text-white mb-6 uppercase leading-[0.80] drop-shadow-2xl">
              <span className="overflow-hidden inline-block pb-2 -mb-2">
                <Motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1.0, 0.3, 1.0] }} // Custom spring-like easing
                >
                  TopKlass
                </Motion.span>
              </span>
              <span className="overflow-hidden inline-block pb-2 -mb-2">
                <Motion.span
                  className="block text-brand-mustard"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15, ease: [0.16, 1.0, 0.3, 1.0] }}
                >
                  Sounds
                </Motion.span>
              </span>
            </h1>
            <Motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="text-[10px] md:text-xs font-heading font-bold tracking-[0.2em] uppercase text-white/70 mb-12 max-w-3xl mx-auto leading-loose"
            >
              Topklass Sounds is a dynamic entertainment outfit specializing in music production and event curation,
              championing cutting-edge African electronic music for a global audience.
            </Motion.p>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="mt-6"
            >
              <Link to="/releases" className="group relative inline-flex items-center justify-center focus:outline-none">
                {/* Advanced Pulsing Background Glow */}
                <div className="absolute transition-all duration-1000 opacity-40 -inset-1 bg-brand-mustard rounded-sm blur-xl group-hover:opacity-100 group-hover:-inset-2 group-hover:duration-200"></div>

                {/* Real Button Container */}
                <Button
                  variant="primary"
                  size="lg"
                  className="relative gap-4 shadow-none font-black tracking-[0.2em] px-12 py-6 text-lg group-hover:-translate-y-1 transition-all duration-300 bg-brand-mustard text-brand-black hover:bg-[#E8AF1A] border-2 border-transparent hover:border-white/30 focus-ring overflow-hidden"
                >
                  {/* Sheen effect passing through */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out z-0" />

                  <span className="relative z-10">EXPLORE ARCHIVE</span>

                  <ArrowRight className="relative z-10 w-6 h-6 transition-transform duration-300 ease-out group-hover:translate-x-3" />
                </Button>
              </Link>
            </Motion.div>
          </div>
        </div>

        {/* Infinite Scrolling Typographic Ticker */}
        <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap py-4 sm:py-6 border-t border-white/5 bg-brand-black/40 backdrop-blur-md z-20 flex items-center">
          <Motion.div
            animate={{ x: [0, -2000] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-8 sm:gap-16 min-w-max items-center"
          >
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm md:text-base font-heading font-black tracking-[0.3em] uppercase text-white/40 flex items-center gap-8 sm:gap-16"
              >
                <span>Record Label</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-mustard/60" />
                <span>Creative Studio</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-mustard/60" />
                <span>Events</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-mustard/60" />
              </span>
            ))}


          </Motion.div>
        </div>
      </section>

      {/* 2. Featured Releases Carousel */}
      <section className="py-24 bg-brand-black relative z-10 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter">
                Featured <span className="text-brand-mustard">Releases</span>
              </h2>
            </div>
            <Link to="/releases" className="mt-6 md:mt-0 text-brand-mustard font-sans font-bold uppercase tracking-widest text-sm hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-1 flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="-mx-4 cursor-grab active:cursor-grabbing">
            <Slider {...slickSettings}>
              {[
                { id: 1, title: "Mura, Hiribae, Ghedi, Ayrosh - My Lover", src: "/assets/releases/my-lover.jpg", link: "https://orcd.co/my-lover-presave" },
                { id: 2, title: "Mura, Sjef Rolet, Zaituni - Sema", src: "/assets/releases/sema.jpg", link: "https://orcd.co/sema_djmura" },
                { id: 3, title: "Mura, Dj Fita, N’Jiru - Kazi", src: "/assets/releases/kazi.jpg", link: "https://orcd.co/7aovpak" },
                { id: 4, title: "Mura, Saint Evo, Labdi - Awuoro", src: "/assets/releases/awuoro.jpg", link: "https://orcd.co/775ryej" },
                { id: 5, title: "Mura, Big Nyagz, Coster Ojwang, Yah Listen - Rejea", src: "/assets/releases/rejea.jpg", link: "https://orcd.co/b0dv1mo" },
                { id: 6, title: "Mura, Big Nyagz, N’Jiru - Running", src: "/assets/releases/running.jpg", link: "https://orcd.co/d3mmp1p" },
                { id: 7, title: "Mura, Big Nyagz - Likizo Ep", src: "/assets/releases/likizo.jpg", link: "https://orcd.co/omk9dor" },
                { id: 8, title: "Mura, Ywaya Tajiri - Waridi", src: "/assets/releases/waridi.jpg", link: "https://orcd.co/nlzomnb" },
                { id: 9, title: "Mura, Ywaya Tajiri - Lucky Summer", src: "/assets/releases/lucky-summer.jpg", link: "https://orcd.co/prjm9pw" }
              ].map(item => (
                <div key={item.id} className="px-4 outline-none">
                  <a href={item.link} target="_blank" rel="noreferrer" className="group block outline-none">
                    <div className="overflow-hidden border border-white/5 mb-6 shadow-2xl bg-black aspect-square relative">
                      <ImageWithFallback
                        src={item.src}
                        alt={`${item.title} cover art`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-mustard/0 group-hover:bg-brand-mustard/10 transition-colors duration-500 flex items-center justify-center">
                        <Play className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg" fill="currentColor" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight group-hover:text-brand-mustard transition-colors line-clamp-2">{item.title}</h3>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* 3. Upcoming Events Strip */}
      <section className="bg-gradient-to-r from-brand-green to-brand-black text-white border-y border-brand-green/50 overflow-hidden relative z-10">
        <div className="container mx-auto px-4 py-8 md:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter flex items-center gap-4 shrink-0 text-white drop-shadow-2xl">
              <Calendar className="w-8 h-8 md:w-10 md:h-10 text-brand-mustard" /> Upcoming Events
            </h2>

            <div className="flex-1 overflow-x-auto pb-4 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center w-max lg:ml-auto pr-4">
                {/* Event Badge 0: Magharibi Express */}
                <Link to="/events" className="group flex items-center gap-4 md:gap-6 bg-brand-black text-white px-6 py-4 rounded-sm hover:bg-brand-black/90 transition-colors shrink-0 shadow-lg">
                  <div className="font-heading font-black text-xl text-brand-mustard text-center leading-none min-w-[3.5rem] shrink-0">
                    AUG<br /><span className="text-2xl md:text-3xl">30</span>
                  </div>
                  <div className="h-12 w-px bg-white/20" />
                  <div className="flex flex-col">
                    <span className="font-bold uppercase tracking-tight text-lg md:text-xl group-hover:text-brand-mustard transition-colors text-white">Magharibi Express</span>
                    <span className="text-white/60 text-sm flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Westlands, Nairobi</span>
                  </div>
                  <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 hidden sm:block">
                    <ArrowRight className="w-5 h-5 text-brand-mustard" />
                  </div>
                </Link>

                {/* Event Badge 1 */}
                <Link to="/events" className="group flex items-center gap-4 md:gap-6 bg-brand-black text-white px-6 py-4 rounded-sm hover:bg-brand-black/90 transition-colors shrink-0 shadow-lg">
                  <div className="font-heading font-black text-xl text-brand-mustard text-center leading-none min-w-[3.5rem] shrink-0">
                    NOV<br /><span className="text-2xl md:text-3xl">15</span>
                  </div>
                  <div className="h-12 w-px bg-white/20" />
                  <div className="flex flex-col">
                    <span className="font-bold uppercase tracking-tight text-lg md:text-xl group-hover:text-brand-mustard transition-colors">Nairobi, KE</span>
                    <span className="text-white/60 text-sm flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> The Alchemist Bar</span>
                  </div>
                  <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 hidden sm:block">
                    <ArrowRight className="w-5 h-5 text-brand-mustard" />
                  </div>
                </Link>

                {/* Event Badge 2 */}
                <Link to="/events" className="group flex items-center gap-4 md:gap-6 bg-brand-black text-white px-6 py-4 rounded-sm hover:bg-brand-black/90 transition-colors shrink-0 shadow-lg">
                  <div className="font-heading font-black text-xl text-brand-mustard text-center leading-none min-w-[3.5rem] shrink-0">
                    DEC<br /><span className="text-2xl md:text-3xl">02</span>
                  </div>
                  <div className="h-12 w-px bg-white/20" />
                  <div className="flex flex-col">
                    <span className="font-bold uppercase tracking-tight text-lg md:text-xl group-hover:text-brand-mustard transition-colors">London, UK</span>
                    <span className="text-white/60 text-sm flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Printworks</span>
                  </div>
                  <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 hidden sm:block">
                    <ArrowRight className="w-5 h-5 text-brand-mustard" />
                  </div>
                </Link>

                <Link to="/events" className="shrink-0 ml-2 font-bold uppercase tracking-widest text-brand-mustard hover:text-white hover:underline underline-offset-4 flex items-center gap-2 px-2 py-4 transition-colors">
                  All Dates <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Latest Radio Episode Card */}
      <section className="py-24 bg-gradient-to-b from-brand-black via-brand-green/20 to-brand-black relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-brand-mustard/10 rounded-full flex items-center justify-center border border-brand-mustard/30">
                <RadioIcon className="w-6 h-6 text-brand-mustard" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter">
                Latest <span className="text-brand-mustard">Radio</span>
              </h2>
            </div>

            <div className="group block relative rounded-xl overflow-hidden shadow-2xl bg-[#121212] border border-white/5 hover:border-brand-mustard/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[45%] relative aspect-square md:aspect-auto overflow-hidden block">
                  <iframe
                    src="https://www.youtube.com/embed/C96afQY6Oc0?autoplay=0&list=RDC96afQY6Oc0"
                    title="RADIO TOPKLASS #001"
                    className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#121212] opacity-80 pointer-events-none" />
                  <div className="absolute top-6 left-6 bg-brand-mustard text-brand-black font-sans font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-brand-black animate-pulse" /> Live Archive
                  </div>
                </div>

                <div className="md:w-[55%] p-8 sm:p-12 md:p-16 flex flex-col justify-center relative bg-[#121212] border-l border-white/5 md:border-t-0 border-t">
                  <div className="mb-6">
                    <span className="text-brand-mustard font-mono text-sm tracking-widest uppercase mb-3 block">Noisy Neighbors with DJ Mura</span>
                    <a
                      href="https://www.youtube.com/watch?v=C96afQY6Oc0&list=RDC96afQY6Oc0&start_radio=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-[0.9] group-hover:text-brand-mustard transition-colors inline-block"
                    >
                      Noisy Neighbors #062
                    </a>
                  </div>
                  <p className="text-lg md:text-xl text-white/70 font-sans mb-8">
                    Mura takes us on a journey through some of the best Afrohouse & 3-Step jams from the continent to the world.
                  </p>

                  <div className="flex items-center gap-5 mt-auto">
                    <a
                      href="https://www.youtube.com/watch?v=C96afQY6Oc0&list=RDC96afQY6Oc0&start_radio=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-brand-mustard text-brand-black flex items-center justify-center shadow-[0_0_20px_rgba(212,160,23,0.4)] group-hover:scale-110 transition-transform"
                    >
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=C96afQY6Oc0&list=RDC96afQY6Oc0&start_radio=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col hover:text-brand-mustard transition-colors"
                    >
                      <span className="font-bold uppercase tracking-widest text-base text-white group-hover:text-brand-mustard transition-colors">
                        Listen Now
                      </span>
                      <span className="text-white/50 text-sm font-sans">64 Minutes</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
