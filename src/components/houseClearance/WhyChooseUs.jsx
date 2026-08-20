import Link from 'next/link'
import { Building2, ChevronRight, Factory } from 'lucide-react'
import CheckPointCard from '../CheckPointCard'

export default function WhyChooseUs() {
  const benefits = [
    'London trusted house clearance service',
    '95% of all waste successfully recycled',
    'Wait & Load branded vehicles',
    "Reliable, local 'Man & Van' house clearance",
    'Clearance teams working 6 days a week',
    'Friendly & reliable collection team',
    'Fully insured with Waste Carriers License',
    'Covering London & the Home Counties',
    'Best local rubbish removal prices',
  ]

  return (
    <section className='relative overflow-hidden bg-[#B9DCF5]/30'>
      <div aria-hidden='true' className='pointer-events-none absolute bottom-0 right-0 hidden items-end text-[#11224D]/10 lg:flex'>
        <Building2 className='h-28 w-28' strokeWidth={1.2} />
        <Factory className='h-36 w-36' strokeWidth={1.2} />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='mt-8 text-xl font-bold leading-tight text-[#11224D] sm:text-2xl lg:mt-10 lg:text-3xl'>
          Why Choose London Waste Services Ltd for House Clearance?
        </h2>

        <ul className='mt-5 grid grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-2 lg:gap-5'>
          {benefits.map((benefit, index) => (
            <CheckPointCard key={benefit} index={index}>{benefit}</CheckPointCard>
          ))}
        </ul>

        <p className='mt-4 text-sm text-neutral-700 sm:text-base'>
          For helpful information and common FAQs -{' '}
          <Link className='font-semibold text-[#11224D] underline-offset-2 transition hover:text-[#1A68A3] hover:underline' href='/faq'>
            Click here
          </Link>
        </p>

        <div className='mt-10 sm:mt-12'>
          <h3 className='text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl'>
            24 Hour Service House Clearance Chingford
          </h3>

          <div className='mt-5 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
            <p>For some of our residential customers as well as letting agents and solicitors, we do understand that sometimes a quick-turnaround is important.</p>
            <p>We are usually able to provide 24 hour collection when required - it is always worth checking our availability as the teams can get booked up fast.</p>
          </div>

          <Link href='tel:02082266477' className='group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#11224D] px-5 py-4 text-center text-sm font-bold uppercase leading-relaxed text-white shadow-lg shadow-[#11224D]/10 transition-all duration-500 hover:-translate-y-1 hover:bg-[#0497E2] hover:shadow-xl hover:shadow-[#0497E2]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11224D] sm:px-7 sm:text-base lg:text-lg [&>svg]:size-9 [&>svg]:rounded-full [&>svg]:bg-white/10 [&>svg]:p-2 [&>svg]:transition-all [&>svg]:duration-500 hover:[&>svg]:bg-white hover:[&>svg]:text-[#11224D]'>
            <span>
              For house clearance availability in London and the Home Counties call{' '}
              <span className='whitespace-nowrap'>020 8226 6477</span>
            </span>
            <ChevronRight className='size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-6' strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  )
}
