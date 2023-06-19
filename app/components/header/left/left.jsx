import { Menu } from "@headlessui/react"
import MenuButton from "./menu-button/menu-button"
import MobileMenu from "./mobile-menu/mobile-menu"
import Logo from "./logo/logo"
import Searchbar from "./searchbar/searchbar"

const styles = {
  base: "flex items-center h-full gap-2 flex-1  max-w-[75%] h-full",
  menu: {
    menuButton: `flex items-center rounded-md xl:-ml-3 translate-y-[0.5px]`,
    mobileMenuItems:
      "fixed z-10 left-0 lg:grid lg:place-items-center top-[66px] min-h-[calc(100vh-56px)] bg-dark rounded-tr-xl lg:rounded-tr-none  lg:w-full ",
  },
  logo: "min-w-[64px] rounded after:absolute h-[32px] flex-shrink-0  grid place-items-center relative overflow-hidden -ml-2 -translate-y-px",
  search: {
    searchRim:
      "hidden p-1 rounded-full bg-neutral-800 md:block  w-full max-w-[460px]",
    searchContainer: "flex  items-center  gap-2 px-3 bg-black rounded-full",
    searchInput:
      "bg-transparent text-sm w-full sm:text-base focus:outline-none h-[44px] translate-y-[-1px]",
  },
}

const Left = ({ content }) => (
  <div className={styles.base}>
    <Menu>
      {({ open, close }) => (
        <>
          <MenuButton styles={styles.menu} open={open} />
          <MobileMenu
            content={content}
            open={open}
            close={close}
            styles={styles.menu}
          />
        </>
      )}
    </Menu>
    <Logo styles={styles.logo} />
    <Searchbar styles={styles.search} />
  </div>
)

export default Left
