import Link from "next/link"
import { BsBookmarkCheckFill } from "react-icons/bs"

const styles = {
  queueContainer:
    "relative items-center hidden gap-1 translate-y-[-1px] md:flex min-w-fit",
  button: "flex group items-center gap-1",
  icon: "text-white/60 group-hover:text-brand",
  title:
    "hidden text-sm font-semibold lg:flex group-hover:text-white/100 text-white/60",
  count:
    "flex items-center justify-center w-2 h-2 p-2 text-xs font-semibold rounded-full text-neutral-800 bg-brand",
}

const MyQueue = ({ added, setAdded }) => {
  return (
    <div className={styles.queueContainer}>
      <Link href="/my-queue" className={styles.button}>
        <BsBookmarkCheckFill className={styles.icon} size={20} />
        <p className={styles.title}>My Queue</p>

        <button onDoubleClick={() => setAdded([])} className={styles.count}>
          {added.length}
        </button>
      </Link>
    </div>
  )
}
export default MyQueue
