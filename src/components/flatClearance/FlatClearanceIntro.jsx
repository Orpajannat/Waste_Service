import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function FlatClearanceIntro () {
  return (
    <section className='bg-white' aria-labelledby='restaurant-intro-title'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2
          id='restaurant-intro-title'
          className='text-2xl font-bold uppercase leading-tight text-[#11224D] sm:text-3xl lg:text-4xl'
        >
          #Best Flat Clearance & Rubbish Removal Chingford
        </h2>

        <div className='mt-4 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
          <p>
            For the number 1 flat, maisonette and duplex flat clearance in Chingford, get in touch with London Waste Services Ltd. We do all the work for you, from simple single items or room clearance to full flat clearance, including your garage, shed, basement and loft flat.
          </p>
          <p>
            Removing heavy goods and rubbish removal from flats can be stressful, hard work and sometimes difficult, particularly with larger objects around stairwells and corner stairs.
          </p>
          <p>
            We make your flat house clearances as easy and hassle-free as possible, from start to finish.
          </p>
        </div>

        <Link
          href='tel:02082266477'
          className='group mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#1A68A3] px-4 py-3 text-center text-sm font-semibold uppercase leading-snug text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#11224D] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A68A3]/30 sm:text-base lg:text-xl'
        >
          <span>
            For Chingford flat clearance prices, call{' '}
            <strong className='whitespace-nowrap'>020 8226 6477</strong> today
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
