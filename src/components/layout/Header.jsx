import Image from 'next/image'
import React from 'react'
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Header () {
  return (
    <header className='sticky top-0 z-50 right-0 left-0 flex flex-col'>
        <div className='bg-white container mx-auto flex min-w-full flex-col px-4 py-5 sm:px-6 md:py-2 lg:flex-row lg:items-center lg:justify-evenly lg:gap-8 lg:px-8'>
            <Link href="/">
               <Image
                className='mx-auto h-auto w-44 sm:w-52 lg:mx-0 lg:w-40'
                src={"/images/MainLogo.png"}
                alt="Waste Services"
                width={160}
                height={80}
                priority
               />
            </Link>
            <div className='mt-5 flex min-w-0 flex-col gap-3 sm:mx-auto sm:w-fit md:flex-row md:items-end md:gap-7 lg:mx-0 lg:mt-0 lg:items-baseline'>
                <div className='flex min-w-0 flex-col items-start lg:items-center'>
                    <h1 className='text-2xl font-bold uppercase leading-tight text-black sm:text-3xl lg:normal-case'>Rubbish Waste Collection</h1>
                    <h2 className='mt-1 text-lg leading-tight text-[#11224D] sm:text-xl'>Serving The Home Counties</h2>
                </div>
                <div className='flex shrink-0 flex-col items-start justify-between lg:items-center'>
                    <a href='tel:02082266477' className='text-2xl font-bold leading-none text-black sm:text-3xl'>020 8226 6477</a>
                    <button className='group mt-3 flex flex-row items-center gap-2 rounded-md bg-[#008FE7] px-4 py-2 font-semibold uppercase text-white/90 hover:text-[#11224D] transition-colors hover:bg-[#76b3f0] sm:px-6 lg:rounded-lg lg:px-8 lg:normal-case'>
                        Prices &amp; Book
                        <ArrowRight className='transition duration-200 group-hover:translate-x-1'/>
                    </button>
                </div>
            </div>
        </div>
        <Navbar/>
    </header>
  )
}
