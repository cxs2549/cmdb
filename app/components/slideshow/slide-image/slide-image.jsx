import Image from "next/image"
import InfoBox from "../info-box/info-box"

const SlideImage = ({
  src,
  srcMobile,
  Prev,
  Next,
  slides,
  currentIndex,
  added,
  setAdded,
}) => {
  return (
    <div className="relative order-2 overflow-visible">
      <div className="  after:absolute after:bottom-0  after:w-full after:left-0 after:h-[70%] after:bg-gradient-to-t after:from-black  after:z-30 z-0 after:lg:h-[40%] aspect-square md:aspect-auto lg:aspect-square lg:min-h-[485px] lg:max-h-[485px] lg:w-full ">
        <div className="after:absolute after:bottom-0  after:w-full after:left-0 after:h-[25%] relative after:bg-gradient-to-t after:from-black">
          <Image
            src={srcMobile}
            width={1280}
            height={665}
            alt=""
            className={`relative z-0 object-cover w-full   md:hidden after:absolute after:bottom-0  after:w-full after:left-0 after:h-[70%] after:bg-gradient-to-t after:from-black`}
          />
        </div>
        <Image
          src={src}
          width={1280}
          height={665}
          alt=""
          className={`relative z-0 object-cover w-full h-full md:block hidden object-left`}
        />
        <div className="absolute bottom-0 left-0 w-full">
          <Image src={`/slide-fade.png`} width={1400} height={600} alt="" />
        </div>
      </div>

      <InfoBox
        slides={slides}
        currentIndex={currentIndex}
        added={added}
        setAdded={setAdded}
        Prev={Prev}
        Next={Next}
      />
    </div>
  )
}
export default SlideImage
