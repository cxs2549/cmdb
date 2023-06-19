import { Award, Tv } from "react-feather"
import { BsGlobeAmericas, BsPeople } from "react-icons/bs"
import { MdLocalMovies, MdQueuePlayNext } from "react-icons/md"

export const slides = [
  {
    title: `Emma Stone in 'Poor Things'`,
    subtitle: "Watch the Trailer",
    mobileImg: "/trailers/poor-things-mobile.png",
    img: "/trailers/poor-things.png",
    poster: "/trailers/poor-things-poster.png",
    year: 2023,
    runtime: "1:23",
    rating: "R",
  },
  {
    title: `Expend4bles`,
    subtitle: "Watch the Extendable First Trailer",
    mobileImg: "/trailers/expendables-mobile.png",
    img: "/trailers/expendables.png",
    poster: "/trailers/expendables-poster.png",
    year: 2023,
    runtime: "2:12",
    rating: "R",
  },
  {
    title: `The Witcher Season 3`,
    subtitle: "Watch the Trailer for the All New Season",
    mobileImg: "/trailers/witcher-mobile.png",
    img: "/trailers/witcher.png",
    poster: "/trailers/witcher-poster.png",
    year: 2023,
    runtime: "3:32",
    rating: "R",
  },
  {
    title: `Transformers: Rise of the Beasts`,
    subtitle: "Watch the Final Trailer",
    mobileImg: "/trailers/trans-mobile.png",
    img: "/trailers/trans.png",
    poster: "/trailers/trans-poster.png",
    year: 2023,
    runtime: "1:40",
    rating: "R",
  },
]

const menuTitles = [
  "Movies",
  "TV Shows",
  "Watch",
  "Awards & Events",
  "Celebs",
  "Community",
]
const moviesSublinks = [
  "Release Calendar",
  "Top 250 Movies",
  "Most Popular Movies",
  "Browse Movies by Genre",
  "Top Box Office",
  "Showtimes & Tickets",
  "Movie News",
  "India Movie Spotlight",
]
const tvSublinks = [
  "What's on TV & Streaming",
  "Top 250 TV Shows",
  "Most Popular TV Shows",
  "Browse TV Shows by Genre",
  "TV News",
]
const watchSublinks = [
  "What to Watch",
  "Latest Trailers",
  "IMDb Originals",
  "IMDb Picks",
  "IMDb Podcasts",
]
const awardsSublinks = [
  "Oscars",
  "ABFF",
  "Pride Month",
  "Outfest Outfronts",
  "STARmeter Awards",
  "Awards Central",
  "Festival Central",
  "All Events",
]
const celebsSublinks = [
  "Born Today",
  "Most Popular Celebs",
  "Most Popular Celebs",
  "Celebrity News",
]
const communitySublinks = ["Help Center", "Contributor Zone", "Polls"]

const allSublinkArrays = [
  moviesSublinks,
  tvSublinks,
  watchSublinks,
  awardsSublinks,
  celebsSublinks,
  communitySublinks,
]

const icons = [
  <MdLocalMovies
    size={26}
    className="-translate-x-0.5 -translate-y-1"
    key="movies"
  />,
  <Tv className="-translate-y-1 translate-x-0px" size={22} key="tv" />,
  <MdQueuePlayNext size={22} key="watch" className="-translate-y-0.5" />,
  <Award key="award" size={26} className="-translate-x-0.5 -translate-y-0.5" />,
  <BsPeople key="celebs" size={21} className="" />,
  <BsGlobeAmericas size={20} key="community" />,
]

export const menuObject = menuTitles.map((title, i) => {
  return { title, sublinks: allSublinkArrays[i], icon: icons[i] }
})
