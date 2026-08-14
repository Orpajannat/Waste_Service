import { CirclePlus, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const questions = [
    {
      question: 'How does the rubbish removal service work?',
      answers: ['We supply uniformed, ID and DBS checked labour and take the rubbish away almost anywhere in your home, business or outside of your property.'],
    },
    {
      question: 'Where should I put the rubbish?',
      answers: ['You can put the waste almost anywhere as long as it is safe for our team to access.'],
    },
    {
      question: 'Who does all the loading?',
      answers: [
        "We do, our experienced waste collection team will load all waste as long the item is safe and we can access the rubbish and our tipper trucks. If the waste is a long way from the road or we can’t park close, you may find there is an extra charge for the additional labour time. We will confirm on the day.",
      ],
    },
    {
      question: 'What if there is more waste than you expected?',
      answers: [
        'We understand it sometimes is difficult to workout how much you have, our teams are more than happy to take more or less on the day. The team will confirm the size of the job at the start - the cost of the clearance estimated on our website will then apply.',
        'Sometimes it is more than you thought and we will quote to clear the whole lot. If there is less than you thought, no problem we will also reduce the cost down appropriately to handle less waste.',
      ],
    },
    {
      question: 'Weight Limits',
      answers: [
        'Each cubic yard (0.83 cubic metre) comes with a 100kg weight limit. Our team will supply you with an educated quote in advance and the weight will be estimated in bands before the collection commences. All our trucks have built in weight measures to ensure we are compliant. We record the levels before and after your clearance to ensure we are within legal limits and to ascertain if there are any additional costs to your waste or rubbish removal.',
      ],
    },
    {
      question: 'Extra Heavy Items',
      answers: [
        'For really heavy stuff like bricks, concrete, soil, sand, tiles etc. we may have to pass-on the additional cost from the waste transfer site to you. You’ll appreciate that a bag of rubble weighs much more than a bag of domestic rubbish so the more accurate you can be with photos and description, the more accurate the pricing will be for you.',
      ],
    },
    {
      question: 'Time Allowance for Collections',
      answers: [
        'Our prices show the time allowed for the collections. In some cases your collection may take longer than this, for instance if the waste is difficult to access or there are safety concerns to address. If this is the case, we will add a supplementary charge of £15 for every 15 minutes additional time (inc. VAT).',
      ],
    },
  ]

  const surcharges = [
    'Domestic Fridge/Freezer: £45',
    'Gas Bottle: £15',
    'Television: £15',
    'Commercial Fridge/Freezer: From £95',
    'Paint Tin: £2',
    'Car Tyre: £8',
    'Mattress: £25',
    'Microwave: £15',
    'Car Battery: £15',
  ]

  return (
    <main className='bg-[#A7DDD2]/20'>
      <header className='bg-[#077F7F]/70 px-4 py-10 text-center sm:px-6 sm:py-12'>
        <div className='mx-auto flex max-w-6xl items-center justify-center gap-3'>
          <HelpCircle className='hidden size-10 text-[#A7DDD2] sm:block' aria-hidden='true' />
          <h1 className='text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl'>
            Frequently Asked Questions
          </h1>
        </div>
      </header>

      <div className='mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14'>
        <div className='space-y-4'>
          {questions.map(({ question, answers }) => (
            <article key={question} className='group rounded-xl border border-[#29B380]/15 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#29B380]/45 hover:shadow-[0_12px_30px_rgba(7,127,127,0.12)] sm:p-6'>
              <h2 className='text-lg font-bold text-[#153933] transition-colors group-hover:text-[#077F7F] sm:text-xl'>
                {question}
              </h2>
              <div className='mt-2 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base'>
                {answers.map((answer) => <p key={answer}>{answer}</p>)}
              </div>
            </article>
          ))}
        </div>

        <section className='mt-4 rounded-xl border border-[#29B380]/15 bg-white p-5 transition duration-300 hover:border-[#29B380]/45 hover:shadow-[0_12px_30px_rgba(7,127,127,0.12)] sm:p-6'>
          <h2 className='text-lg font-bold text-[#153933] sm:text-xl'>Surcharges for some items</h2>
          <p className='mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base'>
            To cover the fees levied by waste transfer sites, the following items may carry an additional charge:
          </p>
          <div className='mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {surcharges.map((item) => (
              <div key={item} className='group/item flex min-h-12 items-center gap-3 rounded-lg bg-[#A7DDD2]/30 px-4 py-3 text-sm text-[#153933] transition duration-300 hover:bg-[#29B380] hover:shadow-md sm:text-base'>
                <CirclePlus className='size-5 shrink-0 text-[#077F7F] transition-transform duration-300 group-hover/item:rotate-90' aria-hidden='true' />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className='mt-4 rounded-xl border border-[#29B380]/15 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#29B380]/45 hover:shadow-[0_12px_30px_rgba(7,127,127,0.12)] sm:p-6'>
          <h2 className='text-lg font-bold text-[#153933] sm:text-xl'>What waste or rubbish cannot be collected?</h2>
          <div className='mt-2 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base'>
            <p>We can&apos;t remove raw meat or fish, paints, solvents, chemicals, oil, petrol, diesel, gas bottles or fire extinguishers.</p>
            <p>We also can&apos;t work at heights, so the waste will need to be safely accessible.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
