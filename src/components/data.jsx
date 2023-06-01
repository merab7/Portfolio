
import quizoone from "./apppic/quizone.png"
import quizotwo from "./apppic/quiztwo.png"
import quizothree from "./apppic/quizthree.png"
import memeone from "./apppic/memeone.png"
import memetwo from "./apppic/memetwo.png"
import memethree from "./apppic/memethree.png"
import colorone from "./apppic/colorone.png"
import colortwo from "./apppic/colortwo.png"
import colorthree from "./apppic/colorthree.png"
import watchone from "./apppic/watchone.png"
import watchtwo from "./apppic/watchtwo.png"
import watchthree from "./apppic/watchthree.png"


const projectsData = [
    {
      name: "Quizzify",
      info: "Quizzify is a React quiz app that fetches data from an API. Users can choose from 23 categories and select the difficulty level for their quiz. After answering the questions, the app displays feedback on correct and incorrect answers. It's an engaging and educational experience that combines React and API integration.",
      photos: {
        picone: quizoone,
        pictwo: quizotwo,
        picthree: quizothree
      },
      live: "https://animated-beijinho-e7b14d.netlify.app/",
      code: "https://github.com/merab7/quizzify.git",
      id: "0"
    },
    {
      name: "Meme-Maker",
      info: "Meme-C is a React-based app for creating memes using API-provided pictures. Users can select images, choose font colors, and download their memes. It's a fun and customizable meme-making experience with a focus on user creativity.",
      photos: {
        picone: memeone,
        pictwo: memetwo,
        picthree:memethree
      },
      live: "https://vermillion-semolina-8f5dab.netlify.app/",
      code: "https://github.com/merab7/memegenerato3.0.git",
      id: "1"
    },
    {
      name: "Color-scheme",
      info: "With this app, easily explore and copy color schemes from different categories with a simple click. Enhance your projects effortlessly.",
      photos: {
        picone: colorone,
        pictwo: colortwo,
        picthree:colorthree
      },
      live: "https://bejewelled-trifle-6ff49a.netlify.app/",
      code: "https://github.com/merab7/ColorScheme.git",
      id: "2"
    },
    {
      name: "Watchlist",
      info: "Introducing Watchlist, the ultimate movie companion app. Search for your favorite movies, explore new releases, and effortlessly add them to your personalized watchlist. Never miss a film again as you save and organize your must-watch movies in one place. Stay up-to-date with the latest cinematic gems and curate your own movie collection with Watchlist",
      photos: {
        picone: watchone,
        pictwo: watchtwo,
        picthree: watchthree
      },
      live: "https://soft-clafoutis-15011d.netlify.app/watchlistpage",
      code: "https://github.com/merab7/watchlist.git",
      id: "3"
    }
  ];

  export default projectsData