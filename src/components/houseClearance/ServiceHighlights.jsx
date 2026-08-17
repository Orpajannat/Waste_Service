import { Clock3, PoundSterling, Recycle, Truck } from 'lucide-react'

export default function ServiceHighlights() {
  const highlights = [
    {
      title: 'Man & Van Rubbish Removal',
      icon: Truck,
    },
    {
      title: '95% of All Waste Recycled',
      icon: Recycle,
    },
    {
      title: 'Waste Clearance Within 24 Hours',
      icon: Clock3,
    },
    {
      title: 'Simple to Book - Best Prices',
      icon: PoundSterling,
    },
  ]

  return (
    <section className='bg-[#11224D]'>
      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 sm:py-6 lg:grid-cols-4 lg:gap-4 lg:px-8'>
        {highlights.map(({ title, icon: Icon }) => (
          <div
            key={title}
            className='group flex min-h-28 items-center gap-4 rounded-xl border border-white/10 px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#B9DCF5]/50 hover:bg-white/10 hover:shadow-lg sm:min-h-32 lg:px-3'
          >
            <div className='flex size-16 shrink-0 items-center justify-center rounded-lg bg-white text-[#11224D] shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-[#B9DCF5] sm:size-18 lg:size-16 xl:size-20'>
              <Icon className='size-10 sm:size-11 lg:size-10 xl:size-12' strokeWidth={2.2} aria-hidden='true' />
            </div>

            <h2 className='text-lg font-semibold uppercase leading-tight text-white sm:text-xl lg:text-lg xl:text-xl'>
              {title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  )
}
