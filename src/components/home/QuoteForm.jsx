import { Building2, Factory, FerrisWheel, Upload } from 'lucide-react'

export default function QuoteForm() {
  return (
    <section id="form" className='relative overflow-hidden bg-linear-to-b from-[#1A68A3] to-[#4E75B1]'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute bottom-0 right-0 hidden items-end gap-1 text-white/10 lg:flex'
      >
        <Building2 className='h-24 w-24' strokeWidth={1.2} />
        <Factory className='h-32 w-32' strokeWidth={1.2} />
        <FerrisWheel className='h-28 w-28' strokeWidth={1.2} />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-bold text-white sm:text-3xl lg:text-4xl'>
          Request a Rubbish Removal Quote
        </h2>

        <form className='mt-7 space-y-4 sm:mt-8'>
          <div className='grid gap-4 md:grid-cols-3'>
            <label className='sr-only' htmlFor='quote-name'>Name</label>
            <input
              className='min-h-12 w-full rounded-md border border-white/30 bg-white px-4 text-[#11224D] outline-none transition placeholder:text-neutral-500 focus:border-[#1A68A3] focus:ring-4 focus:ring-[#1A68A3]/25'
              id='quote-name'
              name='name'
              placeholder='Name'
              type='text'
              required
            />

            <label className='sr-only' htmlFor='quote-phone'>Phone</label>
            <input
              className='min-h-12 w-full rounded-md border border-white/30 bg-white px-4 text-[#11224D] outline-none transition placeholder:text-neutral-500 focus:border-[#1A68A3] focus:ring-4 focus:ring-[#1A68A3]/25'
              id='quote-phone'
              name='phone'
              placeholder='Phone'
              type='tel'
              required
            />

            <label className='sr-only' htmlFor='quote-email'>Email</label>
            <input
              className='min-h-12 w-full rounded-md border border-white/30 bg-white px-4 text-[#11224D] outline-none transition placeholder:text-neutral-500 focus:border-[#1A68A3] focus:ring-4 focus:ring-[#1A68A3]/25'
              id='quote-email'
              name='email'
              placeholder='Email'
              type='email'
              required
            />
          </div>

          <div className='grid gap-4 md:grid-cols-3'>
            <label className='sr-only' htmlFor='quote-postcode'>Postcode</label>
            <input
              className='min-h-12 w-full rounded-md border border-white/30 bg-white px-4 text-[#11224D] outline-none transition placeholder:text-neutral-500 focus:border-[#1A68A3] focus:ring-4 focus:ring-[#1A68A3]/25'
              id='quote-postcode'
              name='postcode'
              placeholder='Postcode'
              type='text'
              required
            />

            <label className='group relative flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-white/70 px-4 text-center text-sm font-semibold text-white transition hover:border-[#B9DCF5] hover:bg-white/10 focus-within:ring-4 focus-within:ring-white/20 md:col-span-2 sm:text-base'>
              <Upload className='size-5 shrink-0' aria-hidden='true' />
              <span>Drop files here or <span className='underline'>select files</span></span>
              <input className='absolute inset-0 cursor-pointer opacity-0' name='photos' type='file' multiple />
            </label>
          </div>

          <label className='sr-only' htmlFor='quote-question'>Ask us a question</label>
          <textarea
            className='min-h-32 w-full resize-y rounded-md border border-white/30 bg-white p-4 text-[#11224D] outline-none transition placeholder:text-neutral-500 focus:border-[#1A68A3] focus:ring-4 focus:ring-[#1A68A3]/25'
            id='quote-question'
            name='question'
            placeholder='Ask us a question'
            rows='5'
          />

          <label className='mx-auto flex max-w-max cursor-pointer items-start gap-3 py-2 text-sm leading-6 text-white sm:items-center sm:text-base'>
            <input
              className='mt-1 size-4 shrink-0 accent-[#1A68A3] sm:mt-0'
              name='privacy-policy'
              type='checkbox'
              required
            />
            <span>
              By ticking this box you accept our{' '}
              <a className='font-semibold text-[#B9DCF5] underline underline-offset-2 hover:text-white' href='/privacy-policy'>
                Privacy Policy
              </a>
              <span className='text-red-300'> *</span>
            </span>
          </label>

          <button
            className='min-h-12 w-full rounded-md bg-[#11224D] px-6 text-lg font-bold text-[#eceff5] transition hover:bg-[#eceff5] hover:text-[#11224D] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 active:scale-[0.99] sm:text-xl'
            type='submit'
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  )
}
