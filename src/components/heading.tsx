import Vector from "./svg/vector"

export default function Heading() {
  return (
    <div className="relative mt-12 space-y-4 overflow-x-clip px-12">
      <Vector className="absolute -right-16 -top-5 -z-10 lg:right-32 xl:right-16" />

      <h1 className="text-[2rem] font-semibold">Our Collection</h1>

      <p className="max-w-lg font-semibold text-primary-light">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
    </div>
  )
}
