"use client";

import React from "react";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Contact <span className="text-indigo-600">Me</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always
            open!
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-1.5 w-20 bg-indigo-600 rounded-full"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Info & Socials */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                I&apos;m currently looking for new opportunities and
                internships. Whether you have a question or just want to
                connect, I&apos;ll try my best to get back to you!
              </p>
            </div>

            {/* Contact Detail Cards */}
            <div className="space-y-6">
              {/* Call Card */}
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Call Me
                  </p>
                  <a
                    href="mailto:nayemsadiq2013@gmail.com"
                    className="text-lg font-semibold hover:text-indigo-600 transition-colors"
                  >
                    +880 1326 098250
                  </a>
                </div>
              </div>
              {/* Email Card */}
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Email Me
                  </p>
                  <a
                    href="mailto:nayemsadiq2013@gmail.com"
                    className="text-lg font-semibold hover:text-indigo-600 transition-colors"
                  >
                    nayemsadiq2013@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="p-4 bg-violet-50 dark:bg-violet-500/10 rounded-xl text-violet-600 dark:text-violet-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-lg font-semibold">Rajshahi, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Connect with me
              </p>
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaGithub />,
                    link: "https://github.com/naimsadiq",
                    color: "hover:bg-slate-900",
                  },
                  {
                    icon: <FaLinkedin />,
                    link: "https://linkedin.com/in/naimsadiq",
                    color: "hover:bg-blue-700",
                  },
                  {
                    icon: <FaFacebook />,
                    link: "https://facebook.com/naimsadiq.info",
                    color: "hover:bg-blue-600",
                  },
                  {
                    icon: <FaWhatsapp size={20} />,
                    link: "https://wa.me/01326098250",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    className={`text-2xl p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-slate-900/40 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300 uppercase tracking-tighter">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300 uppercase tracking-tighter">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300 uppercase tracking-tighter">
                  Message
                </label>
                <textarea
                  rows={8}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-indigo-500/25 active:scale-95 group"
              >
                <span>Send Message</span>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
