"use client"
import { useState } from "react"
import "./accordion.scss"
import { Transition, Menu } from "@headlessui/react"

const styles = {
  accordionContainer:
    "overflow-y-scroll h-[calc(100vh-66px)] border-t wrapper lg:hidden border-neutral-800 rounded-tr-xl",
  accordionList: "pt-2 accordion-list",
  accordionItem: "pb-2",
  accordionLineItem:
    "accordion-item__line w-full cursor-pointer group  text-gray-400",
  accordionTitle: "font-semibold pl-5 group-hover:text-brand",
  accordionInnerList: "flex flex-col gap-2 py-4 text-gray-400 pl-[43px]",
  accordionInnerItem:
    "px-4 transition-all duration-300 cursor-pointer hover:text-gray-100",
}

const Accordion = ({ content }) => {
  return (
    <div id="accordion" className={styles.accordionContainer}>
      <ul className={styles.accordionList}>
        {content.map((data, key) => {
          return (
            <li key={key} className={styles.accordionItem}>
              <AccordionItem {...data} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Accordion

const AccordionItem = ({ title, sublinks, icon }) => {
  const [open, set] = useState(false)
  return (
    <Menu as={`div`}>
      <>
        <Menu.Button
          className={styles.accordionLineItem}
          onClick={() => set((val) => !val)}
        >
          <div
            className={`w-5 h-5 ${
              open
                ? "text-brand"
                : "text-white/60 group-hover:text-brand accordion-item__line-icon"
            }`}
          >
            {icon}
          </div>
          <h3
            {...{
              className: `${styles.accordionTitle} ${open && "text-brand"}`,
            }}
          >
            {title}
          </h3>
          <span
            {...{ className: `accordion-item__icon ${open && "rotate-180"}` }}
          />
        </Menu.Button>
        {/* dropdown */}
        <Transition
          show={open}
          enter="transition-all ease-out duration-[260ms]"
          enterFrom=" opacity-0 scale-95 max-h-0"
          enterTo=" opacity-100 scale-100 max-h-[20rem]"
          leave="transition-all ease-in duration-[290ms]"
          leaveFrom=" opacity-100 scale-100"
          leaveTo=" opacity-0 scale-90"
        >
          <Menu.Items>
            <ul className={styles.accordionInnerList}>
              {sublinks.map((link, i) => (
                <li key={link} className={styles.accordionInnerItem}>
                  {link}
                </li>
              ))}
            </ul>
          </Menu.Items>
        </Transition>
      </>
    </Menu>
  )
}
