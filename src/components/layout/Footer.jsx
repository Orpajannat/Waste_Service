import Link from 'next/link'
import {
  ArrowUpRight,
  Camera,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Recycle,
} from 'lucide-react'
import Image from 'next/image'

const services = [
  'House Clearance',
  'Garden Clearance',
  'Furniture Removal',
  'Commercial Waste',
]

const companyLinks = ['Areas Covered', 'Prices & Book', 'FAQ', 'Contact Us']

export default function Footer() {
  return (
    <footer className='bg-[#062f2b] text-white'>
      <div className='container mx-auto grid gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.35fr] lg:px-8 lg:py-16'>
        <div>
          <Link href='/' className='inline-flex items-center gap-3' aria-label='Waste Services home'>
            <Image src="/images/footerLogo.png" alt="Logo" width={150} height={50}/>
          </Link>
          <p className='mt-5 max-w-xs text-sm leading-6 text-white/70'>
            Reliable rubbish collection for homes and businesses across the Home Counties.
          </p>
          <div className='mt-6 flex gap-3'>
            <a href='#' aria-label='Facebook' className='rounded-full border border-white/20 p-2.5 transition hover:border-[#29B380] hover:bg-[#29B380]'>
              <MessageCircle aria-hidden='true' size={18} />
            </a>
            <a href='#' aria-label='Instagram' className='rounded-full border border-white/20 p-2.5 transition hover:border-[#29B380] hover:bg-[#29B380]'>
              <Camera aria-hidden='true' size={18} />
            </a>
          </div>
        </div>

        <FooterLinks title='Our services' links={services} />
        <FooterLinks title='Quick links' links={companyLinks} />

        <div>
          <h2 className='text-sm font-bold uppercase tracking-[0.18em] text-[#7ee0bb]'>Get in touch</h2>
          <div className='mt-5 space-y-4 text-sm text-white/75'>
            <a href='tel:02082266477' className='flex items-center gap-3 transition hover:text-white'>
              <Phone aria-hidden='true' className='shrink-0 text-[#29B380]' size={19} />
              020 8226 6477
            </a>
            <a href='mailto:info@wasteservices.com' className='flex items-center gap-3 transition hover:text-white'>
              <Mail aria-hidden='true' className='shrink-0 text-[#29B380]' size={19} />
              info@wasteservices.com
            </a>
            <p className='flex items-start gap-3'>
              <MapPin aria-hidden='true' className='mt-0.5 shrink-0 text-[#29B380]' size={19} />
              Serving the Home Counties
            </p>
            <p className='flex items-start gap-3'>
              <Clock3 aria-hidden='true' className='mt-0.5 shrink-0 text-[#29B380]' size={19} />
              Mon–Sat, 7:00am–7:00pm
            </p>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10 bg-[#042723]'>
        <div className='container mx-auto flex flex-col gap-3 px-4 py-5 text-xs text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8'>
          <p>© {new Date().getFullYear()} Waste Services. All rights reserved.</p>
          <div className='flex gap-5'>
            <a href='#' className='transition hover:text-white'>Privacy Policy</a>
            <a href='#' className='transition hover:text-white'>Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h2 className='text-sm font-bold uppercase tracking-[0.18em] text-[#7ee0bb]'>{title}</h2>
      <ul className='mt-5 space-y-3 text-sm text-white/70'>
        {links.map((link) => (
          <li key={link}>
            <a href='#' className='group inline-flex items-center gap-2 transition hover:text-white'>
              <ArrowUpRight aria-hidden='true' size={15} className='text-[#29B380] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
