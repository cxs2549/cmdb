import Link from "next/link"
import { Rubik } from "next/font/google"

const rubik = Rubik({
  weight: ["900"],
  subsets: ["latin"],
})

const styles = {
  proContainer:
    "text-[20px] -translate-x-2 flex items-center gap-0.5 font-extrabold tracking-[-0.04em]",
  brandContainer: "scale-y-[1.3]",
  brandPro: "relative text-[#F5C518]",
  sparkle:
    "relative text-sm",
}

const Logo = () => (
  <Link href={`/`} className={styles.proContainer} style={rubik.style}>
    <div className={styles.brandContainer}>
      CMDb<span className={styles.brandPro}>Pro</span>
    </div>
    <span className={styles.sparkle}>✨</span>
  </Link>
)

export default Logo
