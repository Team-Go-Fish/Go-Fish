const search = [
  {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "Year": "1983",
      "imdbID": "tt0086190",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode VII - The Force Awakens",
      "Year": "2015",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode I - The Phantom Menace",
      "Year": "1999",
      "imdbID": "tt0120915",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode III - Revenge of the Sith",
      "Year": "2005",
      "imdbID": "tt0121766",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode II - Attack of the Clones",
      "Year": "2002",
      "imdbID": "tt0121765",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode VIII - The Last Jedi",
      "Year": "2017",
      "imdbID": "tt2527336",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
  },
  {
      "Title": "Rogue One: A Star Wars Story",
      "Year": "2016",
      "imdbID": "tt3748528",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode IX - The Rise of Skywalker",
      "Year": "2019",
      "imdbID": "tt2527338",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
  }
];

const movies = [
  {
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "Rated": "PG",
    "Released": "25 May 1977",
    "Runtime": "121 min",
    "Genre": "Action, Adventure, Fantasy, Sci-Fi",
    "Director": "George Lucas",
    "Writer": "George Lucas",
    "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
    "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 6 Oscars. Another 52 wins & 29 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "92%"
        },
        {
            "Source": "Metacritic",
            "Value": "90/100"
        }
    ],
    "Metascore": "90",
    "imdbRating": "8.6",
    "imdbVotes": "1,239,720",
    "imdbID": "tt0076759",
    "Type": "movie",
    "DVD": "10 Oct 2016",
    "BoxOffice": "$460,998,507",
    "Production": "Lucasfilm Ltd.",
    "Website": "N/A",
    "Response": "True"
},
{
  "Title": "Star Wars: Episode V - The Empire Strikes Back",
  "Year": "1980",
  "Rated": "PG",
  "Released": "20 Jun 1980",
  "Runtime": "124 min",
  "Genre": "Action, Adventure, Fantasy, Sci-Fi",
  "Director": "Irvin Kershner",
  "Writer": "Leigh Brackett (screenplay by), Lawrence Kasdan (screenplay by), George Lucas (story by)",
  "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
  "Plot": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
  "Language": "English",
  "Country": "USA, UK",
  "Awards": "Won 1 Oscar. Another 24 wins & 20 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "8.7/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "94%"
      },
      {
          "Source": "Metacritic",
          "Value": "82/100"
      }
  ],
  "Metascore": "82",
  "imdbRating": "8.7",
  "imdbVotes": "1,167,611",
  "imdbID": "tt0080684",
  "Type": "movie",
  "DVD": "10 Apr 2015",
  "BoxOffice": "$292,753,960",
  "Production": "Lucasfilm Ltd.",
  "Website": "N/A",
  "Response": "True"
},
{
  "Title": "Star Wars: Episode VI - Return of the Jedi",
  "Year": "1983",
  "Rated": "PG",
  "Released": "25 May 1983",
  "Runtime": "131 min",
  "Genre": "Action, Adventure, Fantasy, Sci-Fi",
  "Director": "Richard Marquand",
  "Writer": "Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)",
  "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
  "Plot": "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
  "Language": "English",
  "Country": "USA, UK",
  "Awards": "Nominated for 4 Oscars. Another 22 wins & 16 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "8.3/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "82%"
      },
      {
          "Source": "Metacritic",
          "Value": "58/100"
      }
  ],
  "Metascore": "58",
  "imdbRating": "8.3",
  "imdbVotes": "957,052",
  "imdbID": "tt0086190",
  "Type": "movie",
  "DVD": "10 Apr 2015",
  "BoxOffice": "$309,306,177",
  "Production": "Lucasfilm Ltd.",
  "Website": "N/A",
  "Response": "True"
},
{
  "Title": "Star Wars: Episode VII - The Force Awakens",
  "Year": "2015",
  "Rated": "PG-13",
  "Released": "18 Dec 2015",
  "Runtime": "138 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "J.J. Abrams",
  "Writer": "Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)",
  "Actors": "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
  "Plot": "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Nominated for 5 Oscars. Another 62 wins & 130 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "7.9/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "93%"
      },
      {
          "Source": "Metacritic",
          "Value": "80/100"
      }
  ],
  "Metascore": "80",
  "imdbRating": "7.9",
  "imdbVotes": "865,307",
  "imdbID": "tt2488496",
  "Type": "movie",
  "DVD": "01 Apr 2016",
  "BoxOffice": "$936,662,225",
  "Production": "Lucasfilm Ltd., Bad Robot",
  "Website": "N/A",
  "Response": "True"
},
{
  "Title": "Star Wars: Episode I - The Phantom Menace",
  "Year": "1999",
  "Rated": "PG",
  "Released": "19 May 1999",
  "Runtime": "136 min",
  "Genre": "Action, Adventure, Fantasy, Sci-Fi",
  "Director": "George Lucas",
  "Writer": "George Lucas",
  "Actors": "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd",
  "Plot": "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
  "Language": "English, Sanskrit",
  "Country": "USA",
  "Awards": "Nominated for 3 Oscars. Another 26 wins & 66 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "6.5/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "52%"
      },
      {
          "Source": "Metacritic",
          "Value": "51/100"
      }
  ],
  "Metascore": "51",
  "imdbRating": "6.5",
  "imdbVotes": "736,547",
  "imdbID": "tt0120915",
  "Type": "movie",
  "DVD": "10 Apr 2015",
  "BoxOffice": "$474,544,677",
  "Production": "Lucasfilm Ltd.",
  "Website": "N/A",
  "Response": "True"
},
{
  "Title": "Star Wars: Episode III - Revenge of the Sith",
  "Year": "2005",
  "Rated": "PG-13",
  "Released": "19 May 2005",
  "Runtime": "140 min",
  "Genre": "Action, Adventure, Fantasy, Sci-Fi",
  "Director": "George Lucas",
  "Writer": "George Lucas",
  "Actors": "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid",
  "Plot": "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Nominated for 1 Oscar. Another 26 wins & 62 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "7.5/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "80%"
      },
      {
          "Source": "Metacritic",
          "Value": "68/100"
      }
  ],
  "Metascore": "68",
  "imdbRating": "7.5",
  "imdbVotes": "717,682",
  "imdbID": "tt0121766",
  "Type": "movie",
  "DVD": "10 Apr 2015",
  "BoxOffice": "$380,270,577",
  "Production": "Lucasfilm Ltd.",
  "Website": "N/A",
  "Response": "True"
},
{
  "Title": "Star Wars: Episode II - Attack of the Clones",
  "Year": "2002",
  "Rated": "PG",
  "Released": "16 May 2002",
  "Runtime": "142 min",
  "Genre": "Action, Adventure, Fantasy, Sci-Fi",
  "Director": "George Lucas",
  "Writer": "George Lucas (screenplay by), Jonathan Hales (screenplay by), George Lucas (story by)",
  "Actors": "Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee",
  "Plot": "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Nominated for 1 Oscar. Another 19 wins & 64 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "6.5/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "65%"
      },
      {
          "Source": "Metacritic",
          "Value": "54/100"
      }
  ],
  "Metascore": "54",
  "imdbRating": "6.5",
  "imdbVotes": "647,538",
  "imdbID": "tt0121765",
  "Type": "movie",
  "DVD": "10 Apr 2015",
  "BoxOffice": "$310,676,740",
  "Production": "Twentieth Century Fox, Lucasfilm Ltd.",
  "Website": "N/A",
  "Response": "True"
},
{
  "Title": "Star Wars: Episode VIII - The Last Jedi",
  "Year": "2017",
  "Rated": "PG-13",
  "Released": "15 Dec 2017",
  "Runtime": "152 min",
  "Genre": "Action, Adventure, Fantasy, Sci-Fi",
  "Director": "Rian Johnson",
  "Writer": "Rian Johnson, George Lucas (based on characters created by)",
  "Actors": "Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley",
  "Plot": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Nominated for 4 Oscars. Another 26 wins & 98 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "7.0/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "90%"
      },
      {
          "Source": "Metacritic",
          "Value": "84/100"
      }
  ],
  "Metascore": "84",
  "imdbRating": "7.0",
  "imdbVotes": "570,478",
  "imdbID": "tt2527336",
  "Type": "movie",
  "DVD": "11 Mar 2018",
  "BoxOffice": "$620,181,382",
  "Production": "Lucasfilm Ltd.",
  "Website": "N/A",
  "Response": "True"
},
{
  "Title": "Rogue One: A Star Wars Story",
  "Year": "2016",
  "Rated": "PG-13",
  "Released": "16 Dec 2016",
  "Runtime": "133 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Gareth Edwards",
  "Writer": "Chris Weitz (screenplay by), Tony Gilroy (screenplay by), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)",
  "Actors": "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
  "Plot": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the plans for the Death Star.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Nominated for 2 Oscars. Another 24 wins & 80 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "7.8/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "84%"
      },
      {
          "Source": "Metacritic",
          "Value": "65/100"
      }
  ],
  "Metascore": "65",
  "imdbRating": "7.8",
  "imdbVotes": "560,630",
  "imdbID": "tt3748528",
  "Type": "movie",
  "DVD": "24 Mar 2017",
  "BoxOffice": "$532,177,324",
  "Production": "Lucasfilm Ltd.",
  "Website": "N/A",
  "Response": "True"
},
{
  "Title": "Star Wars: Episode IX - The Rise of Skywalker",
  "Year": "2019",
  "Rated": "PG-13",
  "Released": "20 Dec 2019",
  "Runtime": "141 min",
  "Genre": "Action, Adventure, Fantasy, Sci-Fi",
  "Director": "J.J. Abrams",
  "Writer": "Chris Terrio (screenplay by), J.J. Abrams (screenplay by), Derek Connolly (story by), Colin Trevorrow (story by), J.J. Abrams (story by), Chris Terrio (story by), George Lucas (based on characters created by)",
  "Actors": "Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley",
  "Plot": "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Nominated for 3 Oscars. Another 9 wins & 52 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "6.6/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "51%"
      },
      {
          "Source": "Metacritic",
          "Value": "53/100"
      }
  ],
  "Metascore": "53",
  "imdbRating": "6.6",
  "imdbVotes": "382,748",
  "imdbID": "tt2527338",
  "Type": "movie",
  "DVD": "20 Dec 2019",
  "BoxOffice": "$515,202,542",
  "Production": "Lucasfilm Ltd., Bad Robot",
  "Website": "N/A",
  "Response": "True"
}
];

const users = [
  {
    username: "skywalker",
    firstName: "Luke",
    lastName: "Skywalker",
    email: "luke@starwars.com",
    phone: "1234567890",
    password: "hash",
  },
  {
    username: "princess",
    firstName: "Princess",
    lastName: "Leia",
    email: "leia@starwars.com",
    phone: "1234567890",
    password: "hash",
  },
  {
    username: "solo",
    firstName: "Han",
    lastName: "Solo",
    email: "solo@starwars.com",
    phone: "1234567890",
    password: "hash",
  },
  {
    username: "vader",
    firstName: "Darth",
    lastName: "Vader",
    email: "vader@starwars.com",
    phone: "1234567890",
    password: "hash",
  },
  {
    username: "r2d2",
    firstName: "R2",
    lastName: "D2",
    email: "r2d2@starwars.com",
    phone: "1234567890",
    password: "hash",
  },
  {
    username: "chewie",
    firstName: "Chewbacca",
    lastName: "Chewbacca",
    email: "chewie@starwars.com",
    phone: "1234567890",
    password: "hash",
  },
  {
    username: "yoda",
    firstName: "Yoda",
    lastName: "Yoda",
    email: "yoda@starwars.com",
    phone: "1234567890",
    password: "hash",
  },
  {
    username: "trooper",
    firstName: "Storm",
    lastName: "Trooper",
    email: "trooper@starwars.com",
    phone: "1234567890",
    password: "hash",
  },
  {
    username: "bountyhunter",
    firstName: "Boba",
    lastName: "Fett",
    email: "bountyhunter@starwars.com",
    phone: "1234567890",
    password: "hash",
  }
];