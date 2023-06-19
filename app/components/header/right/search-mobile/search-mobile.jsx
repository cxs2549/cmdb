"use client"
import { Menu, Transition } from "@headlessui/react"
import { useRef } from "react"
import { Search } from "react-feather"

const searchStyles = {
  container: "md:hidden",
  button: "grid place-items-center",
}

const SearchMobile = ({ styles }) => {
  const ref = useRef(null)
  return (
    <Menu as={`div`} className={searchStyles.container}>
      {({ open, close }) => (
        <>
          <Menu.Button
            as="button"
            className={` ${searchStyles.button} ${
              open
                ? "hover:text-neutral-700 scale-50"
                : "text-neutral-700 hover:text-white/100 scale-100 brightness-150"
            }`}
          >
            <Search size={24} />
          </Menu.Button>
          <Transition
            className={styles.searchMobileWrapper}
            enter="transition ease-out duration-100"
            enterFrom=" opacity-0 scale-95"
            enterTo=" opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom=" opacity-100 scale-100"
            leaveTo=" opacity-0 scale-95"
          >
            <Menu.Items onMouseLeave={close} className={styles.searchMobile}>
              <div className={styles.searchRim}>
                <div className={styles.searchContainer}>
                  <div>
                    <Search size={20} />
                  </div>
                  <input
                    type="search"
                    placeholder="Search films, TV, streaming"
                    className={styles.searchInput}
                  />
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default SearchMobile
