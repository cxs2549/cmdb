import { Menu, Transition } from "@headlessui/react"
import Link from "next/link"
import { Fragment } from "react"
import { User } from "react-feather"
import { BsCaretDownFill } from "react-icons/bs"

const styles = {
  container: "-translate-y-0.5",
  button: "flex items-center gap-1.5 group",
  icon: "border-2 rounded-full translate-y-0.5",
  profileIconMenu:
    "absolute right-0 p-2 rounded-xl border-t border-neutral-800 shadow-xl w-44 bg-dark translate-y-2 font-semibold",
  name: "font-semibold translate-y-0.5 flex items-center",
  menuItem: "flex items-center h-12 border-b border-neutral-800",
  fullName: "w-full  px-2.5 text-white",
  link: "px-2.5 flex items-center h-[44px] text-white/60 hover:text-white/100",
}

const ProfileDropdown = () => {
  return (
    <Menu as={`div`} className={styles.container}>
      {({ open, close }) => (
        <>
          <Menu.Button className={styles.button}>
            <div
              className={` ${styles.icon}   ${
                open
                  ? "text-white/100 border-white"
                  : "text-neutral-700 border-neutral-700 group-hover:text-white/100 group-hover:border-white brightness-150"
              }`}
            >
              <User size={20} />
            </div>
            <p
              className={` ${styles.name}   ${
                open
                  ? "text-white/100"
                  : "text-neutral-600 group-hover:text-white/100 brightness-150"
              }`}
            >
              Cliff <BsCaretDownFill size={12} className="ml-1 translate-y-px" />
            </p>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo=" opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom=" opacity-100 scale-100"
            leaveTo=" opacity-0 scale-95"
          >
            <Menu.Items
              onMouseLeave={close}
              as="ul"
              className={styles.profileIconMenu}
            >
              <Menu.Item as={`li`} className={styles.menuItem}>
                <Link href="/" className={styles.fullName}>
                  Cliff Sanchez
                </Link>
              </Menu.Item>
              {[
                "Your activity",
                "Your queue",
                "Your ratings",
                "Your lists",
                "Account settings",
                "Sign out",
              ].map((item, i) => (
                <Menu.Item as={`li`} key={item}>
                  <Link href="/" className={styles.link}>
                    {item}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
export default ProfileDropdown
