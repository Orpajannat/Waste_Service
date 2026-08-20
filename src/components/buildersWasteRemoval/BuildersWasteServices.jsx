import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function BuildersWasteServices () {
  return (
    <section className='bg-linear-to-b from-[#FFFFFF] to-[#E9F4FC]'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold uppercase leading-tight text-[#11224D] sm:text-3xl lg:text-4xl'>
          Builders Waste Removal Chingford
        </h2>

        <div className='mt-4 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
          <p>
            If you’re looking to get rid of your builder’s waste, then look no further! From small piles of rubble to huge mounds of builders waste - we will take it all away.
          </p>
          <p>
            We remove tonnes of builders waste each week, either during a building project to keep your building site clear, or full clearance once your building project has been completed.
          </p>
          <p>
            To ensure minimal disruption to you and your builders, plumbers, plasterers, electricians or floor contractors, we will schedule waste clearance times that are optimal for everyone involved.
          </p>
        </div>

        <Link
          href='tel:02082266477'
          className="group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#11224D] px-5 py-4 text-center text-sm font-bold uppercase leading-relaxed text-white shadow-lg shadow-[#11224D]/10 transition-all duration-500 hover:-translate-y-1 hover:bg-[#0497E2] hover:shadow-xl hover:shadow-[#0497E2]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11224D] sm:px-7 sm:text-base lg:text-lg"
        >
          <span>
            To find out how our Chingford builders waste removal service can work for you, call {' '}
            <span className='whitespace-nowrap'>020 8226 6477</span> today
          </span>
          <span className='flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-[#11224D]'>
            <ChevronRight aria-hidden='true' className='size-5 transition-transform duration-500 group-hover:translate-x-1' strokeWidth={3} />
          </span>
        </Link>
      </div>
    </section>
  )
}
