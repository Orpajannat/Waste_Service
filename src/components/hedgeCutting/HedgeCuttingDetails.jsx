import Link from 'next/link'
import { Building2, Check, ChevronRight, FerrisWheel, Landmark } from 'lucide-react'

const services = [
  'Hedge Trimming with hedge trimmers to shape hedges',
  'Hedge Reduction in height (Any size large or small)',
  'Hedge Shaping',
  'Hedge Topiary',
  'Hedge Removal',
  'Hedge Stump removal',
]

const benefits = [
  'We have many years of experience around Chingford',
  'Our maintenance team is highly knowledgeable',
  'Our prices offer fantastic value for money',
  'Our attention to detail is exceptional',
  'Our equipment is the best available in Chingford',
  "We won't leave until a customer is happy!",
]

function CheckItem({ children }) {
  return (
    <li className='group flex items-start gap-3 rounded-lg px-2 py-2 text-sm text-[#344054] transition duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-md sm:text-base'>
      <Check
        aria-hidden='true'
        className='mt-0.5 size-5 shrink-0 text-[#1A68A3] transition-transform duration-300 motion-safe:group-hover:scale-125'
        strokeWidth={3.5}
      />
      <span className='leading-relaxed'>{children}</span>
    </li>
  )
}

export default function HedgeCuttingDetails() {
  return (
    <section className='relative overflow-hidden bg-[#B9DCF5]/25'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -bottom-5 -right-6 hidden items-end gap-1 text-[#11224D]/15 lg:flex'
      >
        <Landmark className='h-24 w-24' strokeWidth={1.2} />
        <Building2 className='h-36 w-24' strokeWidth={1.2} />
        <FerrisWheel className='h-24 w-24' strokeWidth={1.2} />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold leading-tight text-[#252525] sm:text-3xl'>
          Highest quality Hedge Cutting in Chingford
        </h2>

        <div className='mt-3 max-w-5xl space-y-2 text-sm leading-relaxed text-[#344054] sm:text-base'>
          <p>
            Our team are happy to operate under your direction and will always endeavour to complete a job based on your requirements.
          </p>
          <p>
            Well maintained and trimmed hedges, shrubs and trees will significantly improve the overall appearance of the surrounding area. London Waste Services Ltd offer a complete hedge cutting and pruning service throughout the year.
          </p>
        </div>

        <Link
          href='tel:02082266477'
          className='group mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#11224D] px-4 py-3 text-center text-sm font-bold uppercase leading-snug text-white transition duration-300 motion-safe:hover:-translate-y-1 hover:bg-[#1A68A3] hover:text-[#11224D] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A68A3]/30 sm:text-base lg:text-xl'
        >
          <span>
            Call us today for more information on our hedge cutting services -{' '}
            <span className='whitespace-nowrap'>020 8226 6477</span>
          </span>
          <ChevronRight
            aria-hidden='true'
            className='size-5 shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-1 sm:size-6'
            strokeWidth={3}
          />
        </Link>

        <div className='mt-9 sm:mt-10'>
          <h3 className='font-bold text-[#3b3b3b]'>Our Chingford Hedge Cutting Includes:</h3>
          <ul className='mt-2 grid max-w-5xl gap-x-16 sm:grid-cols-2'>
            {services.map((service) => <CheckItem key={service}>{service}</CheckItem>)}
          </ul>
        </div>

        <div className='mt-12 sm:mt-16'>
          <h3 className='max-w-5xl text-2xl font-bold leading-tight text-[#252525] sm:text-3xl'>
            Why you should choose London Waste Services Ltd for your communal area cleaning:
          </h3>
          <ul className='mt-6 max-w-2xl space-y-0.5'>
            {benefits.map((benefit) => <CheckItem key={benefit}>{benefit}</CheckItem>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
