import Avengers from "./assets/Avengers.jpg"
import Ultron from "./assets/Avengers Age of Ultron.jpg"
import EndGame from "./assets/Avengers End Game.jpg"
import SpiderVerse from "./assets/Spider-Man-Across The Spider-Verse.jpg"
import TheBatman from "./assets/The Batman.jpg"
import InfinityWar from "./assets/Avengers Infinity War.jpg"

const featuredMovies = [
  {
    imdbID: "tt0848228",
    Title: "Avengers",
    Year: "2012",
    Poster: Avengers,
  },
  {
    imdbID: "tt2395427",
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    Poster: Ultron,
  },
  {
    imdbID: "tt4154756",
    Title: "Avengers: Infinity War",
    Year: "2018",
    Poster: InfinityWar,
  },
  {
    imdbID: "tt4154796",
    Title: "Avengers: Endgame",
    Year: "2019",
    Poster: EndGame,
  },
  {
    imdbID: "tt9362722",
    Title: "Spider-Man: Across The Spider-Verse",
    Year: "2023",
    Poster: SpiderVerse,
  },
  {
    imdbID: "tt1877830",
    Title: "The Batman",
    Year: "2022",
    Poster: TheBatman,
  },
];

export default featuredMovies;