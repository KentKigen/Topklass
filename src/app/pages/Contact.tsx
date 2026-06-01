import { Send, MapPin, Mail, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
        <div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-4">
            Get in <span className="text-brand-mustard">Touch</span>
          </h1>
          <p className="text-white/70 font-sans font-light max-w-2xl text-lg leading-relaxed">
            Reach out for bookings, press inquiries, or just to share your sound.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="flex flex-col gap-12 lg:pr-12">
          <div className="group border-l-2 border-brand-mustard pl-6 focus-within:ring-2 focus-within:ring-brand-mustard">
            <h3 className="text-sm font-sans font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-mustard" /> HQ Location
            </h3>
            <p className="text-2xl font-heading font-black text-white uppercase tracking-tight leading-tight">
              Los Angeles, CA<br/>
              United States
            </p>
          </div>

          <div className="group border-l-2 border-brand-mustard pl-6 focus-within:ring-2 focus-within:ring-brand-mustard">
            <h3 className="text-sm font-sans font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-mustard" /> General Inquiries
            </h3>
            <a href="mailto:info@topklasssounds.com" className="text-2xl font-heading font-black text-white uppercase tracking-tight hover:text-brand-mustard transition-colors focus:outline-none">
              info@topklasssounds.com
            </a>
          </div>

          <div className="group border-l-2 border-brand-mustard pl-6 focus-within:ring-2 focus-within:ring-brand-mustard">
            <h3 className="text-sm font-sans font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-brand-mustard" /> Booking & Press
            </h3>
            <a href="mailto:mgmt@topklasssounds.com" className="text-2xl font-heading font-black text-white uppercase tracking-tight hover:text-brand-mustard transition-colors focus:outline-none">
              mgmt@topklasssounds.com
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-brand-black border border-white/10 p-8 md:p-12 focus-within:ring-2 focus-within:ring-brand-mustard">
          <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-8">Send a Message</h2>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-xs font-sans font-bold text-white/50 uppercase tracking-widest">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-brand-mustard focus:ring-0 transition-colors placeholder:text-white/20"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-xs font-sans font-bold text-white/50 uppercase tracking-widest">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-brand-mustard focus:ring-0 transition-colors placeholder:text-white/20"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-sans font-bold text-white/50 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-brand-mustard focus:ring-0 transition-colors placeholder:text-white/20"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-sans font-bold text-white/50 uppercase tracking-widest">Subject</label>
              <select 
                id="subject" 
                className="bg-transparent border-b border-white/20 text-white/70 pb-2 focus:outline-none focus:border-brand-mustard focus:ring-0 transition-colors appearance-none rounded-none"
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
                className="bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-brand-mustard focus:ring-0 transition-colors placeholder:text-white/20 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <Button variant="primary" size="lg" type="submit" className="mt-4 gap-2 self-start">
              Submit <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
