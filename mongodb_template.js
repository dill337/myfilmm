let movie154 = {
  Title: "Forrest Gump",
  Description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
  Genre: [
    ObjectId("601c899cbe3a120428963da3"),
    ObjectId("601d99c86cbb7f9a6b6cfe49")
  ],
  Director: [],
  Year: "1994",
  Actors: [],
  ImagePath: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg",
  Featured: false
}

db.movies.insertOne(movie154)


action
ObjectId("601c89d1be3a120428963da4")

comedy
ObjectId("601c899cbe3a120428963da3")

drama
ObjectId("601d99c86cbb7f9a6b6cfe49")

sci - fi
ObjectId("601ede249d551717b7e4fb85")

thriller
ObjectId("601c8a45be3a120428963da6")

horror
ObjectId("601c894bbe3a120428963da2")

family
ObjectId("60429b7548cbd3bfb8707cc7")

music
ObjectId("6042c550f7684c85f191bb76")




db.movies.update(
  { Title: "Forrest Gump" },
  { $push: { Genre: ObjectId("60429b7548cbd3bfb8707cc7") } }
)

db.movies.update(
  { Title: "Prometheus" },
  { $push: { Director: ObjectId("60428f171d4058ddd5276ca0") } }
)



let movie21 = {
  Title: "MacGruber",
  Description: "Former special operative MacGruber is called back into action to take down his arch-enemy, Dieter Von Cunth, who's in possession of a nuclear warhead and bent on destroying Washington, D.C.",
  Genre: [],
  Director: []   
  Year: "2010", Actors: ["Will Forte", "Kristen Wiig", "Val Kilmer", "Ryan Phillippe"], ImagePath: "https://m.media-amazon.com/images/M/MV5BMjE4MDY1ODY5Nl5BMl5BanBnXkFtZTcwNjgzMTEzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg", Featured: false
}


{
  "_id": { "$oid": "601379e88db5020db9381745" },
  "Title": "Snatch",
    "Description": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
      "Genre": [{ "$oid": "601c89d1be3a120428963da4" },
      { "$oid": "601c89d1be3a120428963da3" }],
        "Director": [{ "$oid": "601c8b11be3a120428963da9" }],
          "Actors": ["Brad Pitt", "Jason Statham", "Benicio Del Toro",
            "Dennis Farina"],
            "ImagePath": "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY268_CR0,0,182,268_AL_.jpg", "Featured": false
}



let genre9 = {
  Name: "Music",
  Description: "Music film is a genre that has good music either live or recorded in a studio.",
  GenreMovies: [],
}

db.genres.insertOne(genre9)


let director108 = {
  Name: "Michael Cimino",
  Bio: "Michael Cimino was born in the New York City, New York, USA.  He studied architecture and dramatic arts; later he filmed advertisements and documentaries.  He died in Los Angeles, California",
  Birth: "1939",
  Death: "2016",
  DirectedMovies: []
}

db.directors.insertOne(director108)


//export a collection
//mongoexport -d myFilmDB -c movies -o movies.json

// /*
// Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.
// */

// Description: "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect"
// Description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases."
//A horror film is one that seeks to elicit fear in its audience for entertainment purposes. Horror films additionally aim to evoke viewers' nightmares, fears, revulsions and terror of the unknown and macabre.",
// Action-Drama Films are serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature, with suspenseful action packed scenes.
//Thriller is a broad film genre that involves excitement and suspense in the audience.

// let user5 = {
//   Username: "Wim22",
//   Password: "wom22",
//   Email: "wim22@aol.com",
//   Birthday: "05/10/79",
//   FavoriteMMovies: [],
// }
// db.users.insertOne(user5)


// //add a favorite





db.users.update(
  { Username: "Kim22" },
  { $push: { FavoriteMovies: ObjectId("601374048db5020db9381740") } }
)







db.movies.update(
  { Title: "Forrest Gump" },
  { $push: { ImagePath: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg" } }
)
db.movies.update(
  { _id: ("6041d69ded472cd0e12ffa4a") },
  { $push: { Title: "Prometheus" } },
)





db.genres.update(
  { Name: "Family" },
  { $push: { GenreMovies: ObjectId("6041cd79ed472cd0e12ffa3c") } }
)





db.directors.update(
  { Name: "Paul Thomas Anderson" },
  { $push: { DirectedMovies: ObjectId("6041baa9ed472cd0e12ffa25") } }
)


db.directors.update(
  { Name: "Ridley Scott" },
  { $pull: { DirectedMovies: ObjectId("6041d69ded472cd0e12ffa4a") } }
)
db.movies.update(
  { Title: "Indiana Jones and the Raiders of the Lost Arc" },
  { $pull: { Genre: ObjectId("601c89d1be3a120428963da4") } }
)






db.movies.deleteOne({ Title: "Forrest Gump" })

db.directors.update({}, { $unset: { GenreMovies: 1 } }, { multi: true });

db.users.update({}, { $unset: { FavorieMovies: 1 } }, { multi: true });

db.movies.update(
  { "_id": ObjectId("6013773e8db5020db9381743") },
  { $set: { Director: [] } })

db.movies.update(
  { "_id": ObjectId("6041a1e3ed472cd0e12ffa06") },
  { $set: { Year: "1992" } })

db.users.update(
  { _id: ObjectId("60139d2d8db5020db938174a") },
  { $set: { FavoriteMovies: [] } }
)


"_id" : ObjectId("6013773e8db5020db9381743")

// //multiple conditions
// db.movies.find(
//   {$and:[{ "Genre.Name": "Comedy" }, { "Director.Name": "Farrelly Brothers"}]}).pretty()

//   _id" : ObjectId("60136f938db5020db938173b")


mongoexport - d myFilmDB - c genres - o genres.json
mongoexport - d myFilmDB - c directors - o directors.json

mongoexport - d myFilmDB - c movies - o movies.json

mongoimport--uri mongodb + srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB --collection genres --type JSON --file ./genres.json
mongoimport--uri mongodb + srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB --collection directors --type JSON --file ./directors.json
mongoimport--uri mongodb + srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB --collection movies --type JSON --file ./movies.json
"mongoimport --uri mongodb+srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB --collection directors --type JSON --file ./directors.json"

// mongo "mongodb+srv://pdcluster.e8sgt.mongodb.net/myFilmDB" --username dill337
// mongo "mongodb+srv://pdcluster.e8sgt.mongodb.net/<dbname>" --username dill337

// mongodb+srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB?retryWrites=true&w=majority
// mongodb+srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB?retryWrites=true&w=majority
