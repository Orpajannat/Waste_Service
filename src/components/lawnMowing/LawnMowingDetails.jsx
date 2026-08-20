import Link from 'next/link'
import { Building2, ChevronRight, Factory } from 'lucide-react'
import CheckPointCard from '../CheckPointCard'

export default function LawnMowingDetails() {
  const benefits = [
    'We have many years of experience around Chingford',
    'Our maintenance team is highly knowledgeable',
    'Our prices offer fantastic value for money',
    'Our attention to detail is exceptional',
    'Our equipment is the best available in Chingford',
    "We won't leave until a customer is happy!",
  ]

  return (
    <section className='relative overflow-hidden bg-linear-to-b from-[#FFFFFF] to-[#E9F4FC]'>
      <div aria-hidden='true' className='pointer-events-none absolute bottom-0 right-0 hidden items-end text-[#11224D]/10 lg:flex'>
        <Building2 className='h-28 w-28' strokeWidth={1.2} />
        <Factory className='h-36 w-36' strokeWidth={1.2} />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl'>
          Lawn Mowing in Chingford
        </h2>

        <p className='mt-3 max-w-5xl text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
          We cut any size lawn. All of our customers are different, and we deal with a range of different lawns, from small domestic lawns, to large commercial grounds maintenance contracts. Our specialist, professional grass cutting equipment produces a striped effect, and can cut the grass at five different heights, appropriate to the season.
        </p>

        <Link
          href='tel:02082266477'
          className='group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#11224D] px-5 py-4 text-center text-sm font-bold uppercase leading-relaxed text-white shadow-lg shadow-[#11224D]/10 transition-all duration-500 hover:-translate-y-1 hover:bg-[#0497E2] hover:shadow-xl hover:shadow-[#0497E2]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11224D] sm:px-7 sm:text-base lg:text-lg [&>svg]:size-9 [&>svg]:rounded-full [&>svg]:bg-white/10 [&>svg]:p-2 [&>svg]:transition-all [&>svg]:duration-500 hover:[&>svg]:bg-white hover:[&>svg]:text-[#11224D]'
        >
          <span>
            Call us today for more information on our lawn mowing services -{' '}
            <span className='whitespace-nowrap'>020 8226 6477</span>
          </span>
          <ChevronRight className='size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-6' strokeWidth={3} aria-hidden='true' />
        </Link>

        <div className='mt-10 sm:mt-12'>
          <h3 className='max-w-5xl text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl'>
            Why you should choose London Waste Services Ltd for your lawn mowing:
          </h3>

          <ul className='mt-5 grid grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-2 lg:gap-5'>
            {benefits.map((benefit, index) => (
              <CheckPointCard key={benefit} index={index}>{benefit}</CheckPointCard>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
