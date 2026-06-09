import { Send, MapPin, Mail } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 min-h-screen">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        <div className="flex flex-col gap-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-4">
              Get in <span className="text-brand-mustard">Touch</span>
            </h1>
            <p className="text-white/70 font-sans font-light text-lg leading-relaxed">
              Reach out for bookings, press inquiries, or just to share your sound.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="border-l-2 border-brand-mustard pl-6">
              <h3 className="text-sm font-sans font-bold text-white/50 uppercase tracking-widest mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-mustard" /> Location
              </h3>
              <p className="text-2xl font-heading font-black text-white uppercase tracking-tight leading-tight">
                Nairobi,<br/>
                Kenya
              </p>
            </div>

            <div className="border-l-2 border-brand-mustard pl-6">
              <h3 className="text-sm font-sans font-bold text-white/50 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-mustard" /> Email
              </h3>
              <a href="mailto:topklasssounds@gmail.com" className="text-2xl font-heading font-black text-white uppercase tracking-tight hover:text-brand-mustard transition-colors focus:outline-none">
                topklasssounds@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-brand-black border border-white/10 p-5 md:p-12">
          <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-8">Send a Message</h2>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-xs font-sans font-bold text-white/50 uppercase tracking-widest">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-transparent border-b border-white/20 text-white pb-2 text-base focus:outline-none focus:border-brand-mustard focus:ring-0 transition-colors placeholder:text-white/20"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-xs font-sans font-bold text-white/50 uppercase tracking-widest">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="bg-transparent border-b border-white/20 text-white pb-2 text-base focus:outline-none focus:border-brand-mustard focus:ring-0 transition-colors placeholder:text-white/20"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-sans font-bold text-white/50 uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                id="email"
                className="bg-transparent border-b border-white/20 text-white pb-2 text-base focus:outline-none focus:border-brand-mustard focus:ring-0 transition-colors placeholder:text-white/20"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-sans font-bold text-white/50 uppercase tracking-widest">Subject</label>
              <select
                id="subject"
                className="bg-transparent border-b border-white/20 text-white/70 pb-2 text-base focus:outline-none focus:border-brand-mustard focus:ring-0 transition-colors appearance-none rounded-none"
              >
                <option value="general" className="bg-brand-black">General Inquiry</option>
                <option value="booking" className="bg-brand-black">Booking</option>
                <option value="press" className="bg-brand-black">Press</option>
                <option value="demo" className="bg-brand-black">Demo Submission</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-sans font-bold text-white/50 uppercase tracking-widest">Message</label>
              <textarea
                id="message"
                rows={4}
                className="bg-transparent border-b border-white/20 text-white pb-2 text-base focus:outline-none focus:border-brand-mustard focus:ring-0 transition-colors placeholder:text-white/20 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <Button variant="primary" size="lg" type="submit" className="mt-4 gap-2 w-full md:w-auto self-stretch md:self-start min-h-[48px]">
              Submit <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>

      </div>
    </div>
  );
}
