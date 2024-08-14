import { FC } from "react"
import Star from "../svg/star"
import StarFilled from "../svg/star-filled"
import { type Coffee } from "./types"

interface CoffeeCardProps {
  coffee: Coffee
}

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        {coffee.popular && (
          <span className="absolute left-2 top-2 rounded-xl bg-accent-yellow px-3 py-1 text-[0.625rem] font-semibold text-primary">
            Popular
          </span>
        )}
        <img className="rounded-xl" src={coffee.image} alt={coffee.name} />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p>{coffee.name}</p>

          <span className="rounded-md bg-accent-green px-2 py-1 text-xs font-semibold text-primary">
            {coffee.price}
          </span>
        </div>

        <CoffeeCardMetaData coffee={coffee} />
      </div>
    </div>
  )
}

const CoffeeCardMetaData: FC<{ coffee: Coffee }> = ({ coffee }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-1 font-semibold">
      {coffee.rating ? (
        <>
          <StarFilled />{" "}
          <span>
            {Number.isInteger(coffee.rating)
              ? coffee.rating.toFixed(1)
              : coffee.rating}
          </span>
        </>
      ) : (
        <Star />
      )}
      <span className="text-primary-light">
        <span>{coffee.votes ? `(${coffee.votes} votes)` : "No ratings"}</span>
      </span>
    </div>

    {!coffee.available && <p className="text-accent-orange">Sold out</p>}
  </div>
)
