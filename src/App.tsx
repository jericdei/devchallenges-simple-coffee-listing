import CoffeeList from "./components/coffee/coffee-list"
import Heading from "./components/heading"

function App() {
  return (
    <main className="relative grid min-h-screen place-items-center">
      <div className="absolute inset-0 h-80 bg-[url('/bg-cafe.jpg')] bg-cover bg-center"></div>

      <section className="z-10 my-36 flex w-2/3 flex-col items-center gap-8 rounded-xl bg-primary py-8 text-center lg:w-3/4 xl:w-5/6">
        <Heading />
        <CoffeeList />
      </section>
    </main>
  )
}

export default App
