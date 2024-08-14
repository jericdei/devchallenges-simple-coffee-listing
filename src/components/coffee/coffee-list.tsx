import { useState, useEffect } from "react"
import { type Coffee } from "./types"
import CoffeeGrid from "./coffee-grid"
import CoffeeFilters, { CoffeeFilterValue } from "./coffee-filters"

export default function CoffeeList() {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json",
        )

        const data = await res.json()

        setCoffees(data)
        setFilteredCoffees(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const handleFilter = (filter: CoffeeFilterValue) => {
    if (filter === "available") {
      setFilteredCoffees(coffees.filter((coffee) => coffee.available))
    } else {
      setFilteredCoffees(coffees)
    }
  }

  return (
    <div className="mb-12 flex flex-col gap-12">
      <CoffeeFilters onFilter={handleFilter} />
      <CoffeeGrid coffees={filteredCoffees} />
    </div>
  )
}
