import { Recycle } from 'lucide-react'

const restaurantWaste = [
  'Bars',
  'Ceilings',
  'Flooring',
  'Restaurant Furniture',
  'Tables & Chairs',
  'Bathrooms',
  'Cupboards',
  'Kitchens',
  'Stairs',
  'Building Waste',
  'Doors',
  'Refurb Waste',
  'Storage Units',
]

export default function RestaurantClearanceServices() {
  return (
    <section className='bg-white' aria-labelledby='restaurant-clearance-title'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2
          id='restaurant-clearance-title'
          className='text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl lg:text-4xl'
        >
          Reliable Chingford Restaurant Clearance Services
        </h2>
        <div className='h-1 w-12 rounded-full bg-linear-to-r from-[#11224D] to-[#4873AF]'></div>

        <p className='mt-6 text-sm leading-relaxed text-neutral-700 sm:text-base'>
          These are just some of the examples of the restaurant waste we have cleared already this year:
        </p>

        <ul className='mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {restaurantWaste.map((item) => (
            <li
              key={item}
              className='group flex min-h-9 items-center justify-between gap-3 rounded-full bg-[#EAF2FB] px-3 py-1.5 text-sm font-medium leading-tight text-[#11224D] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#1A68A3] hover:text-white hover:shadow-md sm:text-base'
            >
              <span className='min-w-0'>{item}</span>
              <Recycle
                aria-hidden='true'
                className='size-5 shrink-0 text-[#1A68A3]/35 transition duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-white'
                strokeWidth={2.5}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
