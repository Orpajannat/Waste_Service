import React from 'react'
import { Truck, ChevronsRight } from 'lucide-react';

export default function GetPrices () {
  return (
    <div className='group flex min-h-24 items-center justify-center bg-[#F7B965] px-4 py-5 transition-colors hover:bg-[#F7F2BD] sm:min-h-28 sm:px-6 lg:px-8'>
        <button type='button' className='flex w-full max-w-6xl flex-row items-center justify-between gap-3 text-left text-2xl font-semibold leading-tight text-[#164245] sm:gap-6 sm:text-3xl lg:text-5xl'>
            <span>Get Prices & Book</span> 
            <div className='flex shrink-0 flex-row items-center'>
                <Truck className='size-9 sm:size-12 lg:size-16'/>
                <ChevronsRight className='size-9 transition duration-300 group-hover:translate-x-1/2 sm:size-12 lg:size-16'/>
            </div>
        </button>
    </div>
  )
}
