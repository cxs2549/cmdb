import { Search } from "react-feather"

const Searchbar = ({ styles }) => {
  return (
    <div className={styles.searchRim}>
      <div className={styles.searchContainer}>
        <div>
          <Search size={20} />
        </div>
        <input
          type="search"
          placeholder="Search films, TV, streaming"
          className={styles.searchInput}
        />
      </div>
    </div>
  )
}

export default Searchbar
