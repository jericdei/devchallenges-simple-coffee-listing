import { cn } from "../../utils"

interface FilterItemProps {
  children?: React.ReactNode
  selected?: boolean
  onClick?: () => void
}

export default function FilterItem({
  children,
  selected,
  onClick,
}: FilterItemProps) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-lg px-4 py-2 font-semibold transition-all duration-200 ease-in-out",
        selected && "bg-primary-light",
        "hover:bg-primary-light/50",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
