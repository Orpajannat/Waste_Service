import React from 'react'
import { Building2, Factory, FerrisWheel } from 'lucide-react'

export default function Benefits () {
  const benefits = [
    {
      title: 'Flexible Booking',
      paragraphs: [
        "If you decide to add additional items to your load, no problem. Just let the office know and we'll be more than happy to take these for you. Our waste teams carry card machines so extra payments can be taken easily.",
        'For larger collections, our vehicles use modern weighing equipment to ensure you only get charged for the waste we collect.',
      ],
    },
    {
      title: '95% Recycled',
      paragraphs: [
        'As a responsible waste carrier, all items collected are disposed of ethically wherever possible. We see it as our responsibility to reduce our carbon footprint, which is why over 95% of waste is recycled.',
      ],
    },
    {
      title: 'Next Day Collection',
      paragraphs: [
        'Booking online could not be easier. You can choose guaranteed next-day collection or a different date to suit you. Terms and conditions apply.',
      ],
    },
    {
      title: 'Sit & Relax',
      paragraphs: [
        'Why do the work yourself when we can do it for you? Our collection team will handle all the necessary lifting and carrying. They will even tidy or sweep up when needed.',
      ],
    },
  ]

  return (
    <section className='relative overflow-hidden bg-[#A7DDD2]/30'>
      <div aria-hidden='true' className='pointer-events-none absolute bottom-0 right-0 hidden items-end gap-1 text-[#29B380]/15 lg:flex xl:right-6'>
        <Building2 className='h-20 w-20' strokeWidth={1.2}/>
        <Factory className='h-28 w-28' strokeWidth={1.2}/>
        <FerrisWheel className='h-24 w-24' strokeWidth={1.2}/>
      </div>

      <div className='container relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14'>
        <div className='max-w-6xl'>
          <h2 className='text-2xl font-bold leading-tight text-[#153933] sm:text-3xl'>Benefits of Using Waste Services Ltd</h2>

          <div className='mt-6 space-y-5 sm:mt-8 sm:space-y-6'>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                tabIndex={0}
                className='group relative flex items-start gap-3 overflow-hidden rounded-xl border border-transparent px-3 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#29B380]/30 hover:bg-white/75 hover:shadow-[0_10px_30px_rgba(7,127,127,0.12)] focus-visible:-translate-y-0.5 focus-visible:border-[#29B380]/40 focus-visible:bg-white/75 focus-visible:outline-none focus-visible:shadow-[0_10px_30px_rgba(7,127,127,0.12)] sm:gap-4 sm:px-4'
              >
                <span aria-hidden='true' className='absolute inset-y-3 left-0 w-1 origin-bottom scale-y-0 rounded-full bg-[#29B380] transition-transform duration-300 group-hover:scale-y-100 group-focus:scale-y-100'/>
                <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-[#077F7F] text-base font-bold text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#29B380] group-hover:shadow-md group-focus:scale-110 group-focus:bg-[#29B380] sm:size-9 sm:text-lg'>
                  {index + 1}
                </span>

                <div className='min-w-0 pt-0.5'>
                  <h3 className='text-lg font-bold leading-tight text-[#153933] transition-colors duration-300 group-hover:text-[#077F7F] group-focus:text-[#077F7F] sm:text-xl'>{benefit.title}</h3>
                  <div className='mt-1 space-y-2 text-sm leading-relaxed text-black/65 sm:text-base'>
                    {benefit.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
