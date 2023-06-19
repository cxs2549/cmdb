import Image from "next/image"
import Link from "next/link"

const Featured = () => {
  return (
    <div className="p-4">
      <div className="w-full mt-5 mb-8 translate-y-1">
        <h1 className="text-2xl font-bold lg:text-3xl text-brand">Featured today</h1>
      </div>
      <div className="flex w-full gap-8 overflow-x-scroll">
        <div className="flex gap-8">
          {[...Array(12)].map((item) => (
            <div key={item} className="flex-1 flex-shrink-0 min-w-[458px]">
              <div className="flex gap-1">
                {[
                  "/featured/flash.jpg",
                  "/featured/extrac.jpg",
                  "/featured/elemental.jpg",
                ].map((item, i) => (
                  <div key={i}>
                    <Image src={item} width={150} height={200} alt="" />
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <p className="text-xl font-semibold">
                  June Picks: The Flash, Extraction 2, and more
                </p>
                <Link
                  href="/"
                  className="mt-1 text-lg font-semibold text-brand"
                >
                  See the list
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Featured
