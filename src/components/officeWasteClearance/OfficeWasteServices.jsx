import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function OfficeWasteServices () {
  return (
    <section className='bg-white'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold uppercase leading-tight text-[#11224D] sm:text-3xl lg:text-4xl'>
          Chingford Office Clearance Services
        </h2>

        <div className='mt-4 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
          <p>
            For the #No.1 office rubbish and waste clearance service we’ve got you covered. We do all the work, from simple single items and room clearance,
          </p>
          <p>
            to full office clearance including your storage areas.
          </p>
          <p>
            We make your office clearances as easy and hassle-free as possible from start to finish.
          </p>
        </div>

        <Link
          href='tel:02082266477'
          className='group mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#1A68A3] px-4 py-3 text-center text-sm font-bold uppercase leading-snug text-[#11224D] transition hover:bg-[#11224D] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A68A3]/30 sm:text-base lg:text-xl'
        >
          <span>
           For Chingford office clearance prices, call {' '}
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
