import QuoteForm from '@/components/home/QuoteForm'
import RubbishService from '@/components/home/RubbishService'
import GetPrices from '@/components/houseClearance/GetPrices'
import HouseRubbishItems from '@/components/houseClearance/HouseRubbishItems'
import ServiceHighlights from '@/components/houseClearance/ServiceHighlights'
import WhyChooseUs from '@/components/houseClearance/WhyChooseUs'
import OfficeHero from '@/components/officeWasteClearance/OfficeHero'
import OfficeWasteServices from '@/components/officeWasteClearance/OfficeWasteServices'
import React from 'react'

export default function page () {
  return (
    <div>
        <OfficeHero/>
        <GetPrices/>
        <RubbishService/>
        <OfficeWasteServices/>
        <WhyChooseUs/>
        <ServiceHighlights/>
        <HouseRubbishItems/>
        <QuoteForm/>
    </div>
  )
}
