import GarageHero from '@/components/garageClearance/GarageHero'
import QuoteForm from '@/components/home/QuoteForm'
import RubbishService from '@/components/home/RubbishService'
import GetPrices from '@/components/houseClearance/GetPrices'
import HouseRubbishItems from '@/components/houseClearance/HouseRubbishItems'
import ServiceHighlights from '@/components/houseClearance/ServiceHighlights'
import WhyChooseUs from '@/components/houseClearance/WhyChooseUs'
import React from 'react'

export default function page () {
  return (
    <div>
        <GarageHero/>
        <GetPrices/>
        <WhyChooseUs/>
        <ServiceHighlights/>
        <RubbishService/>
        <HouseRubbishItems/>
        <QuoteForm/>
    </div>
  )
}
