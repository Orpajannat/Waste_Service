import Image from 'next/image'
import React from 'react'
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Header () {
  return (
    <header className='fixed inset-x-0 top-3 z-50 mx-auto w-[calc(100%-1.5rem)] max-w-7xl rounded-2xl bg-white/80 shadow-lg backdrop-blur-md lg:top-5 lg:rounded-full'>
        <div className='flex w-full flex-nowrap items-center justify-start gap-3 px-3 py-2 sm:gap-4 sm:px-6 lg:gap-5 lg:px-8'>
            <Link href="/" className='order-2 flex shrink-0 items-center lg:order-1'>
               <Image
                className='mx-auto h-auto w-14 sm:w-16 lg:mx-0 lg:w-16'
                src={"/images/MainLogo.png"}
                alt="Waste Services"
                width={60}
                height={40}
                priority
               />
            </Link>

            <Navbar/>

            <div className='order-3 ml-auto flex shrink-0 items-center justify-center gap-3 lg:ml-0'>
                <a href='tel:02082266477' className='hidden whitespace-nowrap text-lg font-bold leading-none text-[#0398E9] xl:block'>020 8226 6477</a>
                <button className='group flex items-center justify-center gap-2 rounded-full border border-[#11224D] bg-[#11224D] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#11224D] sm:px-5 lg:px-4 xl:px-6'>
                    Prices &amp; Book
                    <ArrowRight className='size-5 rounded-full bg-white p-1 text-[#11224D] transition duration-200 group-hover:translate-x-1'/>
                </button>
            </div>
        </div>
    </header>
  )
}
