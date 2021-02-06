let movie23 = {
  Title: "Total Recall",
  Description: "When a man goes in to have virtual vacation memories of the planet Mars implanted in his mind, an unexpected and harrowing series of events forces him to go to the planet for real - or is he?",
  Genre: {
    Name: ["Action"],
    Description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases."
  },
  Director: {
    Name: "Paul Verhoeven",
    Bio: "Paul Verhoeven is a Dutch film director",
    Birth: "1938",
  },
  Year: "1990",
  Actors: ["Arnold Schwarzenegger", "Sharon Stone", "Michael Ironside"],
  ImagePath: "https://m.media-amazon.com/images/M/MV5BYzU1YmJjMGEtMjY4Yy00MTFlLWE3NTUtNzI3YjkwZTMxZjZmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  Featured: false
}

db.movies.insertOne(movie23)


let genre6 = {
  Name: "Drama",
  Description: "In film and television, drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.",
  GenreMovies: [],
}

db.genres.insertOne(genre6)


let director2 = {
  Name: "Farrelly Brothers",
  Bio: "Peter John Farrelly was born in Phoenixville, Pennsylvania, Bobby Farrelly was born in Cumberland, Rhode Island.",
  Birth: "Peter - 1956, Bobby 1958",
  DirectedMovies: []
}

db.directors.insertOne(director2)


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
  { Title: "The Lobster" },
  { $push: { Genre: ObjectId("601d99c86cbb7f9a6b6cfe49") } }
)

db.movies.update(
  { Title: "Sicario" },
  { $push: { Director: ObjectId("601c8a5ebe3a120428963da7") } }
)

db.genres.update(
  { Name: "Horror" },
  { $push: { GenreMovies: ObjectId("601371cf8db5020db938173d") } }
)

db.movies.update(
  { "_id": ObjectId("6013773e8db5020db9381743") },
  { $set: { Director: [] } })



"_id" : ObjectId("6013773e8db5020db9381743")

// //multiple conditions
// db.movies.find(
//   {$and:[{ "Genre.Name": "Comedy" }, { "Director.Name": "Farrelly Brothers"}]}).pretty()

//   _id" : ObjectId("60136f938db5020db938173b")


// mongoimport --uri mongodb+srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB --collection genres --type JSON --file ./genres.json
mongoimport--uri mongodb + srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB --collection movies --type json --file ./movies.json

// mongo "mongodb+srv://pdcluster.e8sgt.mongodb.net/myFilmDB" --username dill337
// mongo "mongodb+srv://pdcluster.e8sgt.mongodb.net/<dbname>" --username dill337

// mongodb+srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB?retryWrites=true&w=majority
// mongodb+srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB?retryWrites=true&w=majority
