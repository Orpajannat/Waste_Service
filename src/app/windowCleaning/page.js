import QuoteForm from '@/components/home/QuoteForm'
import Window from '@/components/windowCleaning/Window'
import WindowCleaning from '@/components/windowCleaning/WindowCleaning'
import WindowCleaningDetails from '@/components/windowCleaning/WindowCleaningDetails'
import WindowServiceCards from '@/components/windowCleaning/WindowServiceCards'

export default function WindowCleaningPage () {
  return (
    <main>
        <Window/>
        <WindowCleaning/>
        <WindowCleaningDetails/>
        <WindowServiceCards/>
        <QuoteForm/>
    </main>
  )
}
