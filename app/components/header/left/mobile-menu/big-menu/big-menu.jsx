import Link from "next/link"

const styles = {
  menuContainer:
    "h-[calc(100vh-66px)] hidden lg:grid place-items-center lg:w-[950px]",
  menuWrapper:
    "grid w-full grid-cols-3 gap-8 mx-auto min-w-[950px]  justify-items-center ",
  menuList: "min-w-fit",
  menuTitle: "mb-2.5 text-xl font-bold text-brand",
  menuSublinkContainer: "min-w-[203px] max-w-[203px] py-1",
  menuSublink: "text-white/60 hover:text-white/100",
}

const BigMenu = ({ content }) => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuWrapper}>
        {content.map((item, i) => (
          <ul key={item.title} className={styles.menuList}>
            <h1 className={styles.menuTitle}>{item.title}</h1>
            {item.sublinks.map((item, i) => (
              <li key={item} className={styles.menuSublinkContainer}>
                <Link href="/" className={styles.menuSublink}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
export default BigMenu
