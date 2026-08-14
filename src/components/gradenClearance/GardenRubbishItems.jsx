import { Recycle } from 'lucide-react'

export default function GardenRubbishItems() {
  const items = [
    'BBQs', 'Extensions', 'Hedges & Shrubs', 'Sheds', 'Trees',
    'Block Paving', 'Fence Posts', 'Old Brick Walls', 'Soil Waste', 'Turf',
    'Bricks', 'Fencing', 'Old Patios', 'Stones', 'Water Features',
    'Builders Waste', 'Garages', 'Outbuildings', 'Swimming Pools', 'Wire Fencing',
    'Christmas Trees', 'Garden Awnings', 'Patio Umbrellas', 'Tarmac Drives',
    'Concrete', 'Garden Furniture', 'Ponds', 'Topsoil',
    'Conservatories', 'Garden Pots', 'Rubble', 'Tree Stumps',
  ]

  return (
    <section className='bg-white'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold leading-tight text-[#153933] sm:text-3xl'>
          All kinds of garden rubbish cleared in Chingford
        </h2>

        <p className='mt-5 text-sm leading-relaxed text-neutral-700 sm:text-base'>
          These are just some of the examples of the garden waste we have cleared already this year:
        </p>

        <div className='mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {items.map((item) => (
            <div
              key={item}
              className='group flex min-h-10 items-center justify-between gap-3 rounded-full bg-[#A7DDD2]/35 px-4 py-2 text-sm font-medium text-[#153933] transition duration-300 hover:-translate-y-0.5 hover:bg-[#29B380] hover:shadow-md sm:text-base'
            >
              <span className='min-w-0 leading-tight'>{item}</span>
              <Recycle
                aria-hidden='true'
                className='size-5 shrink-0 text-[#077F7F]/45 transition duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-[#153933]'
                strokeWidth={2.5}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
