'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BadgeCheck, CreditCard, Info, LockKeyhole, ShieldCheck, Tag } from 'lucide-react'
import { useCart } from '../cart/CartContext'

const inputClass = 'mt-2 min-h-12 w-full rounded-xl border border-sky-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100'

function Field({ label, name, type = 'text', placeholder, required = false, autoComplete, className = '' }) {
  return <label className={className}><span className='text-sm font-bold text-slate-700'>{label}{required && <span className='text-rose-500'> *</span>}</span><input className={inputClass} name={name} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete} /></label>
}

function AddressFields({ prefix = 'billing' }) {
  return <div className='grid gap-4 sm:grid-cols-2'>
    <Field label='Street address' name={`${prefix}Address`} placeholder='House number and street name' required autoComplete='street-address' className='sm:col-span-2' />
    <Field label='Apartment, suite or unit' name={`${prefix}AddressTwo`} placeholder='Optional' className='sm:col-span-2' />
    <Field label='Town / City' name={`${prefix}City`} required autoComplete='address-level2' />
    <Field label='State / County' name={`${prefix}County`} placeholder='Optional' autoComplete='address-level1' />
    <Field label='Postcode / ZIP' name={`${prefix}Postcode`} required autoComplete='postal-code' />
    <label><span className='text-sm font-bold text-slate-700'>Country / Region</span><select name={`${prefix}Country`} defaultValue='United Kingdom' className={inputClass}><option>United Kingdom</option><option>Ireland</option></select></label>
  </div>
}

export default function Payment() {
  const { items, ready, count, total } = useCart()
  const [showVoucher, setShowVoucher] = useState(false)
  const [differentAddress, setDifferentAddress] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Your details are complete. Secure payment processing can now be connected to this form.')
  }

  if (!ready) return <div className='min-h-[60vh] bg-sky-50' />

  return <main className='min-h-screen bg-linear-to-b from-sky-50 via-white to-sky-50 px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32'>
    <div className='mx-auto max-w-7xl'>
      <Link href='/checkout' className='inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-sky-600'><ArrowLeft className='size-4' />Back to order review</Link>
      <div className='mt-6 rounded-3xl border border-sky-100 bg-white shadow-xl shadow-sky-100/60'>
        <header className='rounded-t-3xl border-b border-sky-200 bg-sky-100 px-5 py-7 text-center sm:px-8'>
          <p className='text-xs font-black uppercase tracking-[.2em] text-sky-600'>Secure payment</p>
          <h1 className='mt-2 text-3xl font-black text-slate-800 sm:text-4xl'>Complete your order</h1>
          <p className='mx-auto mt-2 max-w-2xl text-sm text-slate-600'>Enter your billing information and review your collection before placing the order.</p>
        </header>

        {items.length === 0 ? <div className='grid min-h-80 place-items-center p-8 text-center'><div><h2 className='text-2xl font-black text-slate-800'>Your basket is empty</h2><p className='mt-2 text-slate-500'>Add a collection before continuing to payment.</p><Link href='/#prices' className='mt-5 inline-flex rounded-full bg-sky-500 px-6 py-3 font-bold text-[#102a4c]'>Choose a collection</Link></div></div> :
        <form onSubmit={handleSubmit} className='p-4 sm:p-7 lg:p-9'>
          <section className='rounded-2xl border border-sky-200 bg-sky-50 p-4 sm:p-5'>
            <button type='button' onClick={() => setShowVoucher((value) => !value)} aria-expanded={showVoucher} className='flex w-full items-center gap-3 text-left text-sm font-bold text-slate-700'><span className='grid size-9 place-items-center rounded-full bg-white text-sky-600'><Tag className='size-4' /></span><span className='flex-1'>Have a voucher? <span className='font-medium text-sky-600'>Enter your code</span></span></button>
            {showVoucher && <div className='mt-4 flex flex-col gap-2 sm:flex-row'><input name='voucher' placeholder='Voucher code' className={`${inputClass} mt-0 flex-1`} /><button type='button' className='min-h-12 rounded-xl bg-sky-500 px-6 text-sm font-black text-[#102a4c] transition hover:bg-sky-600'>Apply voucher</button></div>}
          </section>

          <button type='button' className='mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 text-sm font-black text-[#102a4c] transition hover:bg-emerald-600'><LockKeyhole className='size-4' />Fast, secure checkout</button>
          <div className='my-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[.16em] text-slate-400'><span className='h-px flex-1 bg-sky-100' />or pay by card<span className='h-px flex-1 bg-sky-100' /></div>

          <div className='grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,.65fr)] lg:items-start'>
            <div className='space-y-8'>
              <section>
                <div className='mb-5 flex items-center gap-3'><span className='grid size-10 place-items-center rounded-xl bg-sky-100 text-sky-600'><Info className='size-5' /></span><div><h2 className='text-xl font-black text-slate-800'>Billing details</h2><p className='text-xs text-slate-500'>Fields marked with * are required.</p></div></div>
                <div className='grid gap-4 sm:grid-cols-2'>
                  <Field label='First name' name='firstName' required autoComplete='given-name' />
                  <Field label='Last name' name='lastName' required autoComplete='family-name' />
                  <Field label='Company name' name='company' placeholder='Optional' autoComplete='organization' className='sm:col-span-2' />
                  <div className='sm:col-span-2'><AddressFields /></div>
                  <Field label='Phone' name='phone' type='tel' required autoComplete='tel' />
                  <Field label='Mobile phone' name='mobile' type='tel' required autoComplete='tel-national' />
                  <Field label='Email address' name='email' type='email' required autoComplete='email' className='sm:col-span-2' />
                </div>
              </section>

              <section className='rounded-2xl border border-sky-200 bg-sky-50 p-4 sm:p-5'>
                <label className='flex cursor-pointer items-center gap-3 font-bold text-slate-800'><input type='checkbox' checked={differentAddress} onChange={(event) => setDifferentAddress(event.target.checked)} className='size-5 accent-sky-500' />Waste is located at a different address</label>
                {differentAddress && <div className='mt-5 border-t border-sky-200 pt-5'><h3 className='mb-4 font-black text-slate-800'>Collection address</h3><AddressFields prefix='collection' /></div>}
              </section>

              <section>
                <div className='mb-5 flex items-center gap-3'><span className='grid size-10 place-items-center rounded-xl bg-sky-100 text-sky-600'><CreditCard className='size-5' /></span><div><h2 className='text-xl font-black text-slate-800'>Payment details</h2><p className='text-xs text-slate-500'>Use the card details associated with your billing address.</p></div></div>
                <div className='rounded-2xl border border-sky-200 bg-sky-50 p-4 sm:p-5'>
                  <Field label='Card number' name='cardNumber' placeholder='1234 1234 1234 1234' required autoComplete='cc-number' />
                  <div className='mt-4 grid gap-4 sm:grid-cols-2'><Field label='Expiry date' name='expiry' placeholder='MM / YY' required autoComplete='cc-exp' /><Field label='Security code' name='securityCode' placeholder='CVC' required autoComplete='cc-csc' /></div>
                  <p className='mt-4 flex items-center gap-2 text-xs text-slate-500'><LockKeyhole className='size-3.5 text-emerald-500' />Your payment details are protected during checkout.</p>
                </div>
              </section>
            </div>

            <aside className='rounded-2xl border border-sky-200 bg-white p-5 shadow-lg shadow-sky-100/70 lg:sticky lg:top-28'>
              <h2 className='text-xl font-black text-slate-800'>Your order</h2>
              <div className='mt-4 max-h-72 space-y-4 overflow-auto border-y border-sky-100 py-4'>{items.map((item) => <div key={item.id} className='flex gap-3 text-sm'><span className='grid size-8 shrink-0 place-items-center rounded-full bg-sky-100 text-xs font-black text-sky-700'>{item.quantity}</span><div className='min-w-0 flex-1'><p className='font-bold text-slate-700'>{item.name}</p><p className='mt-0.5 truncate text-xs text-slate-400'>{item.detail}</p></div><span className='font-black text-slate-700'>£{(item.unitPrice * item.quantity).toFixed(2)}</span></div>)}</div>
              <div className='space-y-3 py-5 text-sm'><div className='flex justify-between text-slate-500'><span>Items</span><span>{count}</span></div><div className='flex justify-between text-slate-500'><span>VAT</span><span>Included</span></div><div className='flex items-end justify-between border-t border-sky-100 pt-4'><span className='font-black text-slate-800'>Total</span><span className='text-3xl font-black text-sky-600'>£{total.toFixed(2)}</span></div></div>
              <label id='terms' className='flex cursor-pointer items-start gap-3 rounded-xl bg-sky-50 p-3 text-xs leading-relaxed text-slate-600'><input type='checkbox' name='terms' required className='mt-0.5 size-4 shrink-0 accent-sky-500' /><span>I have read and agree to the <Link href='#terms' className='font-bold text-sky-600 underline'>terms and conditions</Link> and acknowledge the privacy policy.</span></label>
              <button type='submit' className='mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 text-sm font-black uppercase tracking-wide text-[#102a4c] shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-600'><ShieldCheck className='size-5' />Place order</button>
              <p aria-live='polite' className='mt-3 text-center text-xs font-semibold text-emerald-600'>{message}</p>
              <div className='mt-4 flex items-center justify-center gap-2 text-xs text-slate-400'><BadgeCheck className='size-4 text-emerald-500' />Secure order confirmation</div>
            </aside>
          </div>
        </form>}
      </div>
    </div>
  </main>
}