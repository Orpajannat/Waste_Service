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

        <h3 className='mt-5 text-xl font-bold leading-tight text-[#11224D] sm:text-2xl pb-5'>
          Fly Tipped Rubbish Removal
        </h3>

        <ul className='grid w-full grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 sm:gap-y-4 lg:gap-x-8 lg:gap-y-5'>
          {wasteTypes.map((item) => (
            <li
              key={item}
              className='group relative flex min-h-16 min-w-0 flex-row items-center gap-3 overflow-hidden rounded-xl border border-[#11224D]/10 bg-white px-3 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0497E2]/30 hover:shadow-lg hover:shadow-[#11224D]/10 sm:min-h-18 sm:gap-4'
            >
              <span className='absolute left-0 top-0 h-full w-1 bg-[#0497E2] transition-all duration-300 group-hover:w-1.5' />

              <span className='flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#11224D]/5 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#11224D] sm:size-12'>
                <Recycle
                  aria-hidden='true'
                  className='size-5 text-[#11224D] transition-all duration-300 group-hover:text-white sm:size-6'
                  strokeWidth={2.5}
                />
              </span>

              <span className='min-w-0 text-base font-bold leading-snug text-[#11224D] transition-colors duration-300 group-hover:text-[#0497E2] sm:text-lg'>
                {item}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href='tel:02082266477'
          className='group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#11224D] px-5 py-4 text-center text-sm font-bold uppercase leading-relaxed text-white shadow-lg shadow-[#11224D]/10 transition-all duration-500 hover:-translate-y-1 hover:bg-[#0497E2] hover:shadow-xl hover:shadow-[#0497E2]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11224D] sm:px-7 sm:text-base lg:text-lg [&>svg]:size-9 [&>svg]:rounded-full [&>svg]:bg-white/10 [&>svg]:p-2 [&>svg]:transition-all [&>svg]:duration-500 hover:[&>svg]:bg-white hover:[&>svg]:text-[#11224D]'
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
