import React from 'react'
import { Building2, Check, ChevronRight, Factory, FerrisWheel } from 'lucide-react'

export default function RubbishClearance () {
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
        <section id='rubbish-clearance' className='relative overflow-hidden bg-[#B9DCF5]/30'>
            <div aria-hidden='true' className='pointer-events-none absolute bottom-0 right-0 hidden items-end gap-2 text-[#1A68A3]/15 lg:flex xl:right-5'>
                <Building2 className='h-24 w-24' strokeWidth={1.2}/>
                <Factory className='h-32 w-32' strokeWidth={1.2}/>
                <FerrisWheel className='h-28 w-28' strokeWidth={1.2}/>
            </div>

            <div className='container relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14'>
                <div className='max-w-6xl'>
                    <h2 className='text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl lg:text-4xl'>Rubbish Clearance Services</h2>
                    <div className='h-1 w-12 rounded-full bg-linear-to-r from-[#11224D] to-[#4873AF]'></div>

                    <div className='mt-5 space-y-3 text-sm leading-relaxed text-black/65 sm:text-base lg:mt-7'>
                        <p>Waste Services Ltd is a trusted rubbish removal company and one of the leading domestic and commercial waste clearance companies in the Home Counties.</p>
                        <p>Our staff members have years of experience, completing all work in accordance with Health and Safety guidelines. As a forward-thinking, environmentally aware company, we aim to recycle upwards of 95% of all waste collected.</p>
                        <p>We are an approved waste carrier, fully insured and champions of recycling and managing rubbish in a safe and economical way. Our ethos is to safely remove waste from homes and businesses effectively—doing all the heavy lifting for you.</p>
                    </div>

                    <a
                        href='tel:02082266477'
                        className='group mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-linear-to-b from-[#0D3A66] to-[#4572AE] px-4 py-3 text-center text-sm font-bold uppercase leading-snug text-white transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11224D] sm:px-6 sm:text-base lg:text-lg'
                    >
                        <span>Call us today for more information on our waste clearance services - <strong className='whitespace-nowrap'>020 8226 6477</strong></span>
                        <ChevronRight aria-hidden='true' className='size-5 shrink-0 transition-transform group-hover:translate-x-1 sm:size-6' strokeWidth={3}/>
                    </a>

                    <h3 className='mt-8 text-xl font-bold leading-tight text-[#11224D] sm:text-2xl lg:mt-10 lg:text-3xl'>Why choose Waste Services Ltd for your mini skips or rubbish removal?</h3>

                    <div className='mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-1 lg:mt-6 lg:grid-cols-2 lg:gap-x-12'>
                        {benefits.map((benefit) => (
                            <div key={benefit} className='group flex min-h-14 min-w-0 flex-row items-center gap-2 rounded-xl bg-linear-to-b from-[#0497E2] to-[#4572AE] px-3 py-2 shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:min-h-16 sm:gap-3'>
                                <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-white'>
                                    <Check aria-hidden='true' className='size-5 shrink-0 text-[#11224D]/80 transition-transform duration-300 group-hover:scale-110 sm:size-6'/>
                                </div>
                                <p className='min-w-0 text-base leading-snug text-white sm:text-lg'>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
