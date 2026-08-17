import HedgeCuttingHero from '@/components/hedgeCutting/HedgeCuttingHero'
import HedgeCuttingServices from '@/components/hedgeCutting/HedgeCuttingServices'
import HedgeCuttingDetails from '@/components/hedgeCutting/HedgeCuttingDetails'
import GardenServiceCards from '@/components/lawnMowing/GardenServiceCards'
import QuoteForm from '@/components/home/QuoteForm'

export default function HedgeCuttingPage () {
  return (
    <main>
      <HedgeCuttingHero/>
      <HedgeCuttingServices/>
      <HedgeCuttingDetails/>
      <GardenServiceCards/>
      <QuoteForm/>
    </main>
  )
}
