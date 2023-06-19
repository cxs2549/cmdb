import { Squash as Hamburger } from "hamburger-react"
import { Menu } from "@headlessui/react"

const MenuButton = ({ open, styles }) => (
  <Menu.Button
    className={` ${styles.menuButton} ${
      open ? "text-white/100" : "text-neutral-700 brightness-150"
    }`}
  >
    <Hamburger
      toggled={open}
      size={20}
      easing="ease-in"
      rounded
      label="Show menu"
      duration={0.15}
    />
  </Menu.Button>
)

export default MenuButton
