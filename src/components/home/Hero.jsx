import Image from 'next/image'
import React from 'react'
import { ArrowRight } from 'lucide-react';

export default function Hero () {
  return (
    <div className='relative h-[34rem] w-full overflow-hidden sm:h-[36rem] md:h-[40rem] lg:h-[50rem]'>
        <Image src="/images/Hero1.jpg" alt="garbage" fill sizes="100vw" className="object-cover" priority/>
        <div className='absolute inset-0 overflow-hidden bg-linear-to-l from-[#11224D] to-transparent'></div>
        <div className='absolute inset-x-4 top-1/2 flex -translate-y-1/2 flex-col items-baseline gap-4 rounded-xl bg-white/20 px-5 py-6 transition duration-300 sm:inset-x-6 sm:gap-5 sm:px-8 sm:py-8 md:left-auto md:right-8 md:w-[min(35rem,calc(100%-4rem))] md:hover:-translate-x-2 lg:right-[17%] lg:px-10 lg:py-10'>
            <h1 className='text-3xl font-semibold leading-tight sm:text-4xl lg:text-4xl'>
                #No.1 Waste Removal Service
            </h1>
            <div>
                <h2 className='text-xl leading-tight text-[#11224D] sm:text-2xl lg:text-3xl'>Rubbish Waste Collection</h2>
                <p className='mt-1 text-sm sm:text-base'>Throughout London & The Home Counties</p>
            </div>
            <button type='button' className='group flex flex-row items-center gap-2 rounded-lg bg-[#11224D] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#11224D] sm:text-base'>
                Check Prices & Book
                <ArrowRight className='transition duration-300 group-hover:translate-x-1'/>
            </button>
            <p className='text-sm leading-relaxed text-white sm:text-base'>
                London’s #No.1 Garage and Shed clearance service. All your garage junk cleared by our rubbish removal team.
            </p>
        </div>
    </div>
  )
}
