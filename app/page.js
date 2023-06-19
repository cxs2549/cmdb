"use client"
import { useContext } from "react"
import Slideshow from "./components/slideshow/slideshow"
import Featured from "./components/featured/featured"
import { StateContext } from "@/app/context/state"

const Homepage = () => {
  const { added, setAdded } = useContext(StateContext)

  return (
    <main className="relative z-0 mx-auto max-w-7xl h-fit">
      <Slideshow added={added} setAdded={setAdded} />
      <Featured />
    </main>
  )
}

export default Homepage
