import React from 'react'
import {
    Building2,
    Check,
    ChevronRight,
    Factory,
    FerrisWheel,
    ArrowUpRight
} from 'lucide-react'

export default function RubbishClearance() {
    const benefits = [
        "Trusted rubbish waste removal & skips",
        "Reliable local 'Man & Van' rubbish clearance",
        "Fully insured with Waste Carriers Licence",
        "95% of all waste successfully recycled",
        "Clearance teams working 6 days a week",
        "Covering the Home Counties",
        "Wait & Load branded vehicles",
        "Friendly & reliable collection team",
        "Best local rubbish removal & skip prices",
    ]

    return (
        <section
            id="rubbish-clearance"
            className="relative overflow-hidden bg-linear-to-b from-[#E9F4FC] via-white to-[#F5FAFE]"
        >

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 hidden items-end gap-1 text-[#11224D]/10 lg:flex xl:right-10"
            >
                <Building2
                    className="h-24 w-24 transition-transform duration-700 hover:-translate-y-4"
                    strokeWidth={1}
                />

                <Factory
                    className="h-32 w-32 transition-transform duration-700 hover:-translate-y-6"
                    strokeWidth={1}
                />

                <FerrisWheel
                    className="h-28 w-28 transition-transform duration-700 hover:-translate-y-4"
                    strokeWidth={1}
                />
            </div>


            <div className="container relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

                <div className="max-w-6xl">

                    <div className="mb-7">

                        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#0497E2]">
                            Our Services
                        </p>

                        <h2 className="text-3xl font-black leading-tight text-[#11224D] sm:text-4xl lg:text-5xl">
                            Rubbish Clearance Services
                        </h2>

                        <div className="mt-4 h-1 w-14 rounded-full bg-[#0497E2] transition-all duration-500 hover:w-24" />

                    </div>


                    <div className="max-w-5xl space-y-4 text-sm leading-7 text-slate-600 sm:text-base">

                        <p className="transition-colors duration-300 hover:text-[#11224D]">
                            Waste Services Ltd is a trusted rubbish removal company
                            and one of the leading domestic and commercial waste
                            clearance companies in the Home Counties.
                        </p>

                        <p className="transition-colors duration-300 hover:text-[#11224D]">
                            Our staff members have years of experience, completing
                            all work in accordance with Health and Safety guidelines.
                            As a forward-thinking, environmentally aware company,
                            we aim to recycle upwards of 95% of all waste collected.
                        </p>

                        <p className="transition-colors duration-300 hover:text-[#11224D]">
                            We are an approved waste carrier, fully insured and
                            champions of recycling and managing rubbish in a safe
                            and economical way. Our ethos is to safely remove waste
                            from homes and businesses effectively—doing all the
                            heavy lifting for you.
                        </p>

                    </div>


                    <a
                        href="tel:02082266477"
                        className="group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#11224D] px-5 py-4 text-center text-sm font-bold uppercase leading-relaxed text-white shadow-lg shadow-[#11224D]/10 transition-all duration-500 hover:-translate-y-1 hover:bg-[#0497E2] hover:shadow-xl hover:shadow-[#0497E2]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11224D] sm:px-7 sm:text-base lg:text-lg"
                    >

                        <span>
                            Call us today for more information on our waste
                            clearance services -
                            <strong className="ml-1 whitespace-nowrap">
                                020 8226 6477
                            </strong>
                        </span>

                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-[#11224D]">

                            <ChevronRight
                                aria-hidden="true"
                                className="size-5 transition-transform duration-500 group-hover:translate-x-1"
                                strokeWidth={3}
                            />

                        </span>

                    </a>


                    <div className="mt-12">

                        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#0497E2]">
                            Why Choose Us
                        </p>

                        <h3 className="text-2xl font-black leading-tight text-[#11224D] sm:text-3xl lg:text-4xl">
                            Why choose Waste Services Ltd for your mini skips
                            or rubbish removal?
                        </h3>

                        <div className="mt-4 h-1 w-14 rounded-full bg-[#0497E2] transition-all duration-500 hover:w-24" />

                    </div>


                    <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">

                        {benefits.map((benefit, index) => (

                            <div
                                key={benefit}
                                className="group relative flex min-h-20 cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-[#11224D]/10 bg-white px-4 py-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#0497E2]/30 hover:shadow-xl hover:shadow-[#11224D]/10 sm:px-5"
                            >

                                <div className="absolute left-0 top-0 h-full w-1 bg-[#0497E2] transition-all duration-500 group-hover:w-2" />


                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#11224D]/5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#11224D]">

                                    <Check
                                        aria-hidden="true"
                                        className="size-6 text-[#11224D] transition-all duration-500 group-hover:scale-125 group-hover:text-white"
                                        strokeWidth={2.5}
                                    />

                                </div>


                                <div className="min-w-0 flex-1">

                                    <div className="mb-1 flex items-center gap-2">

                                        <span className="text-xs font-bold tracking-widest text-[#0497E2]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="h-px w-5 bg-[#0497E2]/30 transition-all duration-500 group-hover:w-10" />

                                    </div>

                                    <p className="text-base font-bold leading-snug text-[#11224D] transition-colors duration-300 group-hover:text-[#0497E2] sm:text-lg">
                                        {benefit}
                                    </p>

                                </div>


                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}