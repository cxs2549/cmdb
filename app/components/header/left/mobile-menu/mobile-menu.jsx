import { Menu, Transition } from "@headlessui/react"
import Accordion from "./accordion/accordion"
import BigMenu from './big-menu/big-menu'
import { Fragment } from "react"

const MobileMenu = ({ content, close, styles }) => {
    return (
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom=" opacity-0 scale-95"
        enterTo=" opacity-100 scale-100"
        leave="transition ease-in duration-300"
        leaveFrom=" opacity-100 scale-100"
        leaveTo=" opacity-0 scale-95"
      >
        <Menu.Items
          onMouseLeave={close}
          className={styles.mobileMenuItems}
        >
          <Accordion content={content} />
          <BigMenu content={content} />
        </Menu.Items>
      </Transition>
    )
  }

  export default MobileMenu