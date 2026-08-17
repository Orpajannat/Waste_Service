import Link from 'next/link'
import { ChevronRight, Recycle } from 'lucide-react'

const wasteTypes = ['Bathroom Fixtures', 'Kitchens & Appliances', 'Timber and Wood', 'Windows & Doors', 'Garden Waste', 'Plasterboard', 'Rubble and Brickwork', 'Flooring', 'Conservatories', 'And more...']

export default function BuildersWasteInfo() {
  return (
    <section className='bg-white'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='rounded-2xl border-l-4 border-[#1A68A3] px-4 py-5 transition duration-300 hover:bg-[#B9DCF5]/10 hover:shadow-[0_14px_40px_rgba(26,104,163,0.10)] sm:px-6 sm:py-7 lg:px-8'>
          <h2 className='text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl'>What we know about clearing builders waste in Chingford</h2>
          <p className='mt-5 max-w-5xl text-sm leading-relaxed text-[#344054] sm:text-base lg:text-lg'>
            Having worked for many homeowners, plumbers and builders, we know it is critical for safety and productivity to keep a building site, home development or building renovation free from building rubble. Whether your site is a simple bathroom refit, house renovation or a commercial industrial project, it is important you choose an experienced, Waste Carrier Licenced waste removal operator. We can confidently handle all building waste you need removed with the minimum of hassle.
          </p>
          <p className='mt-3 text-sm text-[#344054] sm:text-base lg:text-lg'>London Waste Services weekly clears the following from building projects:</p>

          <ul className='mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5'>
            {wasteTypes.map((wasteType) => (
              <li key={wasteType} className='group flex min-h-10 items-center justify-between gap-3 rounded-full bg-[#B9DCF5]/30 px-4 py-2 text-sm text-[#11224D] transition duration-300 motion-safe:hover:-translate-y-1 hover:bg-[#1A68A3] hover:shadow-md sm:text-base'>
                <span>{wasteType}</span>
                <Recycle aria-hidden='true' className='size-5 shrink-0 text-[#11224D]/55 transition duration-300 motion-safe:group-hover:rotate-12 motion-safe:group-hover:scale-110 group-hover:text-[#11224D]' strokeWidth={3} />
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-8 rounded-2xl px-4 py-5 transition duration-300 hover:bg-[#B9DCF5]/10 sm:mt-10 sm:px-6 sm:py-7 lg:px-8'>
          <h3 className='text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl'>24 hour service Chingford builders waste</h3>
          <p className='mt-5 max-w-5xl text-sm leading-relaxed text-[#344054] sm:text-base lg:text-lg'>
            For our residential customers as well as builders, plumbing, plasterers, bathroom and kitchen fitters plus letting agents and solicitors, we understand that a quick-turnaround is sometimes important. We are usually able to provide same-day builders waste collection when required. It is always worth checking our availability as the teams can get booked up fast.
          </p>
          <Link href='tel:02082266477' className='group mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#11224D] px-4 py-3 text-center text-sm font-bold uppercase leading-snug text-white transition duration-300 motion-safe:hover:-translate-y-1 hover:bg-[#1A68A3] hover:text-[#11224D] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A68A3]/30 sm:text-base lg:text-xl'>
            <span>For builders waste collection availability around London &amp; the Home Counties call <span className='whitespace-nowrap'>020 8226 6477</span></span>
            <ChevronRight aria-hidden='true' className='size-5 shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-1 sm:size-6' strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  )
}
