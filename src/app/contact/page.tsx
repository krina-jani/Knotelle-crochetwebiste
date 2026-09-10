"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { BotanicalFlourish, FlowerIcon } from "@/components/ui/BotanicalDecorations";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { useToast } from "@/context/ToastContext";

export default function ContactPage() {
  const { showToast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    showToast("Message Sent! 💌", "Thank you for reaching out. We will respond within 24 hours.", "success");
  };

  const faqs = [
    {
      q: "How long does a custom order take to craft?",
      a: "Standard custom orders take between 5 to 8 business days to handcraft with love, after which they are express dispatched.",
    },
    {
      q: "Do you ship internationally?",
      a: "Currently we provide seamless Pan-India tracked shipping. For international bulk custom orders, please contact our studio directly.",
    },
    {
      q: "How do I care for my crochet flowers and plushies?",
      a: "Gently dust with a soft makeup brush or blowdryer on cool air. Spot clean using cold water and mild baby detergent. Do not machine wash.",
    },
    {
      q: "Can I choose my own flower bouquet combinations?",
      a: "Yes! Use our Custom Order page or WhatsApp us with your dream flower list, colors, and wrap preference.",
    },
  ];

  return (
    <div className="bg-[#FFF8F5] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: "Contact Studio" }]} className="mb-8" />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex justify-center mb-2">
            <BotanicalFlourish className="w-24 h-5 text-[#E9AAA3]" />
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#3A211D] tracking-tight">
            Let&apos;s Connect
          </h1>
          <p className="text-sm sm:text-base text-[#78635E] mt-2">
            Have a question about a product, custom order, or collaboration? We&apos;d love to hear from you.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Studio Details (Spans 5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E8D4CF] p-8 shadow-boutique space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#E8D4CF]">
              <FlowerIcon className="w-6 h-6 text-[#8F3032]" />
              <h2 className="font-serif-luxury text-xl font-bold text-[#3A211D]">
                Atelier Studio
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#78635E]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8F3032] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#3A211D] block">KNOTELLE Studio</strong>
                  <p>12th Main, 4th Cross, Indiranagar</p>
                  <p>Bengaluru, Karnataka 560038, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8F3032] shrink-0" />
                <div>
                  <strong className="text-[#3A211D] block">Direct Phone & WhatsApp</strong>
                  <a href="tel:+919876543210" className="hover:text-[#8F3032]">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#8F3032] shrink-0" />
                <div>
                  <strong className="text-[#3A211D] block">Email Support</strong>
                  <a href="mailto:hello@knotelle.com" className="hover:text-[#8F3032]">
                    hello@knotelle.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#8F3032] shrink-0" />
                <div>
                  <strong className="text-[#3A211D] block">Studio Working Hours</strong>
                  <p>Monday – Saturday: 10:00 AM – 7:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D]">
              <p className="font-bold text-[#8F3032] mb-1">Looking for a custom design?</p>
              <p className="text-[#78635E] leading-relaxed">
                You can directly use our interactive Custom Order Builder to select colors and upload reference pictures.
              </p>
            </div>
          </div>

          {/* Right Form (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E8D4CF] p-8 shadow-boutique">
            <h2 className="font-serif-luxury text-2xl font-bold text-[#3A211D] mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-[#78635E] mb-6">
              Fill in your details and our team will get back to you promptly.
            </p>

            {isSent ? (
              <div className="p-8 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-center space-y-3 animate-in zoom-in-95">
                <CheckCircle2 className="w-10 h-10 text-[#8F3032] mx-auto" />
                <h3 className="font-serif-luxury text-xl font-bold text-[#3A211D]">
                  Message Received!
                </h3>
                <p className="text-xs text-[#78635E] max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>. We will reply to <strong>{email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-4 px-6 py-2 rounded-full bg-[#8F3032] text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A211D] block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ananya Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3A211D] block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#3A211D] block">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#3A211D] block">
                    How can we help you? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your questions, custom ideas, wedding bulk inquiries..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] shadow-md transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQs Accordion Section */}
        <div className="bg-white rounded-3xl border border-[#E8D4CF] p-8 sm:p-12 shadow-boutique max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#3A211D]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-[#78635E] mt-1">
              Quick answers about our handmade creations and delivery.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] space-y-1.5"
              >
                <h3 className="font-serif-luxury text-base font-bold text-[#3A211D]">
                  {faq.q}
                </h3>
                <p className="text-xs text-[#78635E] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
