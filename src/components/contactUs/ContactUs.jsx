"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#11224D]">

      <section className="relative overflow-hidden px-5 pb-24 pt-35 sm:px-8 lg:px-14 xl:px-20">

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-[#11224D]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#087FE8]">
              Get In Touch
            </p>

            <h1 className="text-5xl font-black leading-tight text-[#11224D] md:text-7xl">
              Let&apos;s
              <span className="block text-[#087FE8]">
                Talk
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Have a question about our services or need a free quotation?
              Get in touch with our friendly team and we&apos;ll be happy to
              help.
            </p>

          </div>


          <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

            <div className="space-y-5">

              <div className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100">

                <div className="flex items-center gap-5">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#11224D]/5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#11224D]">
                    <Phone className="h-6 w-6 text-[#11224D] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-400">
                      Call Us
                    </p>

                    <a
                      href="tel:02082266477"
                      className="mt-1 block font-bold text-[#11224D] transition-colors duration-300 group-hover:text-[#087FE8]"
                    >
                      020 8226 6477
                    </a>
                  </div>

                </div>

              </div>


              <div className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100">

                <div className="flex items-center gap-5">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#11224D]/5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#11224D]">
                    <Mail className="h-6 w-6 text-[#11224D] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-400">
                      Email Us
                    </p>

                    <a
                      href="mailto:info@example.com"
                      className="mt-1 block font-bold text-[#11224D] transition-colors duration-300 group-hover:text-[#087FE8]"
                    >
                      info@example.com
                    </a>
                  </div>

                </div>

              </div>


              <div className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100">

                <div className="flex items-center gap-5">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#11224D]/5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#11224D]">
                    <MapPin className="h-6 w-6 text-[#11224D] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 font-bold text-[#11224D]">
                      London, United Kingdom
                    </p>
                  </div>

                </div>

              </div>


              <div className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100">

                <div className="flex items-center gap-5">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#11224D]/5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#11224D]">
                    <Clock className="h-6 w-6 text-[#11224D] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-400">
                      Opening Hours
                    </p>

                    <p className="mt-1 font-bold text-[#11224D]">
                      Available 24/7
                    </p>
                  </div>

                </div>

              </div>

            </div>


            <div className="group rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-[#11224D]/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 sm:p-8 lg:p-10">

              <div className="mb-8">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087FE8]">
                  Send Us A Message
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#11224D] sm:text-4xl">
                  How Can We Help?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Fill out the form below and our team will get back to you
                  as soon as possible.
                </p>

              </div>


              <form className="space-y-6">

                <div className="grid gap-6 sm:grid-cols-2">

                  <div className="group/input">

                    <label className="mb-2 block text-sm font-bold text-[#11224D]">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087FE8] focus:bg-white focus:ring-4 focus:ring-blue-100 hover:border-[#11224D]/30"
                    />

                  </div>


                  <div className="group/input">

                    <label className="mb-2 block text-sm font-bold text-[#11224D]">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087FE8] focus:bg-white focus:ring-4 focus:ring-blue-100 hover:border-[#11224D]/30"
                    />

                  </div>

                </div>


                <div>

                  <label className="mb-2 block text-sm font-bold text-[#11224D]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087FE8] focus:bg-white focus:ring-4 focus:ring-blue-100 hover:border-[#11224D]/30"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm font-bold text-[#11224D]">
                    Service Required
                  </label>

                  <select
                    className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-500 outline-none transition-all duration-300 focus:border-[#087FE8] focus:bg-white focus:ring-4 focus:ring-blue-100 hover:border-[#11224D]/30"
                  >
                    <option value="">Select a service</option>
                    <option value="rubbish">Rubbish Removal</option>
                    <option value="garden">Garden Services</option>
                    <option value="clearance">Property Clearance</option>
                    <option value="other">Other</option>
                  </select>

                </div>


                <div>

                  <label className="mb-2 block text-sm font-bold text-[#11224D]">
                    Your Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087FE8] focus:bg-white focus:ring-4 focus:ring-blue-100 hover:border-[#11224D]/30"
                  />

                </div>


                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#11224D] px-6 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#087FE8] hover:shadow-xl hover:shadow-blue-200"
                >
                  Send Message

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#11224D] transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}