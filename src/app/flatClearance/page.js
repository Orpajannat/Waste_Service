import FlatClearanceIntro from '@/components/flatClearance/FlatClearanceIntro'
import FlatHero from '@/components/flatClearance/FlatHero'
import GarageRubbishClearance from '@/components/flatClearance/GarageRubbishClearance'
import FlyTippedRubbishRemoval from '@/components/flyTippingClearance/FlyTippedRubbishRemoval'
import RubbishService from '@/components/home/RubbishService'
import GetPrices from '@/components/houseClearance/GetPrices'
import ServiceHighlights from '@/components/houseClearance/ServiceHighlights'
import WhyChooseUs from '@/components/houseClearance/WhyChooseUs'
import React from 'react'

export default function page () {
  return (
    <div>
        <FlatHero/>
        <GarageRubbishClearance/>
        <GetPrices/>
        <FlatClearanceIntro/>
        <WhyChooseUs/>
        <ServiceHighlights/>
        <RubbishService/>
        <FlyTippedRubbishRemoval/>
    </div>
  )
}
