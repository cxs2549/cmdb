import MyQueue from "./my-queue/my-queue"
import ProfileDropdown from "./profile-dropdown/profile-dropdown"
import SearchMobile from "./search-mobile/search-mobile"

const styles = {
  base: "flex items-center justify-end flex-1 gap-5 lg:gap-6 flex-shrink-0 flex-1 h-full max-w-fit pr-4 xl:pr-0",
  searchMobileWrapper:
    "fixed left-0 top-0 w-full right-0 z-10 grid place-items-center min-h-[66px] w-full ",
  searchMobile: "z-10 flex items-center w-full h-full px-4 bg-dark ",
  searchContainer:
    "flex  items-center  gap-2 px-2 bg-black rounded-full w-full  flex-1",
  searchInput:
    "bg-transparent text-sm sm:text-base focus:outline-none lg:min-w-[260px] h-[44px] w-full",
  searchRim: "p-1 w-full rounded-full bg-neutral-800 max-w-[450px]",
}

const Right = ({ added, setAdded }) => (
  <div className={styles.base}>
    <SearchMobile styles={styles} />
    <MyQueue added={added} styles={styles} setAdded={setAdded} />
    <ProfileDropdown styles={styles} />
  </div>
)

export default Right
