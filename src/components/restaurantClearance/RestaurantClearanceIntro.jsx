import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function RestaurantClearanceIntro() {
  return (
    <section className='bg-white' aria-labelledby='restaurant-intro-title'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2
          id='restaurant-intro-title'
          className='text-2xl font-bold uppercase leading-tight text-[#11224D] sm:text-3xl lg:text-4xl'
        >
          Chingford Restaurant Clearance Services
        </h2>

        <div className='mt-4 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
          <p>
            For the #No.1 restaurant rubbish and waste clearance we’ve got you covered. We do all the work, from simple single items or room clearance to full restaurant clearance including store rooms, garages, basements and lofts. We make your restaurant clearances as easy and hassle-free as possible from start to finish.
          </p>
          <p>
            We are proud to be an approved waste carrier, fully insured and champions of recycling, consistently managing rubbish in a safe and economical way. Our ethos is to safely remove waste from homes and businesses in an effective way, doing all the heavy lifting for you.
          </p>
        </div>

        <Link
          href='tel:02082266477'
          className='group mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#1A68A3] px-4 py-3 text-center text-sm font-semibold uppercase leading-snug text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#11224D] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A68A3]/30 sm:text-base lg:text-xl'
        >
          <span>
            For Chingford restaurant clearance prices, call{' '}
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
