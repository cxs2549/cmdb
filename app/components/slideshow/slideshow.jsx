"use client"
import { useRef, useState } from "react"
import { slides } from "@/app/data"
import SlideImage from "./slide-image/slide-image"
import UpNext from "./up-next/up-next"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"
import { EffectFade, Autoplay, Keyboard } from "swiper"

const Slideshow = ({ added, setAdded }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const swiperRef = useRef()

  const Prev = () => {
    swiperRef.current.slidePrev()
    setCurrentIndex(swiperRef.current.realIndex)
  }
  const Next = () => {
    swiperRef.current.slideNext()
    setCurrentIndex(swiperRef.current.realIndex)
  }

  const handleSlideClick = (index) => {
    setCurrentIndex(index)
    swiperRef.current.slideTo(index)
  }

  return (
    <div className="relative z-0 w-full p-2 xl:px-0 lg:gap-2 lg:flex h-fit">
      <Swiper
        loop
        effect="fade"
        className="lg:min-w-[607px] h-fit z-0 relative  flex-1"
        modules={[EffectFade, Autoplay, Keyboard]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          stopOnLastSlide: true,
        }}
        keyboard={{ enabled: true }}
        spaceBetween={0}
        slidesPerView={1}
        onAutoplay={Next}
        onSlideChange={() => {
          setCurrentIndex(swiperRef.current.realIndex)
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onEnded={() => swi}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <SlideImage
              Next={Next}
              Prev={Prev}
              src={slide.img}
              srcMobile={slide.mobileImg}
              opacity={slide.opacity}
              slides={slides}
              currentIndex={currentIndex}
              added={added}
              setAdded={setAdded}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <UpNext currentIndex={currentIndex} handleSlideClick={handleSlideClick} />
    </div>
  )
}
export default Slideshow
