import { MapPin, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";

const events = [
  { 
    id: 6, 
    title: "Summertides", 
    location: "Diani, KE", 
    venue: "Diani Beach", 
    date: "JUL 02-04, 2026", 
    soldOut: false,
    ticketUrl: "https://summertidesfestival.hustlesasa.shop/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0DMTAwAHNydGMGYXBwX2lkDzkzNjYxOTc0MzM5MjQ1OQABp6gd03zCKZx6wJhzoJHfrhnrU9iYyE6ZNOaHt_BS9EC4sbUomdfoSQF_9z6X_aem_eP8Vh8YcfrQaWwQQOKr8aQ&utm_id=97760_v0_s00_e0_tv3",
    description: "Summertides is an immersive music and arts festival set against the beautiful backdrop of the coast. Join us for a weekend of cutting-edge electronic music, community, and unforgettable memories."
  },
  { 
    id: 5, 
    title: "Magharibi Express", 
    location: "Nairobi, KE", 
    venue: "Westlands", 
    date: "AUG 30, 2025", 
    soldOut: false,
    ticketUrl: "https://magharibiexpress.hustlesasa.shop",
    description: "Magharibi Express celebrates original and authentic music deeply rooted in African culture. Founded by the visionary DJ Mura and the talented Ally Fresh, this dynamic duo is revolutionizing the music industry. Through a blend of captivating DJ mixes on digital platforms like YouTube and Instagram and electrifying live events, Magharibi Express is redefining the music experience."
  },
  { id: 1, title: "Mura The DJ Experience", location: "Nairobi, KE", venue: "The Alchemist Bar", date: "Nov 15, 2025", soldOut: true },
  { id: 2, title: "African Electronic Tour", location: "London, UK", venue: "Printworks", date: "Dec 02, 2025", soldOut: false },
  { id: 3, title: "Amapiano Showcase", location: "Johannesburg, SA", venue: "Zone 6 Venue", date: "Jan 18, 2026", soldOut: false },
  { id: 4, title: "Boiler Room Series", location: "Cape Town, SA", venue: "Camps Bay", date: "Mar 10, 2026", soldOut: false },
];

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  return (
    <div className="min-h-screen bg-brand-black">
      <div className="text-white bg-gradient-to-r from-brand-green to-brand-black border-b border-brand-green/50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-4 drop-shadow-2xl">
                Live <span className="text-brand-mustard">Events</span>
              </h1>
              <p className="text-white/80 font-sans font-medium max-w-2xl text-lg leading-relaxed">
                Experience the culture in person. Join us around the globe for unforgettable nights of curation and community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 hidden lg:block relative sticky top-32 self-start aspect-[3/4] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
          <ImagePlaceholder 
            src="/assets/events-hero.jpg" 
            alt="Crowd at a live event" 
            className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-700"
            recommendedSize="1000x1333px"
          />
        </div>
        
        <div className="lg:col-span-7 flex flex-col gap-8">
          {events.slice(0, 3).map((event) => (
            <div 
              key={event.id} 
              className="group flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 sm:p-8 bg-brand-black border border-white/10 hover:border-brand-mustard transition-colors relative overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-brand-mustard outline-none"
              onClick={() => setSelectedEvent(event)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedEvent(event);
                }
              }}
            >
              
              {/* Event Info */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-center w-full z-10">
                
                {/* Date Badge */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-brand-green/20 border border-brand-green/40 group-hover:bg-brand-mustard group-hover:border-brand-mustard transition-colors">
                  <span className="text-brand-mustard group-hover:text-brand-black font-heading font-black text-xl sm:text-2xl uppercase leading-none mb-1">
                    {event.date.split(' ')[1].replace(',', '')}
                  </span>
                  <span className="text-brand-green group-hover:text-brand-black/70 font-sans font-bold text-[10px] sm:text-xs uppercase tracking-widest">
                    {event.date.split(' ')[0]}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tight mb-2 group-hover:text-brand-mustard transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/50 font-sans text-xs sm:text-sm uppercase tracking-widest leading-relaxed">
                    <MapPin className="w-5 h-5 md:w-4 md:h-4 text-brand-mustard shrink-0 align-middle" />
                    <span className="truncate">{event.venue}, {event.location}</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 flex items-center gap-4 w-full sm:w-auto">
                  {event.soldOut ? (
                    <span className="inline-block bg-white/10 text-white/50 px-4 py-2 font-heading font-black text-xs sm:text-sm uppercase tracking-widest rounded-sm border border-white/10 text-center w-full sm:w-auto">
                      Sold Out
                    </span>
                  ) : (
                    <button 
                      className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 font-heading font-black text-xs sm:text-sm uppercase tracking-widest border border-white/20 hover:bg-white hover:text-brand-black transition-all focus:outline-none w-full sm:w-auto min-h-[44px]"
                      aria-label={`Get tickets for ${event.title}`}
                    >
                      Tickets <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-mustard transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top z-0" />
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-brand-black/98 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-brand-black border border-brand-mustard/30 w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col relative shadow-2xl p-6 md:p-14 pt-16 md:pt-14"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="group absolute top-4 right-4 z-10 w-11 h-11 bg-white/10 hover:bg-brand-mustard flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white group-hover:text-brand-black transition-colors" />
            </button>
            
            <div className="flex flex-col gap-6 mb-6">
              <div>
                <span className="text-brand-mustard font-sans font-bold text-xs uppercase tracking-widest mb-4 block">Official Tour Date</span>
                <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-4">{selectedEvent.title}</h2>
              </div>
              
              <div className="w-full h-px bg-white/10" />

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div className="flex flex-col gap-2">
                  <span className="text-white/40 uppercase tracking-widest text-xs font-bold">Date</span>
                  <span className="text-xl font-mono text-white/90 bg-white/5 px-3 py-1 rounded w-max">{selectedEvent.date}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white/40 uppercase tracking-widest text-xs font-bold">Location</span>
                  <span className="text-lg font-sans text-white/90 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-mustard" /> {selectedEvent.venue}, {selectedEvent.location}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none font-sans font-light text-white/70 leading-relaxed mb-10">
              <p>
                {selectedEvent.description || "Join Mura The DJ and special guests for an unforgettable night of global electronic culture and heavy curation. Experience a uniquely designed set traversing through afro-house, amapiano, and unreleased exclusive tracks directly from the studio."}
              </p>
              <p className="mt-4 text-sm text-brand-mustard/80">
                Please arrive early. Doors strictly subject to venue capacity and management right of admission applies.
              </p>
            </div>
            
            {selectedEvent.soldOut ? (
              <button disabled className="w-full bg-white/10 text-white/50 font-heading font-black text-lg uppercase tracking-widest px-8 py-5 cursor-not-allowed border border-white/5 rounded-sm">
                SOLD OUT
              </button>
            ) : (
              <button 
                onClick={() => {
                  if (selectedEvent.ticketUrl) {
                    window.open(selectedEvent.ticketUrl, '_blank');
                  } else {
                    alert("Redirecting to external ticket vendor (Resident Advisor / Dice)...");
                  }
                  setSelectedEvent(null);
                }}
                className="w-full bg-brand-mustard text-brand-black hover:bg-white transition-colors font-heading font-black text-xl uppercase tracking-[0.2em] px-8 py-5 rounded-sm focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Secure Tickets
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
