import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function GarageRubbishClearance() {
  return (
    <section className='bg-white' aria-labelledby='garage-rubbish-clearance-title'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2
          id='garage-rubbish-clearance-title'
          className='text-2xl font-bold uppercase leading-tight text-[#11224D] sm:text-3xl lg:text-4xl'
        >
          Chingford Garage Rubbish Clearance - All Garage Junk Cleared.
        </h2>

        <div className='mt-4 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
          <p>
            Are you struggling to get into your garage? Is your garage junk taking over? London Waste Services Ltd will take away the hassle of clearing your garage. Simply talk to our Chingford garage clearance team and we will send one of our branded collection vehicles to clear your garage junk.
          </p>
          <p>
            Let us do all the heavy lifting, you don’t need to do a thing! Our experienced team arrive ready with all the right kit, whether you need us to remove a couple of items or clear entire garages.
          </p>
        </div>

        <h3 className='mt-6 text-xl font-bold leading-tight text-[#11224D] sm:text-2xl'>
          Garage &amp; Shed Rubbish Clearance
        </h3>

        <p className='mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
          Our garage &amp; shed clearance service covers every postcode in the Greater London area. All our team members are genuinely local and employed directly by us. We can clear out your shed or garage, often on the same day you call.
        </p>

        <Link
          href='tel:02082266477'
          className='group mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#1A68A3] px-4 py-3 text-center text-sm font-semibold uppercase leading-snug text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#11224D] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A68A3]/30 sm:text-base lg:text-xl'
        >
          <span>
            For a Chingford garage clearance price, call{' '}
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
