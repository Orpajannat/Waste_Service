import Link from 'next/link'
import { Building2, Check, ChevronRight, Factory } from 'lucide-react'

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
    <section className='relative overflow-hidden bg-[#A7DDD2]/25'>
      <div aria-hidden='true' className='pointer-events-none absolute bottom-0 right-0 hidden items-end text-[#077F7F]/10 lg:flex'>
        <Building2 className='h-28 w-28' strokeWidth={1.2} />
        <Factory className='h-36 w-36' strokeWidth={1.2} />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold leading-tight text-[#153933] sm:text-3xl'>
          Lawn Mowing in Chingford
        </h2>

        <p className='mt-3 max-w-5xl text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
          We cut any size lawn. All of our customers are different, and we deal with a range of different lawns, from small domestic lawns, to large commercial grounds maintenance contracts. Our specialist, professional grass cutting equipment produces a striped effect, and can cut the grass at five different heights, appropriate to the season.
        </p>

        <Link
          href='tel:02082266477'
          className='group mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#077F7F] px-4 py-3 text-center text-sm font-bold uppercase leading-snug text-white transition duration-300 hover:-translate-y-1 hover:bg-[#29B380] hover:text-[#153933] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#29B380]/30 sm:text-base lg:text-xl'
        >
          <span>
            Call us today for more information on our lawn mowing services -{' '}
            <span className='whitespace-nowrap'>020 8226 6477</span>
          </span>
          <ChevronRight className='size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-6' strokeWidth={3} aria-hidden='true' />
        </Link>

        <div className='mt-10 sm:mt-12'>
          <h3 className='max-w-5xl text-2xl font-bold leading-tight text-[#153933] sm:text-3xl'>
            Why you should choose London Waste Services Ltd for your lawn mowing:
          </h3>

          <div className='mt-6 grid max-w-5xl gap-2 sm:grid-cols-2 sm:gap-3'>
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className='group flex min-h-12 items-start gap-3 rounded-lg px-3 py-3 text-sm text-[#153933] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:text-base'
              >
                <Check className='mt-0.5 size-5 shrink-0 text-[#29B380] transition-transform duration-300 group-hover:scale-125' strokeWidth={4} aria-hidden='true' />
                <span className='leading-relaxed'>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
