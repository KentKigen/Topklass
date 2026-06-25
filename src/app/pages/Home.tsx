import { Link } from "react-router";
import { Button } from "../components/ui/Button";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Play, Calendar, MapPin, Radio as RadioIcon, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// @ts-ignore - The image exists in the local filesystem as uploaded by the user
import heroBg from "../../imports/IMG_3123.JPG";

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
      onClick={onClick}
      aria-label="Previous"
    >
      <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
      onClick={onClick}
      aria-label="Next"
    >
      <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
    </button>
  );
};

const releases = [
  { id: 10, title: "Mura, DJayPaps, Hiribae - Saka Mali", src: "/assets/releases/saka-mali.jpg", link: "https://open.spotify.com/album/4G2ybqvYcxfzF9ZoqTTlQM?si=I8HEPZKUQ_SFsENjf2UgXA" },
  { id: 1, title: "Mura, Hiribae, Ghedi, Ayrosh - My Lover", src: "/assets/releases/my-lover.jpg", link: "https://orcd.co/my-lover-presave" },
  { id: 2, title: "Mura, Sjef Rolet, Zaituni - Sema", src: "/assets/releases/sema.jpg", link: "https://orcd.co/sema_djmura" },
  { id: 3, title: "Mura, Dj Fita, N'Jiru - Kazi", src: "/assets/releases/kazi.jpg", link: "https://orcd.co/7aovpak" },
  { id: 4, title: "Mura, Saint Evo, Labdi - Awuoro", src: "/assets/releases/awuoro.jpg", link: "https://orcd.co/775ryej" },
  { id: 5, title: "Mura, Big Nyagz, Coster Ojwang, Yah Listen - Rejea", src: "/assets/releases/rejea.jpg", link: "https://orcd.co/b0dv1mo" },
  { id: 6, title: "Mura, Big Nyagz, N'Jiru - Running", src: "/assets/releases/running.jpg", link: "https://orcd.co/d3mmp1p" },
  { id: 7, title: "Mura, Big Nyagz - Likizo Ep", src: "/assets/releases/likizo.jpg", link: "https://orcd.co/omk9dor" },
  { id: 8, title: "Mura, Ywaya Tajiri - Waridi", src: "/assets/releases/waridi.jpg", link: "https://orcd.co/nlzomnb" },
  { id: 9, title: "Mura, Ywaya Tajiri - Lucky Summer", src: "/assets/releases/lucky-summer.jpg", link: "https://orcd.co/prjm9pw" }
];

export function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance coverflow on mobile with reset on manual interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % releases.length);
    }, 2000); // 2 seconds between automatic turns
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1600, // Slow, smooth continuous glide
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    autoplaySpeed: 400, // Brief pause before starting next turn (adds up to 2 seconds total cycle)
    cssEase: "cubic-bezier(0.42, 0, 0.58, 1)", // Premium ease-in-out rotation curve
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, arrows: true } },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "32px",
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 400,
          speed: 1600,
          cssEase: "cubic-bezier(0.42, 0, 0.58, 1)",
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full bg-brand-black">
      <section className="hero-grain hero-overlay relative w-full h-[100dvh] min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src={heroBg}
          alt="TopKlass Sounds Hero Background"
          className="absolute inset-0 w-full h-full object-cover scale-100 brightness-90 contrast-125"
        />
        <div className="absolute inset-0 bg-brand-black/50 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center h-full pb-16 sm:pb-24">
          <div className="max-w-4xl flex flex-col items-center w-full">

            <h1
              className="flex flex-col font-heading font-black tracking-tighter text-white uppercase drop-shadow-2xl mb-14 md:mb-4"
              style={{ fontSize: "clamp(2.5rem, 12vw + 1rem, 8rem)", lineHeight: 0.85 }}
            >
              <span className="overflow-hidden inline-block pb-2 -mb-2">
                <Motion.span
                  className="block text-center"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1.0, 0.3, 1.0] }}
                >TopKlass</Motion.span>
              </span>
              <span className="overflow-hidden inline-block pb-2 -mb-2">
                <Motion.span
                  className="block text-brand-mustard text-center"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15, ease: [0.16, 1.0, 0.3, 1.0] }}
                >Sounds</Motion.span>
              </span>
            </h1>

            <Motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="text-[10px] sm:text-xs md:text-base font-heading font-bold tracking-[0.12em] md:tracking-[0.16em] uppercase text-white/70 mb-8 md:mb-6 max-w-[260px] sm:max-w-sm md:max-w-xl mx-auto leading-relaxed md:leading-loose"
            >
              Topklass Sounds is a dynamic entertainment outfit specializing
              in music production and event curation, championing cutting-edge
              African electronic music for a global audience.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="w-full md:w-auto mt-2 md:mt-0"
            >
              <Link to="/releases" className="group relative inline-flex items-center justify-center focus:outline-none w-full md:w-auto">
                <div className="absolute transition-all duration-1000 opacity-40 -inset-1 bg-brand-mustard rounded-sm blur-xl group-hover:opacity-100 group-hover:-inset-2 group-hover:duration-200"></div>
                <Button
                  variant="primary"
                  size="md"
                  className="relative gap-2 w-full md:w-auto shadow-none font-black tracking-[0.2em] px-5 md:px-9 py-2.5 md:py-4 text-[10px] md:text-sm group-hover:-translate-y-1 transition-all duration-300 bg-brand-mustard text-brand-black hover:bg-[#E8AF1A] border-2 border-transparent hover:border-white/30 focus-ring overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out z-0" />
                  <span className="relative z-10 flex-1 text-center md:text-left">EXPLORE ARCHIVE</span>
                  <ArrowRight className="relative z-10 w-3.5 h-3.5 md:w-5 md:h-5 transition-transform duration-300 ease-out group-hover:translate-x-3 shrink-0" />
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

      <section className="pt-10 pb-24 md:py-24 bg-brand-black relative z-10 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 md:mb-12">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-tighter">
                Featured <span className="text-brand-mustard">Releases</span>
              </h2>
            </div>
            <Link to="/releases" className="mt-4 md:mt-0 text-brand-mustard font-sans font-bold uppercase tracking-widest text-sm hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-1 flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── Desktop: standard slick slider ── */}
          <div className="hidden md:block -mx-4 cursor-grab active:cursor-grabbing">
            <Slider {...slickSettings}>
              {releases.map(item => (
                <div key={item.id} className="px-4 outline-none">
                  <a href={item.link} target="_blank" rel="noreferrer" className="group block outline-none">
                    <div className="overflow-hidden border border-white/5 mb-4 shadow-2xl bg-black aspect-square relative">
                      <ImageWithFallback
                        src={item.src}
                        alt={`${item.title} cover art`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-mustard/0 group-hover:bg-brand-mustard/10 transition-colors duration-500 flex items-center justify-center">
                        <Play className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg" fill="currentColor" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight group-hover:text-brand-mustard transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </a>
                </div>
              ))}
            </Slider>
          </div>

          {/* ── Mobile: custom coverflow ── */}
          <div className="md:hidden relative">
            {/* Coverflow track */}
            <div className="flex items-center justify-center gap-0 overflow-hidden" style={{ perspective: "800px" }}>
              {[-1, 0, 1].map(offset => {
                const idx = (activeIndex + offset + releases.length) % releases.length;
                const item = releases[idx];
                const isCenter = offset === 0;
                const trackName = item.title.includes(" - ") ? item.title.split(" - ").slice(1).join(" - ") : item.title;
                return (
                  <Motion.div
                    key={`${activeIndex}-${offset}`}
                    onClick={() => isCenter ? undefined : setActiveIndex(idx)}
                    animate={{
                      scale: isCenter ? 1 : 0.72,
                      opacity: isCenter ? 1 : 0.35,
                      rotateY: offset === -1 ? 28 : offset === 1 ? -28 : 0,
                      z: isCenter ? 0 : -80,
                      x: offset === -1 ? "14%" : offset === 1 ? "-14%" : "0%",
                    }}
                    transition={{ ease: "easeInOut", duration: 1.7 }}
                    style={{ transformStyle: "preserve-3d", zIndex: isCenter ? 10 : 1, flex: "0 0 72%" }}
                    className="relative cursor-pointer"
                  >
                    <a
                      href={isCenter ? item.link : undefined}
                      target={isCenter ? "_blank" : undefined}
                      rel="noreferrer"
                      onClick={e => { if (!isCenter) e.preventDefault(); }}
                      className="block"
                    >
                      <div className="overflow-hidden border border-white/10 shadow-2xl bg-black aspect-square relative rounded-sm">
                        <ImageWithFallback
                          src={item.src}
                          alt={`${item.title} cover art`}
                          className="w-full h-full object-cover"
                        />
                        {isCenter && (
                          <div className="absolute inset-0 bg-brand-mustard/0 active:bg-brand-mustard/10 transition-colors flex items-center justify-center">
                            <Play className="w-14 h-14 text-white opacity-0 active:opacity-100 drop-shadow-lg" fill="currentColor" />
                          </div>
                        )}
                      </div>
                    </a>
                  </Motion.div>
                );
              })}
            </div>

            {/* Track name below center art */}
            <AnimatePresence mode="wait">
              <Motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-center font-heading font-black text-white uppercase tracking-tight text-lg mt-5 px-8 line-clamp-1"
              >
                {releases[activeIndex].title.includes(" - ")
                  ? releases[activeIndex].title.split(" - ").slice(1).join(" - ")
                  : releases[activeIndex].title}
              </Motion.p>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {releases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-5 h-1.5 bg-brand-mustard"
                      : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to release ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-green to-brand-black text-white border-y border-brand-green/50 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 py-7 md:py-9">

          {/* Section heading */}
          <h2 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter flex items-center gap-3 text-white mb-5 md:mb-6">
            <Calendar className="w-6 h-6 md:w-8 md:h-8 text-brand-mustard shrink-0" />
            Upcoming Events
          </h2>

          {/* Events row — wraps cleanly, no scroll */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-stretch">

            {/* Summertides */}
            <Link to="/events" className="group flex items-center gap-4 bg-black/50 border border-white/8 hover:border-brand-mustard/40 text-white px-5 py-3.5 rounded-sm hover:bg-black/70 transition-all duration-200 flex-1 sm:flex-none sm:min-w-[200px] shadow-lg">
              <div className="font-heading font-black text-sm text-brand-mustard text-center leading-none min-w-[2.8rem] shrink-0">
                JUL<br /><span className="text-2xl">02</span>
              </div>
              <div className="w-px h-9 bg-white/15 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-bold uppercase tracking-tight text-sm md:text-base group-hover:text-brand-mustard transition-colors text-white">Summertides</span>
                <span className="text-white/50 text-xs flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-brand-mustard shrink-0" /> Diani, KE
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-mustard ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0 hidden sm:block" />
            </Link>

            {/* Magharibi Express */}
            <Link to="/events" className="group flex items-center gap-4 bg-black/50 border border-white/8 hover:border-brand-mustard/40 text-white px-5 py-3.5 rounded-sm hover:bg-black/70 transition-all duration-200 flex-1 sm:flex-none sm:min-w-[200px] shadow-lg">
              <div className="font-heading font-black text-sm text-brand-mustard text-center leading-none min-w-[2.8rem] shrink-0">
                AUG<br /><span className="text-2xl">30</span>
              </div>
              <div className="w-px h-9 bg-white/15 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-bold uppercase tracking-tight text-sm md:text-base group-hover:text-brand-mustard transition-colors text-white truncate">Magharibi Express</span>
                <span className="text-white/50 text-xs flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-brand-mustard shrink-0" /> Westlands, Nairobi
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-mustard ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0 hidden sm:block" />
            </Link>

            {/* Viringo VI */}
            <Link
              to="https://tokea.com/events/virigo-vi?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0DMTAwAHNydGMGYXBwX2lkDzkzNjYxOTc0MzM5MjQ1OQABp6W54nY2GXQCjF8sjBjaEx9oRoFy0IYqSjEF-03BNkC5At6QkzZcD50aPJFX_aem_Rwfl5L-qG6zUQSp2hdnO8w"
              className="group flex items-center gap-4 bg-black/50 border border-white/8 hover:border-brand-mustard/40 text-white px-5 py-3.5 rounded-sm hover:bg-black/70 transition-all duration-200 flex-1 sm:flex-none sm:min-w-[200px] shadow-lg"
            >
              <div className="font-heading font-black text-sm text-brand-mustard text-center leading-none min-w-[2.8rem] shrink-0">
                JUN<br /><span className="text-2xl">05</span>
              </div>
              <div className="w-px h-9 bg-white/15 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-bold uppercase tracking-tight text-sm md:text-base group-hover:text-brand-mustard transition-colors text-white">Viringo VI</span>
                <span className="text-white/50 text-xs flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-brand-mustard shrink-0" /> Masshouse
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-mustard ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0 hidden sm:block" />
            </Link>

            {/* All Dates CTA */}
            <Link
              to="https://tokea.com/events/virigo-vi?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0DMTAwAHNydGMGYXBwX2lkDzkzNjYxOTc0MzM5MjQ1OQABp6W54nY2GXQCjF8sjBjaEx9oRoFy0IYqSjEF-03BNkC5At6QkzZcD50aPJFX_aem_Rwfl5L-qG6zUQSp2hdnO8w"
              className="flex items-center justify-center gap-2 px-5 py-3.5 font-bold uppercase tracking-widest text-brand-mustard hover:text-white transition-colors text-sm sm:ml-auto whitespace-nowrap"
            >
              All Dates <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
        </div>
      </section>

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

                <div className="md:w-[55%] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center relative bg-[#121212] border-l border-white/5 md:border-t-0 border-t overflow-hidden">
                  <div className="mb-6 overflow-hidden">
                    <span className="text-brand-mustard font-mono text-sm tracking-widest uppercase mb-3 block">Radio Topklass</span>
                    <a
                      href="https://www.youtube.com/watch?v=C96afQY6Oc0&list=RDC96afQY6Oc0&start_radio=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading font-black text-white uppercase tracking-tighter leading-[0.92] group-hover:text-brand-mustard transition-colors block break-words"
                      style={{ fontSize: "clamp(1.6rem, 3.5vw, 3.5rem)" }}
                    >
                      Radio Topklass 001 with Mura
                    </a>
                  </div>
                  <p className="text-base md:text-lg text-white/70 font-sans mb-8 line-clamp-3">
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
