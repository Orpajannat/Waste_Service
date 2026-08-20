import Link from 'next/link'
import { Building2, Check, ChevronRight, FerrisWheel, Landmark } from 'lucide-react'

const reasons = [
  'London trusted #best builders waste removal',
  '95% of all waste successfully recycled',
  'Wait & Load branded vehicles',
  "Reliable 'Man & Van' builders waste clearance",
  'Clearance teams working 6 days a week',
  'Friendly & reliable collection team',
  'Fully insured with Waste Carriers License',
  'Covering London & the Home Counties',
  'Best local builders waste removal prices',
]

const steps = [
  {
    title: 'You book London Waste Services Ltd',
    content: <>When <Link href='/contactUs' className='font-semibold text-[#11224D] underline-offset-2 hover:underline'>contacting us</Link>, it is important to be honest about the quantity and type of builders rubbish to be collected. You can confirm the day, date and am/pm slot. Don&apos;t worry if you get it wrong, we can easily amend on site.</>,
  },
  {
    title: 'Our team arrives at your address',
    content: 'All our vehicles are branded and our team members wear London Waste Services Ltd uniforms, so you know who to look out for. All staff carry photo IDs and are DBS checked so you know you can trust the individuals entering your premises.',
  },
  {
    title: 'Any builders waste is safely removed',
    content: 'Once we have confirmed the size of your rubbish, site access and the best way to approach, we get on with the job! We remove all waste and sweep the area clean. Before and after photos are taken to record your waste removal, then emailed to you.',
  },
  {
    title: 'Your builders rubbish is recycled',
    content: 'We’ll take your old builders rubbish to a licensed commercial recycling facility. We ensure they have the required licences and meet our commitment to recycling levels. On average 95% is diverted from landfill.',
  },
]

export default function WhyChooseOurService() {
  return (
    <section className='relative overflow-hidden bg-linear-to-b from-[#E9F4FC] to-[#FFFFFF]'>
      <div aria-hidden='true' className='pointer-events-none absolute -bottom-6 -right-6 hidden items-end gap-1 text-[#11224D]/10 lg:flex'>
        <Landmark className='h-24 w-24' strokeWidth={1} />
        <Building2 className='h-36 w-24' strokeWidth={1} />
        <FerrisWheel className='h-24 w-24' strokeWidth={1} />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl'>
          Why choose London Waste Services Ltd for Builders Waste Removal?
        </h2>

        <div className='mt-5 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:mt-6 lg:grid-cols-2 lg:gap-5'>

          {reasons.map((reason, index) => (

            <div
              key={reason}
              className='group relative flex min-h-20 cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-[#11224D]/10 bg-white px-4 py-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#0497E2]/30 hover:shadow-xl hover:shadow-[#11224D]/10 sm:px-5'
            >

              <div className='absolute left-0 top-0 h-full w-1 bg-[#0497E2] transition-all duration-500 group-hover:w-2' />

              <div className='flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#11224D]/5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#11224D]'>

                <Check
                  aria-hidden='true'
                  className='size-6 text-[#11224D] transition-all duration-500 group-hover:scale-125 group-hover:text-white'
                  strokeWidth={2.5}
                />

              </div>

              <div className='min-w-0 flex-1'>

                <div className='mb-1 flex items-center gap-2'>

                  <span className='text-xs font-bold tracking-widest text-[#0497E2]'>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className='h-px w-5 bg-[#0497E2]/30 transition-all duration-500 group-hover:w-10' />

                </div>

                <p className='text-base font-bold leading-snug text-[#11224D] transition-colors duration-300 group-hover:text-[#0497E2] sm:text-lg'>
                  {reason}
                </p>

              </div>

            </div>

          ))}

        </div>

        <a
          href='tel:02082266477'
          className='group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#11224D] px-5 py-4 text-center text-sm font-bold uppercase leading-relaxed text-white shadow-lg shadow-[#11224D]/10 transition-all duration-500 hover:-translate-y-1 hover:bg-[#0497E2] hover:shadow-xl hover:shadow-[#0497E2]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11224D] sm:px-7 sm:text-base lg:text-lg'
        >
          <span>
            Call us today for more information on our builders waste removal services -
            <strong className='ml-1 whitespace-nowrap'>020 8226 6477</strong>
          </span>

          <span className='flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-[#11224D]'>
            <ChevronRight
              aria-hidden='true'
              className='size-5 transition-transform duration-500 group-hover:translate-x-1'
              strokeWidth={3}
            />
          </span>
        </a>

        <p className='mt-6 text-sm text-[#344054] sm:text-base'>
          For helpful information and common FAQs -{' '}
          <Link href='/faq' className='font-semibold text-[#11224D] underline-offset-2 transition hover:text-[#1A68A3] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A68A3]'>Click here</Link>
        </p>

        <h3 className='mt-8 text-2xl font-bold leading-tight text-[#11224D] sm:mt-10 sm:text-3xl'>
          DIY &amp; Builders Rubbish Removal Made Simple
        </h3>

        <ol className='mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4'>
          {steps.map((step, index) => (
            <li key={step.title} className='group flex min-h-full flex-col overflow-hidden rounded-lg border border-[#11224D]/25 bg-white shadow-sm transition duration-300 motion-safe:hover:-translate-y-2 hover:border-[#1A68A3] hover:shadow-xl'>
              <h4 className='bg-[#11224D] px-4 py-3 text-xl leading-tight text-white transition-colors duration-300 group-hover:bg-[#1A68A3] group-hover:text-[#11224D] sm:text-2xl'>
                <span className='font-bold'>{index + 1}.</span> {step.title}
              </h4>
              <p className='flex-1 px-4 py-3 text-sm leading-relaxed text-[#344054] sm:text-base'>{step.content}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}