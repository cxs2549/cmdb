"use client"
import { menuObject } from "@/app/data"
import Left from "./left/left"
import Right from "./right/right"
import { StateContext } from "@/app/context/state"
import { useContext } from "react"

const styles = {
  header: `w-full py-2 bg-dark relative`,
  nav: `relative flex items-center h-full w-full mx-auto max-w-7xl gap-3  md:gap-6 justify-between z-[5000]`,
}

export default function Header() {
  const { added, setAdded } = useContext(StateContext)

  return (
    <header className={styles.header} added={added}>
      <nav className={styles.nav}>
        <Left content={menuObject} />
        <Right added={added} setAdded={setAdded} />
      </nav>
    </header>
  )
}
