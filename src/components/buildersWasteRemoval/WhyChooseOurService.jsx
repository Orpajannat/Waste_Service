import Link from 'next/link'
import { Building2, Check, FerrisWheel, Landmark } from 'lucide-react'

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
    <section className='relative overflow-hidden bg-[#B9DCF5]/25'>
      <div aria-hidden='true' className='pointer-events-none absolute -bottom-6 -right-6 hidden items-end gap-1 text-[#11224D]/10 lg:flex'>
        <Landmark className='h-24 w-24' strokeWidth={1} />
        <Building2 className='h-36 w-24' strokeWidth={1} />
        <FerrisWheel className='h-24 w-24' strokeWidth={1} />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl'>
          Why choose London Waste Services Ltd for Builders Waste Removal?
        </h2>

        <ul className='mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3'>
          {reasons.map((reason) => (
            <li key={reason} className='group flex items-start gap-3 rounded-lg px-2 py-2.5 text-sm text-[#344054] transition duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:text-base'>
              <Check aria-hidden='true' className='mt-0.5 size-5 shrink-0 text-[#1A68A3] transition-transform duration-300 motion-safe:group-hover:scale-125' strokeWidth={4} />
              <span className='leading-relaxed'>{reason}</span>
            </li>
          ))}
        </ul>

        <p className='mt-2 text-sm text-[#344054] sm:text-base'>
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
