import { useState } from "react"
import FilterItem from "../ui/filter-item"

const filterItems = [
  {
    label: "All Products",
    value: "all",
  },
  {
    label: "Available Now",
    value: "available",
  },
] as const

export type CoffeeFilterValue = (typeof filterItems)[number]["value"]

interface CoffeeFiltersProps {
  onFilter: (filter: CoffeeFilterValue) => void
}

export default function CoffeeFilters({ onFilter }: CoffeeFiltersProps) {
  const [selectedFilter, setSelectedFilter] = useState<CoffeeFilterValue>("all")

  const handleFilterItemClick = (clickedFilter: CoffeeFilterValue) => {
    setSelectedFilter(clickedFilter)
    onFilter(clickedFilter)
  }

  return (
    <div className="flex justify-center gap-4">
      {filterItems.map((filter) => (
        <FilterItem
          key={filter.value}
          selected={selectedFilter === filter.value}
          onClick={() => handleFilterItemClick(filter.value)}
        >
          {filter.label}
        </FilterItem>
      ))}
    </div>
  )
}
