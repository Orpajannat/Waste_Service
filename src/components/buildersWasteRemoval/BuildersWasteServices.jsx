import Link from 'next/link'

export default function BuildersWasteServices () {
  return (
    <section className='bg-white'>
      <div className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold uppercase leading-tight text-[#11224D] sm:text-3xl lg:text-4xl'>
          Builders Waste Removal Chingford
        </h2>

        <div className='mt-4 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg'>
          <p>
            If you’re looking to get rid of your builder’s waste, then look no further! From small piles of rubble to huge mounds of builders waste - we will take it all away.
          </p>
          <p>
            We remove tonnes of builders waste each week, either during a building project to keep your building site clear, or full clearance once your building project has been completed.
          </p>
          <p>
            To ensure minimal disruption to you and your builders, plumbers, plasterers, electricians or floor contractors, we will schedule waste clearance times that are optimal for everyone involved.
          </p>
        </div>

        <Link
          href='tel:02082266477'
          className='group mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#1A68A3] px-4 py-3 text-center text-sm font-bold uppercase leading-snug text-[#11224D] transition hover:bg-[#11224D] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A68A3]/30 sm:text-base lg:text-xl'
        >
          <span>
            To find out how our Chingford builders waste removal service can work for you, call {' '}
            <span className='whitespace-nowrap'>020 8226 6477</span> today
          </span>
        </Link>
      </div>
    </section>
  )
}
