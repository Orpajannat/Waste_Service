import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Building2, FerrisWheel, Landmark } from 'lucide-react'

const services = [
  {
    title: 'Communal Area Cleaning',
    image: '/images/Garbage.jpg',
    href: '/communalAreaCleaning',
    position: 'object-center',
  },
  {
    title: 'Grounds Maintenance',
    image: '/images/Lawn.jpg',
    href: '/gardenClearance',
    position: 'object-center',
  },
  {
    title: 'Window Cleaning',
    image: '/images/window.jpg',
    href: '/windowCleaning',
    position: 'object-center',
  },
]

export default function WindowServiceCards() {
  return (
    <section className='relative isolate overflow-hidden bg-[#11224D]'>
      <Image
        src='/images/window.jpg'
        alt=''
        fill
        sizes='100vw'
        className='-z-20 object-cover opacity-15'
        aria-hidden='true'
      />
      <div aria-hidden='true' className='absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(17,34,77,0.96),rgba(26,104,163,0.78),rgba(17,34,77,0.96))]' />

      <div aria-hidden='true' className='pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between text-[#B9DCF5]/10'>
        <div className='flex items-end'>
          <FerrisWheel className='hidden h-56 w-56 sm:block' strokeWidth={0.8} />
          <Building2 className='h-32 w-32' strokeWidth={0.8} />
        </div>
        <Landmark className='hidden h-48 w-48 md:block' strokeWidth={0.8} />
      </div>

      <div className='relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 px-4 py-10 sm:grid-cols-2 sm:px-6 sm:py-12 lg:grid-cols-3 lg:gap-6 lg:px-8 lg:py-14'>
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            aria-label={`Explore ${service.title}`}
            className='group flex min-h-full flex-col overflow-hidden rounded-xl border border-[#B9DCF5]/25 bg-[#11224D] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.24)] transition duration-300 motion-safe:hover:-translate-y-2 hover:border-[#B9DCF5] hover:bg-[#1A68A3] hover:shadow-[0_20px_45px_rgba(0,0,0,0.32)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B9DCF5]/60'
          >
            <div className='relative aspect-[3/2] w-full overflow-hidden rounded-md border border-white/70 bg-[#B9DCF5]/20'>
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes='(max-width: 639px) calc(100vw - 64px), (max-width: 1023px) calc(50vw - 56px), 330px'
                className={`object-cover transition duration-500 motion-safe:group-hover:scale-110 ${service.position}`}
              />
              <div aria-hidden='true' className='absolute inset-0 bg-[#11224D]/10 transition-colors duration-300 group-hover:bg-transparent' />
            </div>

            <div className='flex min-h-16 flex-1 items-center justify-center gap-2 px-2 py-4 text-center text-white transition-colors duration-300 group-hover:text-[#11224D]'>
              <h2 className='text-base font-bold uppercase leading-tight sm:text-lg lg:text-xl'>
                {service.title}
              </h2>
              <ArrowUpRight
                aria-hidden='true'
                className='size-5 shrink-0 opacity-0 transition duration-300 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1 group-hover:opacity-100'
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
