import Link from 'next/link'
import { ChevronRight, Recycle } from 'lucide-react'

const wasteTypes = [
  'All Waste Removed',
  'General House Waste',
  'Garden Clearance (incl. Sheds & Garages)',
  'Builders Waste & Rubble Removal',
  'White Goods Appliances (incl. fridges/freezers)',
  'No Job too Small or Too Big',
  'Old Furniture (incl. sofas/ cabinet)',
  'Home Improvement Waste',
]

export default function FlyTippingServices() {
  return (
    <section className='bg-white' aria-labelledby='fly-tipping-services-title'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2
          id='fly-tipping-services-title'
          className='text-2xl font-bold uppercase leading-tight text-[#11224D] sm:text-3xl lg:text-4xl'
        >
          Chingford Fly Tipping Rubbish Waste Clearance
        </h2>

        <h3 className='mt-5 text-xl font-bold leading-tight text-[#11224D] sm:text-2xl'>
          Fly Tipped Rubbish Removal
        </h3>

        <ul className='mt-3 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3'>
          {wasteTypes.map((item) => (
            <li key={item} className='flex items-start gap-2.5 text-sm leading-snug text-neutral-700 sm:text-base'>
              <Recycle
                aria-hidden='true'
                className='mt-0.5 size-5 shrink-0 text-[#1A68A3]'
                strokeWidth={2.75}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href='tel:02082266477'
          className='group mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#1A68A3] px-4 py-3 text-center text-sm font-semibold uppercase leading-snug text-white transition-colors hover:bg-[#11224D] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A68A3]/30 sm:text-base lg:text-xl'
        >
          <span>
            For Chingford fly tipping clearance prices, call{' '}
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
