import { Recycle } from 'lucide-react'

export default function HouseRubbishItems() {
  const items = [
    'Armchairs', 'Chests of Drawers', 'Extractor Fans', 'Lamps', 'Sofas',
    'Bath Frames', 'Coffee Tables', 'Floor Tiles', 'Mattresses', 'Sound Systems',
    'Bathroom Sinks', 'Conservatory Furniture', 'Freezers', 'Microwaves', 'Tables',
    'Bathroom Stripping', 'Console Tables', 'Fridges', 'Mirrors', 'TVs',
    'Bed Frames', 'Cookers', 'Games Consoles', 'Office Chairs', 'Wall Tiles',
    'Bedside Tables', 'Cupboards', 'Gaming Chairs', 'Office Stripping', 'Wallpaper',
    'Bikes', 'Curtain Doors', 'Garages', 'Ovens', 'Wardrobes',
    'Blinds', 'Cushions', 'Kitchen Cupboards', 'PCs', 'Washing Machines',
    'Book Cases', 'Desks', 'Kitchen Lighting', 'Printers', 'Window Frames',
    'Builders Waste', 'Desktop Monitors', 'Kitchen Sinks', 'Radiators', 'Windows',
    'Cabinets', 'Dining Room Chairs', 'Kitchen Stripping', 'Rugs',
    'Carpets', 'Dining Tables', 'Kitchen Tables', 'Shelves',
    'Chairs', 'Dishwashers', 'Laminate Flooring', 'Skirting',
  ]

  return (
    <section className='bg-white'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl'>
          All kinds of house rubbish cleared in Chingford
        </h2>

        <p className='mt-5 text-sm leading-relaxed text-neutral-700 sm:text-base'>
          These are just some of the examples of the household waste we have removed already this year:
        </p>

        <div className='mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {items.map((item) => (
            <div key={item} className='group flex min-h-10 items-center justify-between gap-3 rounded-full bg-[#B9DCF5]/35 px-4 py-2 text-sm font-medium text-[#11224D] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1A68A3] hover:shadow-md sm:text-base'>
              <span className='min-w-0 leading-tight'>{item}</span>
              <Recycle aria-hidden='true' className='size-5 shrink-0 text-[#11224D]/45 transition duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-[#11224D]' strokeWidth={2.5} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
