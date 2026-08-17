import CommunalAreaDetails from '@/components/communalAreaCleaning/CommunalAreaDetails'
import CommunalAreaHero from '@/components/communalAreaCleaning/CommunalAreaHero'
import CommunalAreaService from '@/components/communalAreaCleaning/CommunalAreaService'
import QuoteForm from '@/components/home/QuoteForm'
import WindowServiceCards from '@/components/windowCleaning/WindowServiceCards'
import React from 'react'

export default function page () {
  return (
    <div>
        <CommunalAreaHero/>
        <CommunalAreaService/>
        <CommunalAreaDetails/>
        <WindowServiceCards/>
        <QuoteForm/>
    </div>
  )
}
