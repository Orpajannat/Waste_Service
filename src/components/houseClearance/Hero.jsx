import Image from 'next/image'
import React from 'react'
import { ArrowRight } from 'lucide-react';

export default function Hero () {
  return (
    <div className='relative h-[32rem] w-full overflow-hidden sm:h-[30rem] lg:h-[40rem]'>
        <Image src="/images/Garbage.jpg" alt="garbage" fill sizes="100vw" className="object-cover"/>
        <div className='absolute inset-x-4 top-1/2 flex -translate-y-3/4 flex-col items-baseline gap-4 rounded-lg bg-black/70 px-5 py-6 transition duration-300 hover:-translate-x-2 sm:inset-x-6 sm:gap-5 sm:px-8 sm:py-8 md:left-auto md:right-8 md:w-[min(35rem,calc(100%-4rem))] lg:right-[8%] lg:px-10 lg:py-10'>
            <h1 className='text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl'>
                House Clearance Rubbish Removal in Chingford
            </h1>
            <button type='button' className='group flex flex-row items-center gap-2 rounded-lg bg-[#29B380] px-4 py-2 font-bold text-black hover:bg-[#19452A] hover:text-white/80'>
                Check Prices & Book
                <ArrowRight className='transition duration-300 group-hover:translate-x-1'/>
            </button>
            <p className='text-sm leading-relaxed text-green-100/80 sm:text-base'>
                Our house clearance and rubbish removal services save you money, heavy lifting and trips to the local Chingford dump
            </p>
        </div>
    </div>
  )
}
