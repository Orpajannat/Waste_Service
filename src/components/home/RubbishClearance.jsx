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
        <section id='rubbish-clearance' className='relative overflow-hidden bg-[#A7DDD2]/30'>
            <div aria-hidden='true' className='pointer-events-none absolute bottom-0 right-0 hidden items-end gap-2 text-[#29B380]/15 lg:flex xl:right-5'>
                <Building2 className='h-24 w-24' strokeWidth={1.2}/>
                <Factory className='h-32 w-32' strokeWidth={1.2}/>
                <FerrisWheel className='h-28 w-28' strokeWidth={1.2}/>
            </div>

            <div className='container relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14'>
                <div className='max-w-6xl'>
                    <h2 className='text-2xl font-bold leading-tight text-[#153933] sm:text-3xl'>Rubbish Clearance Services</h2>

                    <div className='mt-5 space-y-3 text-sm leading-relaxed text-black/65 sm:text-base lg:mt-7'>
                        <p>Waste Services Ltd is a trusted rubbish removal company and one of the leading domestic and commercial waste clearance companies in the Home Counties.</p>
                        <p>Our staff members have years of experience, completing all work in accordance with Health and Safety guidelines. As a forward-thinking, environmentally aware company, we aim to recycle upwards of 95% of all waste collected.</p>
                        <p>We are an approved waste carrier, fully insured and champions of recycling and managing rubbish in a safe and economical way. Our ethos is to safely remove waste from homes and businesses effectively—doing all the heavy lifting for you.</p>
                    </div>

                    <a
                        href='tel:02082266477'
                        className='group mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#077F7F] px-4 py-3 text-center text-sm font-bold uppercase leading-snug text-white transition-colors hover:bg-[#0B3E43] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#077F7F] sm:px-6 sm:text-base lg:text-lg'
                    >
                        <span>Call us today for more information on our waste clearance services - <strong className='whitespace-nowrap'>020 8226 6477</strong></span>
                        <ChevronRight aria-hidden='true' className='size-5 shrink-0 transition-transform group-hover:translate-x-1 sm:size-6' strokeWidth={3}/>
                    </a>

                    <h3 className='mt-8 text-xl font-bold leading-tight text-[#153933] sm:text-2xl lg:mt-10 lg:text-3xl'>Why choose Waste Services Ltd for your mini skips or rubbish removal?</h3>

                    <div className='mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-1 lg:mt-6 lg:grid-cols-2 lg:gap-x-12'>
                        {benefits.map((benefit) => (
                            <div key={benefit} className='flex min-w-0 items-start gap-2.5 group hover:bg-[#077F7F]/30 hover:shadow-xl hover:translate-x-1 px-4 py-1 w-fit rounded-lg'>
                                <Check aria-hidden='true' className='mt-0.5 size-5 shrink-0 text-[#077F7F] sm:size-6 group-hover:scale-110' strokeWidth={3}/>
                                <p className='text-sm leading-snug text-black/65 sm:text-base'>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
