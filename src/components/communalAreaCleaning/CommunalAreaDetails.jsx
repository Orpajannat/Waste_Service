import React from 'react'
import Link from 'next/link'
import { Building2, ChevronRight, FerrisWheel, Landmark } from 'lucide-react'
import CheckPointCard from '../CheckPointCard'

const services = [
  'Washing is done with purified water only which guarantees no signs of mineral deposits or streaks',
  'Minimum risk of property damages as no ladders are used, we clean from the ground up',
  'All technicians are insured and certified, and locally based',
  'Option for pick-up and delivery of keys',
  'Entirely eco-friendly procedure',
  'Free viewings',
]

const benefits = [
  'We have many years of experience around Chingford',
  'Our maintenance team is highly knowledgeable',
  'Our prices offer fantastic value for money',
  'Our attention to detail is exceptional',
  'Our equipment is the best available in Chingford',
  "We won't leave until a customer is happy!",
]

export default function CommunalAreaDetails () {
  return (
    <section className='relative overflow-hidden bg-linear-to-b from-[#FFFFFF] to-[#E9F4FC]'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -bottom-5 -right-6 hidden items-end gap-1 text-[#11224D]/15 lg:flex'
      >
        <Landmark className='h-24 w-24' strokeWidth={1.2} />
        <Building2 className='h-36 w-24' strokeWidth={1.2} />
        <FerrisWheel className='h-24 w-24' strokeWidth={1.2} />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold leading-tight text-[#252525] sm:text-3xl'>
          Professional Window Cleaners in Chingford
        </h2>

        <div className='mt-3 max-w-5xl space-y-2 text-sm leading-relaxed text-[#344054] sm:text-base'>
          <p>
            Our trained, highly experienced and well-prepared window cleaners will keep your glass streak-free and clear. Our teams use the most effective tools, detergents and methods to clean windows.
          </p>
          <p>
            Our services ensure that you get the best possible outcome for your residential property or business premises without trouble and hassle. On top of that, you receive our complete clean guarantee!
          </p>
        </div>

        <Link
          href='tel:02082266477'
          className='group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#11224D] px-5 py-4 text-center text-sm font-bold uppercase leading-relaxed text-white shadow-lg shadow-[#11224D]/10 transition-all duration-500 hover:-translate-y-1 hover:bg-[#0497E2] hover:shadow-xl hover:shadow-[#0497E2]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11224D] sm:px-7 sm:text-base lg:text-lg [&>svg]:size-9 [&>svg]:rounded-full [&>svg]:bg-white/10 [&>svg]:p-2 [&>svg]:transition-all [&>svg]:duration-500 hover:[&>svg]:bg-white hover:[&>svg]:text-[#11224D]'
        >
          <span>
            Call us today for more information on our window cleaning services -{' '}
            <span className='whitespace-nowrap'>020 8226 6477</span>
          </span>
          <ChevronRight
            aria-hidden='true'
            className='size-5 shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-1 sm:size-6'
            strokeWidth={3}
          />
        </Link>

        <div className='mt-9 sm:mt-10'>
          <h3 className='font-bold text-[#3b3b3b]'>Our Chingford Window Cleaning Services Includes:</h3>
          <ul className='mt-5 grid grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-2 lg:gap-5'>
            {services.map((service, index) => <CheckPointCard key={service} index={index}>{service}</CheckPointCard>)}
          </ul>
        </div>

        <div className='mt-12 sm:mt-16'>
          <h3 className='max-w-5xl text-2xl font-bold leading-tight text-[#252525] sm:text-3xl'>
            Why you should choose London Waste Services Ltd for your window cleaning:
          </h3>
          <ul className='mt-5 grid grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-2 lg:gap-5'>
            {benefits.map((benefit, index) => <CheckPointCard key={benefit} index={index}>{benefit}</CheckPointCard>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
