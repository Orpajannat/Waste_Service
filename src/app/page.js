import Benefits from "@/components/home/Benefits";
import Order from "@/components/home/Order";
import RubbishClearance from "@/components/home/RubbishClearance";
import RubbishRemoval from "@/components/home/RubbishRemoval";
import RubbishService from "@/components/home/RubbishService";
import QuoteForm from "@/components/home/QuoteForm";
import SecondaryNav from "@/components/layout/SecondaryNav";

export default function Home() {
  return (
    <div>
      <main>
        <SecondaryNav/>
        <Order/>
        <RubbishRemoval/>
        <RubbishClearance/>
        <RubbishService/>
        <Benefits/>
        <QuoteForm/>
      </main>
    </div>
  );
}
