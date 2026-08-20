'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '../buttons/ScrollToTop'

export default function SiteChrome({ children }) {
  const pathname = usePathname()
  const isAdminRoute = pathname === '/admin' || pathname.startsWith('/admin/')

  if (isAdminRoute) {
    return children
  }

  return (
    <>
      <Header />
      <ScrollToTop/>
      {children}
      <Footer />
    </>
  )
}
