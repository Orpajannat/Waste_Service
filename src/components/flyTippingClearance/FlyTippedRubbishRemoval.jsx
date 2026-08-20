import { Recycle } from 'lucide-react'

const rubbishItems = [
  'Armchairs', 'Chairs', 'Dining Room Chairs', 'Kitchen Sinks', 'Rugs',
  'Bath Frames', 'Chests of Drawers', 'Dining Tables', 'Kitchen Stripping', 'Shelves',
  'Bathroom Sinks', 'Coffee Tables', 'Dishwashers', 'Kitchen Tables', 'Skirting',
  'Bathroom Stripping', 'Conservatories', 'Extractor Fans', 'Laminate Flooring', 'Sofas',
  'Bed Frames', 'Conservatory Furniture', 'Floor Tiles', 'Lamps', 'Sound Systems',
  'Bedside Tables', 'Console Tables', 'Freezers', 'Mattresses', 'Tables',
  'Bikes', 'Consoles', 'Fridges', 'Microwaves', 'TVs',
  'Blinds', 'Cookers', 'Gaming Chairs', 'Mirrors', 'Video Equipment',
  'Book Cases', 'Cupboards', 'Garages', 'Office Chairs', 'Wall Tiles',
  'Builders Waste', 'Curtain Doors', 'Garden Benches', 'Office Stripping', 'Wallpaper',
  'Cabinets', 'Cushions', 'Garden Chairs', 'Ovens', 'Wardrobes',
  'Carpets', 'Cycles', 'Kitchen Cupboards', 'PCs', 'Washing Machines',
  'Cars', 'Desks', 'Kitchen Lighting', 'Printers', 'Window Frames',
  'Desktop Monitors', 'Radiators', 'Windows',
]

export default function FlyTippedRubbishRemoval() {
  return (
    <section className='bg-white' aria-labelledby='fly-tipped-rubbish-title'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2
          id='fly-tipped-rubbish-title'
          className='text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl lg:text-4xl'
        >
          Fly Tipped Rubbish Removal
        </h2>
        <div className='h-1 w-12 rounded-full bg-linear-to-r from-[#11224D] to-[#4873AF]'></div>

        <div className='mt-6 space-y-4 text-sm leading-relaxed text-neutral-700 sm:text-base'>
          <p>
            London Waste Services Ltd offers a local &amp; reliable man and van fly tipped rubbish removal business, covering London and the Home Counties. We have several man and van teams, normally using tipper vehicles that hold all types of waste.
          </p>
          <p>
            We provide same day fly tipping waste collection in most circumstances. Our removal man and van teams will attend in branded vehicles and wearing London Waste Services uniforms.
          </p>
          <p>
            These are just some examples of the fly tipped waste we have cleared already this year:
          </p>
        </div>

        <ul className='mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {rubbishItems.map((item, index) => (
            <li
              key={`${item}-${index}`}
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
