// src/app/contact/page.jsx
"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    // Auto-dismiss the confirmation after 6 seconds
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="container-page">
      {/* Header */}
      <div className="mb-12">
        <p className="eyebrow animate-fade-in">Contact</p>
        <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-cream-200 max-w-3xl animate-fade-up">
          Let&apos;s start a{" "}
          <span className="text-gold-500">conversation</span>.
        </h1>
      </div>

      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        {/* LEFT — details */}
        <div className="md:col-span-5">
          <p className="text-cream-400 leading-relaxed max-w-md">
            Have a question, or want to discuss an opportunity? Reach out — I
            usually respond within a day.
          </p>

          <div className="mt-12 space-y-10">
            {/* Email */}
            <div>
              <p className="meta text-gold-500">Email</p>
              <a
                href="mailto:sangameshhalepujari@gmail.com"
                className="mt-3 block text-cream-200 hover:text-gold-400 transition-colors break-all text-base md:text-lg"
              >
                sangameshhalepujari@gmail.com
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="meta text-gold-500">Location</p>
              <p className="mt-3 text-cream-200 text-base md:text-lg">
                Bengaluru, India
              </p>
            </div>

            {/* LinkedIn */}
            <div>
              <p className="meta text-gold-500">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/sangameshhalepujaria496121a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-cream-200 hover:text-gold-400 transition-colors text-base md:text-lg"
              >
                /sangameshhalepujaria496121a9 →
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block meta text-gold-500 mb-3"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-cream-500/30
                           focus:border-gold-500 focus:ring-0
                           outline-none py-2
                           text-cream-100 placeholder:text-cream-700
                           transition-colors duration-300"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block meta text-gold-500 mb-3"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-cream-500/30
                           focus:border-gold-500 focus:ring-0
                           outline-none py-2
                           text-cream-100 placeholder:text-cream-700
                           transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block meta text-gold-500 mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-cream-500/30
                           focus:border-gold-500 focus:ring-0
                           outline-none py-2 resize-none
                           text-cream-100 placeholder:text-cream-700
                           transition-colors duration-300"
                placeholder="Your message..."
              />
            </div>

            {/* Submit */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button type="submit" className="btn-primary">
                Send message
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              {submitted && (
                <span className="font-mono text-xs uppercase tracking-widest-xl text-gold-400 animate-fade-in">
                  — Thanks. I&apos;ll be in touch soon.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}