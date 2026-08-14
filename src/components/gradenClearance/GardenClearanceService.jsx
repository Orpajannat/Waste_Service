import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function GardenClearanceService () {
  return (
    <section className='bg-white'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold uppercase leading-tight text-[#153933] sm:text-3xl lg:text-4xl'>
          #Best Chingford Garden Clearance
        </h2>

        <div className='mt-4 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
          <p>
            We love your garden waste! Our garden clearance offers you a simple and hassle-free way to clear your garden waste. Our uniformed man and van waste removal team offers a friendly, hardworking, personal and professional service, which enables you to have peace of mind.
          </p>
          <p>
            We will ensure every last bit of your garden waste is taken away efficiently and with no fuss.
          </p>
        </div>
        <div className='mt-4 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
          <p className='font-bold text-lg sm:text-lg lg:text-2xl'>
            No job too big or too small
          </p>
          <p>
            It doesn’t matter if it's debris from hedge trimming or branches from a tree removal, we have the capacity to remove all the garden waste you have. We will collect and dispose of your garden waste correctly, so you can enjoy your garden care or renovations without any worries.
          </p>
        </div>

        <Link
          href='tel:02082266477'
          className='group mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#29B380] px-4 py-3 text-center text-sm font-bold uppercase leading-snug text-[#153933] transition hover:bg-[#077F7F] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#29B380]/30 sm:text-base lg:text-xl'
        >
          <span>
            For a Chingford house clearance price, call{' '}
            <span className='whitespace-nowrap'>020 8226 6477</span> today
          </span>
          <ChevronRight
            aria-hidden='true'
            className='size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-6'
            strokeWidth={3}
          />
        </Link>
      </div>
    </section>
  )
}
