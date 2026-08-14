import GardenClearanceService from '@/components/gradenClearance/GardenClearanceService'
import GardenHero from '@/components/gradenClearance/GardenHero'
import GetPrices from '@/components/houseClearance/GetPrices'
import ServiceHighlights from '@/components/houseClearance/ServiceHighlights'
import WhyChooseUs from '@/components/houseClearance/WhyChooseUs'
import GardenRubbishItems from '@/components/gardenClearance/GardenRubbishItems'
import React from 'react'
import QuoteForm from '@/components/home/QuoteForm'

export default function page () {
  return (
    <div>
        <GardenHero/>
        <GetPrices/>
        <GardenClearanceService/>
        <WhyChooseUs/>
        <ServiceHighlights/>
        <GardenRubbishItems/>
        <QuoteForm/>
    </div>
  )
}
