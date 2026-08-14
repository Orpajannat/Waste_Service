import Link from 'next/link'
import { Building2, Check, ChevronRight, Factory } from 'lucide-react'

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
    <section className='relative overflow-hidden bg-[#A7DDD2]/30'>
      <div aria-hidden='true' className='pointer-events-none absolute bottom-0 right-0 hidden items-end text-[#077F7F]/10 lg:flex'>
        <Building2 className='h-28 w-28' strokeWidth={1.2} />
        <Factory className='h-36 w-36' strokeWidth={1.2} />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold leading-tight text-[#153933] sm:text-3xl'>
          Why Choose London Waste Services Ltd for House Clearance?
        </h2>

        <div className='mt-6 grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3'>
          {benefits.map((benefit) => (
            <div key={benefit} className='group flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm text-[#153933] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:text-base'>
              <Check className='mt-0.5 size-5 shrink-0 text-[#29B380] transition-transform duration-300 group-hover:scale-125' strokeWidth={4} />
              <span className='leading-relaxed'>{benefit}</span>
            </div>
          ))}
        </div>

        <p className='mt-4 text-sm text-neutral-700 sm:text-base'>
          For helpful information and common FAQs -{' '}
          <Link className='font-semibold text-[#077F7F] underline-offset-2 transition hover:text-[#29B380] hover:underline' href='/faq'>
            Click here
          </Link>
        </p>

        <div className='mt-10 sm:mt-12'>
          <h3 className='text-2xl font-bold leading-tight text-[#153933] sm:text-3xl'>
            24 Hour Service House Clearance Chingford
          </h3>

          <div className='mt-5 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
            <p>For some of our residential customers as well as letting agents and solicitors, we do understand that sometimes a quick-turnaround is important.</p>
            <p>We are usually able to provide 24 hour collection when required - it is always worth checking our availability as the teams can get booked up fast.</p>
          </div>

          <Link href='tel:02082266477' className='group mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#077F7F] px-4 py-3 text-center text-sm font-bold uppercase leading-snug text-white transition duration-300 hover:-translate-y-1 hover:bg-[#29B380] hover:text-[#153933] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#29B380]/30 sm:text-base lg:text-xl'>
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
