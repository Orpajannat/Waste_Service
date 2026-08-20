import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function FlatClearanceIntro () {
  return (
    <section className='bg-linear-to-b from-[#FFFFFF] to-[#E9F4FC]' aria-labelledby='restaurant-intro-title'>
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
          className='group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#11224D] px-5 py-4 text-center text-sm font-bold uppercase leading-relaxed text-white shadow-lg shadow-[#11224D]/10 transition-all duration-500 hover:-translate-y-1 hover:bg-[#0497E2] hover:shadow-xl hover:shadow-[#0497E2]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11224D] sm:px-7 sm:text-base lg:text-lg [&>svg]:size-9 [&>svg]:rounded-full [&>svg]:bg-white/10 [&>svg]:p-2 [&>svg]:transition-all [&>svg]:duration-500 hover:[&>svg]:bg-white hover:[&>svg]:text-[#11224D]'
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
