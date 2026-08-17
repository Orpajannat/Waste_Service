import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function GardenServiceCards() {
  const services = [
    {
      title: 'Hedge Cutting',
      image: '/images/GardenHero.jpg',
      href: '/hedge-cutting',
      position: 'object-left',
    },
    {
      title: 'Grounds Maintenance',
      image: '/images/GardenHero.jpg',
      href: '/gardenClearance',
      position: 'object-center',
    },
    {
      title: 'Lawn Mowing',
      image: '/images/Lawn.jpg',
      href: '/lawnMowing',
      position: 'object-center',
    },
  ]

  return (
    <section className='relative overflow-hidden bg-[#11224D]'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(26,104,163,0.22),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(26,104,163,0.35),transparent_45%)]' />

      <div className='relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-8 lg:py-16'>
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className='group flex min-h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#11224D] p-4 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#B9DCF5]/70 hover:bg-[#1A68A3] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B9DCF5]/40'
          >
            <div className='relative aspect-[3/2] w-full overflow-hidden rounded-lg border border-white/60 bg-[#B9DCF5]/20'>
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes='(max-width: 767px) calc(100vw - 64px), (max-width: 1023px) calc(50vw - 52px), 340px'
                className={`object-cover transition duration-500 group-hover:scale-110 ${service.position}`}
              />
              <div aria-hidden='true' className='absolute inset-0 bg-[#11224D]/10 transition group-hover:bg-transparent' />
            </div>

            <div className='flex min-h-16 flex-1 items-center justify-center gap-2 px-2 py-4 text-center text-white transition-colors group-hover:text-[#11224D] sm:min-h-18'>
              <h2 className='text-lg font-bold uppercase leading-tight sm:text-xl'>
                {service.title}
              </h2>
              <ArrowUpRight className='size-5 shrink-0 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100' aria-hidden='true' />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
