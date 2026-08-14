import Link from 'next/link'
import { Clock3, Mail, MapPin, Phone, Send, Upload } from 'lucide-react'

export default function ContactUs() {
  const inputStyle = 'min-h-12 w-full rounded-lg border border-[#077F7F]/20 bg-white px-4 text-[#153933] outline-none transition placeholder:text-neutral-400 hover:border-[#29B380] focus:border-[#077F7F] focus:ring-4 focus:ring-[#29B380]/15'

  return (
    <main className='bg-[#A7DDD2]/20'>
      <header className='bg-[#077F7F]/70 px-4 py-10 text-center sm:px-6 sm:py-12'>
        <h1 className='text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl'>
          Contact Us
        </h1>
        <p className='mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base'>
          Speak with our friendly team or send us a message for help with your waste collection.
        </p>
      </header>

      <div className='mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:px-8 lg:py-16'>
        <aside className='space-y-6'>
          <div className='rounded-2xl bg-[#153933] p-6 text-white shadow-lg sm:p-8'>
            <h2 className='text-2xl font-bold sm:text-3xl'>Customer Service Office</h2>
            <p className='mt-2 text-sm leading-relaxed text-white/70 sm:text-base'>
              Our team is ready to answer your questions and help arrange your collection.
            </p>

            <div className='mt-7 space-y-4'>
              <div className='group flex items-start gap-4 rounded-xl bg-white/5 p-4 transition duration-300 hover:translate-x-1 hover:bg-white/10'>
                <MapPin className='mt-0.5 size-6 shrink-0 text-[#29B380]' aria-hidden='true' />
                <address className='text-sm not-italic leading-relaxed text-white/85 sm:text-base'>
                  Nazeing Common,<br />Bumbles Green,<br />Nazeing,<br />EN9 2SH
                </address>
              </div>

              <Link href='tel:02082266477' className='group flex items-center gap-4 rounded-xl bg-white/5 p-4 transition duration-300 hover:translate-x-1 hover:bg-white/10'>
                <Phone className='size-6 shrink-0 text-[#29B380] transition-transform group-hover:rotate-12' aria-hidden='true' />
                <span className='font-semibold sm:text-lg'>020 8226 6477</span>
              </Link>

              <Link href='mailto:info@londonwasteservices.com' className='group flex items-center gap-4 rounded-xl bg-white/5 p-4 transition duration-300 hover:translate-x-1 hover:bg-white/10'>
                <Mail className='size-6 shrink-0 text-[#29B380]' aria-hidden='true' />
                <span className='min-w-0 break-all text-sm sm:text-base'>info@londonwasteservices.com</span>
              </Link>
            </div>
          </div>

          <div className='rounded-2xl border border-[#29B380]/20 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8'>
            <div className='flex items-center gap-3'>
              <Clock3 className='size-7 text-[#077F7F]' aria-hidden='true' />
              <h2 className='text-xl font-bold text-[#153933] sm:text-2xl'>Office Opening Hours</h2>
            </div>
            <dl className='mt-5 space-y-3 text-sm text-neutral-700 sm:text-base'>
              <div className='flex items-center justify-between gap-4 border-b border-[#077F7F]/10 pb-3'>
                <dt className='font-semibold text-[#153933]'>Monday – Friday</dt>
                <dd>7am – 5pm</dd>
              </div>
              <div className='flex items-center justify-between gap-4'>
                <dt className='font-semibold text-[#153933]'>Saturday</dt>
                <dd>9am – 1pm</dd>
              </div>
            </dl>
            <p className='mt-5 rounded-lg bg-[#A7DDD2]/30 px-4 py-3 text-sm font-semibold text-[#077F7F]'>Collections carried out 6 days a week</p>
          </div>
        </aside>

        <section className='self-start rounded-2xl border border-[#29B380]/20 bg-white p-5 shadow-lg sm:p-8'>
          <h2 className='text-2xl font-bold text-[#153933] sm:text-3xl'>Send us a message</h2>
          <p className='mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base'>Complete the form and our customer service team will get back to you.</p>

          <form className='mt-7 space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='sr-only' htmlFor='contact-name'>Name</label>
              <input className={inputStyle} id='contact-name' name='name' placeholder='Name' type='text' required />
              <label className='sr-only' htmlFor='contact-phone'>Phone</label>
              <input className={inputStyle} id='contact-phone' name='phone' placeholder='Phone' type='tel' required />
            </div>

            <div className='grid gap-4 sm:grid-cols-[1.5fr_1fr]'>
              <label className='sr-only' htmlFor='contact-email'>Email</label>
              <input className={inputStyle} id='contact-email' name='email' placeholder='Email' type='email' required />
              <label className='sr-only' htmlFor='contact-postcode'>Postcode</label>
              <input className={inputStyle} id='contact-postcode' name='postcode' placeholder='Postcode' type='text' />
            </div>

            <label className='sr-only' htmlFor='contact-interest'>Area of interest</label>
            <select className={inputStyle} id='contact-interest' name='interest' defaultValue='' required>
              <option value='' disabled>Area of interest</option>
              <option value='house-clearance'>House clearance</option>
              <option value='garden-clearance'>Garden clearance</option>
              <option value='commercial-waste'>Commercial waste</option>
              <option value='other'>Other</option>
            </select>

            <label className='sr-only' htmlFor='contact-question'>Ask us a question</label>
            <textarea className={`${inputStyle} min-h-36 resize-y py-3`} id='contact-question' name='question' placeholder='Ask us a question' rows='5' required />

            <label className='group relative flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-[#077F7F]/30 bg-[#A7DDD2]/15 px-4 text-center text-sm font-semibold text-[#077F7F] transition hover:border-[#29B380] hover:bg-[#A7DDD2]/30 focus-within:ring-4 focus-within:ring-[#29B380]/20 sm:text-base'>
              <Upload className='size-5 shrink-0 transition-transform group-hover:-translate-y-1' aria-hidden='true' />
              <span>Drop files here or <span className='underline'>select files</span></span>
              <input className='absolute inset-0 cursor-pointer opacity-0' name='attachments' type='file' multiple />
            </label>

            <label className='flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-neutral-700 sm:items-center'>
              <input className='mt-1 size-4 shrink-0 accent-[#29B380] sm:mt-0' name='privacy-policy' type='checkbox' required />
              <span>By ticking this box you accept our <Link className='font-semibold text-[#077F7F] hover:underline' href='/privacy-policy'>Privacy Policy</Link> <span className='text-red-600'>*</span></span>
            </label>

            <button className='group flex min-h-13 w-full items-center justify-center gap-2 rounded-lg bg-[#29B380] px-6 text-lg font-bold text-[#153933] transition duration-300 hover:-translate-y-1 hover:bg-[#077F7F] hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#29B380]/30' type='submit'>
              Send Message
              <Send className='size-5 transition-transform group-hover:translate-x-1' aria-hidden='true' />
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
