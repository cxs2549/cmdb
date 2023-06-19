import React, { Suspense } from "react"
import Image from "next/image"
import "./info-box.scss"
import Link from "next/link"
import {
  BsChevronLeft,
  BsFillBookmarkCheckFill,
  BsFillBookmarkPlusFill,
} from "react-icons/bs"
import { Play } from "react-feather"
import { useMediaQuery } from "react-responsive"

const styles = {
  container:
    "relative z-[50] w-full -mt-32 md:left-2 lg:left-4 md:absolute md:bottom-0 md:-mb-12 lg:mb-0",
  wrapper: "relative flex flex-col ",
  metadata:
    "flex w-full gap-2 overflow-visible transition-all duration-200 items-end lg:gap-3",
  posterWrapper:
    "relative z-0 self-end flex-shrink-0 transition-all duration-200 ease-in-out bg-black rounded-lg cursor-pointer max-w-[99px] max-h-[141px] min-h-[141px] md:max-w-[132px] xl:max-w-[165px] md:min-w-[132px] xl:min-w-[165px] md:max-h-[235px]",
  bookmarkBtn: "absolute top-0 left-[-6px] group",
  bookmarkPlus:
    "text-[3.5rem] -translate-x-[2px] xl:text-[3.8rem] group-hover:text-brand transition-all opacity-80",
  bookmarkCheck:
    "text-[3.5rem] -translate-x-[2px] xl:text-[3.8rem] group-hover:text-brand transition-all opacity-80 text-brand",
  posterImg: "object-cover w-full rounded-lg shadow-2xl",
  metadataContainer:
    "relative flex flex-col justify-start w-full gap-2 md:justify-end",
  playControls:
    "flex items-center self-start justify-between w-full place-self-start",
  browseContainer:
    "text-[20px] h-14 font-bold  whitespace-nowrap hover:text-brand w-fit flex items-center transition-all lg:hidden pl-2",
  chevron: "translate-y-0.5 rotate-180 stroke-[2px] ml-2",
}



const InfoBox = ({ slides, Next, Prev, currentIndex, added, setAdded }) => {
  const handleClick = (title) => {
    setTimeout(() => {
      if (added.includes(slides[currentIndex].title)) {
        const updatedAdded = added.filter((item) => item !== title) // Modified line
        setAdded(updatedAdded)
        localStorage.setItem("added", JSON.stringify(updatedAdded)) // Modified line
      } else {
        const updatedAdded = [...added, title]
        setAdded(updatedAdded)
        localStorage.setItem("added", JSON.stringify(updatedAdded)) // Modified line
      }
    }, 200)
  }

  return (
    <div
      key={slides[currentIndex].title}
      id="info-box"
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <div className={styles.metadata}>
          {/* poster */}
          <div className={styles.posterWrapper}>
            {/* bookmark */}
            <button
              onClick={() => handleClick(slides[currentIndex].title)}
              className={styles.bookmarkBtn}
            >
              {!added?.includes(slides[currentIndex].title) ? (
                <BsFillBookmarkPlusFill className={styles.bookmarkPlus} />
              ) : (
                <BsFillBookmarkCheckFill className={styles.bookmarkCheck} />
              )}
              
            </button>
            <Suspense>
              <Image
                src={slides[currentIndex].poster}
                width={1200}
                height={200}
                alt=""
                priority
                className={styles.posterImg}
              />
            </Suspense>
          </div>
          {/* metadata */}
          <div className={styles.metadataContainer}>
            <div className={styles.playControls}>
              <PlayBtn />
              <Arrows Prev={Prev} Next={Next} />
            </div>
            <TitleSubtitle currentIndex={currentIndex} slides={slides} />
          </div>
        </div>

        <Link href={`/`} className={styles.browseContainer}>
          <p style={{ lineHeight: 1.25 }}>Browse all trailers</p>
          <BsChevronLeft size={12} className={styles.chevron} />
        </Link>
      </div>
    </div>
  )
}

export default InfoBox

const ResponsiveIcon = ({ icon, size }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 449px)" })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  })
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })

  let scaledSize

  if (isMobile) {
    scaledSize = size * 1
  } else if (isTablet) {
    scaledSize = size * 1.2
  } else if (isDesktop) {
    scaledSize = size * 1.5
  }

  return React.cloneElement(icon, { size: scaledSize })
}
const PlayBtn = () => {
  return (
    <button className="grid  transition-all  border-[3px] border-[#fff] rounded-full opacity-90 sm:relative playBtn place-items-center hover:opacity-100 hover:border-brand group hover:stroke-[2px] ">
      <ResponsiveIcon
        icon={
          <Play className="text-[#fff] fill-[#fff] translate-x-0.5 group-hover:text-brand group-hover:fill-brand transition-all" />
        }
        size={21}
      />
    </button>
  )
}
const TitleSubtitle = ({ currentIndex, slides }) => {
  return (
    <div className="flex flex-col w-full pr-4">
      <h1
        style={{ lineHeight: 1.25 }}
        className="mb-1 text-[16px] font-semibold transition-all cursor-pointer  hover:text-brand sm:text-[20px] md:text-2xl line-clamp-2 w-fit xl:text-[32px] lg:max-w-[320px] xl:max-w-[470px]"
      >
        {slides[currentIndex].title}
      </h1>
      <p
        style={{ lineHeight: 1.25 }}
        className=" font-semibold translate text-neutral-400 flex text-[14px] md:text-[20px] lg:max-w-[36vw]"
      >
        {slides[currentIndex].subtitle}
      </p>
    </div>
  )
}
const Arrows = ({ Prev, Next }) => (
  <div className=" flex items-center justify-between gap-2  w-[80px]  z-[100000]   opacity-90  md:absolute md:bottom-2 right-0 md:right-6 ">
    <button onClick={Prev}>
      <BsChevronLeft
        size={30}
        className="hover:text-brand hover:scale-110 transition-all duration-200 text-[#666] stroke-[1]"
      />
    </button>
    <button onClick={Next}>
      <BsChevronLeft
        size={30}
        className="hover:text-brand transition-all duration-200 text-[#666] rotate-180 stroke-[1] hover:scale-110"
      />
    </button>
  </div>
)
