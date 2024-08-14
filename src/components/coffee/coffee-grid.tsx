import CoffeeCard from "./coffee-card"
import { type Coffee } from "./types"

interface CoffeeGridProps {
  coffees: Coffee[]
}

export default function CoffeeGrid({ coffees }: CoffeeGridProps) {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  )
}
