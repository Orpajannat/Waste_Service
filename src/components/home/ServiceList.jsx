import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function ServiceList () {
  const services = [
    { image: '/images/truck.jpg', title: 'Rubbish Clearance Services', description: 'Fast and dependable clearance for household junk, unwanted items and general waste.' },
    { image: '/images/truck.jpg', title: 'Rubbish Removal Prices', description: 'Clear, competitive pricing with flexible collection options for jobs of every size.' },
    { image: '/images/Kitchen Appliance.png', title: 'Commercial Waste Clearance', description: 'Professional waste collections for offices, shops, restaurants and commercial sites.' },
    { image: '/images/h.jfif', title: 'Fly Tipping Clearance', description: 'Safe and efficient removal of illegally dumped waste from private or commercial land.' },
    { image: '/images/Furniture.png', title: 'Furniture Removal & Disposal', description: 'Responsible collection and disposal of sofas, cabinets, desks and bulky furniture.' },
    { image: '/images/Place.webp', title: 'Local Areas Covered', description: 'Reliable rubbish collection and clearance services throughout the Home Counties.' },
  ]

  return (
    <div className='relative z-20 mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-4 py-8 sm:grid-cols-2 sm:px-6 sm:py-10 lg:grid-cols-3 lg:gap-7 lg:px-8 lg:py-14'>
      {services.map((service) => (
        <article
          key={service.title}
          tabIndex={0}
          className='group relative min-w-0 overflow-hidden rounded-lg bg-[#077F7F] p-4 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-5'
        >
          <div className='relative aspect-[3/2] w-full overflow-hidden rounded-md border border-white'>
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes='(max-width: 639px) calc(100vw - 64px), (max-width: 1023px) calc(50vw - 64px), 360px'
              className='bg-white object-cover transition duration-500 group-hover:scale-105'
            />
          </div>
          <h2 aria-hidden='true' className='invisible flex min-h-16 items-center justify-center px-2 pt-3 text-center text-xl font-bold uppercase leading-tight sm:text-2xl lg:text-[1.65rem]'>
            {service.title}
          </h2>

          <div className='absolute inset-x-0 bottom-0 flex h-full translate-y-[calc(100%_-_5rem)] flex-col items-center bg-[#077F7F] px-5 text-center text-white transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus:translate-y-0 sm:px-7'>
            <h3 className='flex min-h-20 shrink-0 items-center justify-center text-xl font-bold uppercase leading-tight sm:text-2xl lg:text-[1.65rem]'>{service.title}</h3>
            <div className='flex flex-1 flex-col items-center justify-center pb-5'>
              <p className='max-w-sm text-sm leading-relaxed text-white/85 opacity-0 transition-opacity delay-0 duration-200 group-hover:opacity-100 group-hover:delay-200 group-focus:opacity-100 group-focus:delay-200 sm:text-base'>{service.description}</p>
              <a
                href='#rubbish-clearance'
                className='mt-5 inline-flex translate-y-3 items-center gap-2 rounded-md bg-[#29B380] px-5 py-2.5 font-bold uppercase opacity-0 transition-all delay-0 duration-200 hover:bg-white hover:text-[#077F7F] group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-300 group-focus:translate-y-0 group-focus:opacity-100 group-focus:delay-300'
              >
                Read More
                <ArrowRight aria-hidden='true' className='size-5'/>
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
