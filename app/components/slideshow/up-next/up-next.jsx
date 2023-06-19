"use client"
import { useEffect, useState, useMemo } from "react"
import { slides } from "@/app/data"
import Image from "next/image"
import { ChevronRight, Play } from "react-feather"
import Link from "next/link"

const UpNext = ({ currentIndex, handleSlideClick }) => {
  const [startIndex, setStartIndex] = useState(
    (currentIndex + 1) % slides.length
  )
  const endIndex = (startIndex + 2) % slides.length
  const nextSlides = useMemo(() => {
    if (endIndex >= startIndex) {
      return slides.slice(startIndex, endIndex + 1)
    } else {
      return [...slides.slice(startIndex), ...slides.slice(0, endIndex + 1)]
    }
  }, [startIndex, endIndex])

  const handleClick = (index) => {
    const clickedIndex = index % slides.length
    console.log(
      "clickedIndex:",
      clickedIndex,
      "title:",
      slides[clickedIndex].title
    )
    handleSlideClick(clickedIndex)
    setStartIndex((clickedIndex + 1) % slides.length)
  }

  useEffect(() => {
    setStartIndex((currentIndex + 1) % slides.length)
  }, [currentIndex])

  const PlayBtn = () => (
    <button className="z-10 grid w-8 h-8 transition-all duration-200 rounded-full bg-white/90 group-hover:bg-brand place-items-center">
      <Play
        className="text-white group-hover:fill-white transition-all group-hover:stroke-white translate-x-0.5 fill-black stroke-black duration-200"
        size={17}
      />
    </button>
  )

  return (
    <div className="flex-1 relative hidden  min-w-[354px] lg:block bg-gradient-to-b from-dark to-black  min-h-full max-w-[400px] overflow-hidden rounded-xl">
      <div className="relative flex flex-col py-4 ">
        <h3 className="relative flex items-start px-4 text-[22px] font-bold -translate-y-2 text-brand">
          Up next
        </h3>
        <ul className="relative flex flex-col overflow-hidden rounded-xl">
          {nextSlides.map((slide, i) => (
            <li
              key={i}
              className={`flex items-center gap-2 z-10 cursor-pointer group py-2 px-4 `}
              onClick={() => handleClick(startIndex + i)}
            >
              <div className="min-w-[72px] max-w-[80px] h-[113px] rounded overflow-hidden bg-black cursor-pointer  group-hover:scale-110 transition-all duration-200">
                <Image src={slide.poster} width={188} height={230} alt="" />
              </div>
              <div className="flex flex-col justify-end w-full h-full mt-auto ">
                <div className="flex items-center gap-2 mb-1">
                  <PlayBtn />
                  <p className="text-sm font-medium text-gray-400">{slide.runtime}</p>
                </div>
                <h3 className="text-base font-medium transition-all duration-200 cursor-pointer group-hover:text-brand ">
                  {slide.title}
                </h3>
                <p className="text-[14px] text-gray-400 font-medium -mt-0.5">
                  {slide.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href={`/`}
          className="text-[20px] font-semibold  whitespace-nowrap hover:text-brand w-fit flex items-center transition-all"
        >
          <p className="px-4 py-2">Browse all trailers</p>
          <ChevronRight className="translate-y-0.5" />
        </Link>
      </div>
    </div>
  )
}

export default UpNext
