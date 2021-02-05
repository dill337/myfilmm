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


let genre5 = {
  Name: "Horror",
  Description: "A horror film is one that seeks to elicit fear in its audience for entertainment purposes. Horror films additionally aim to evoke viewers' nightmares, fears, revulsions and terror of the unknown and macabre.",
  GenreMovies: [],
}

db.genres.insertOne(genre5)


let director8 = {
  Name: "Yorgos Lanthimos",
  Bio: "Yorgos Lanthimos was born in Athens, Greece. He studied directing for Film and Television at the Stavrakos Film School in Athens. He has directed a number of dance videos in collaboration with Greek choreographers, in addition to TV commercials, music videos, short films and theater plays.",
  Birth: "1973",
  DirectedMovies: []
}

db.directors.insertOne(director8)


// /*
// Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.
// */

// Description: "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect"
// Description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases."


// let user5 = {
//   Username: "Wim22",
//   Password: "wom22",
//   Email: "wim22@aol.com",
//   Birthday: "05/10/79",
//   FavoriteMMovies: [],
// }
// db.users.insertOne(user5)


// //add a favorite
// db.users.update(
//   { Username: "Rim22" },
//   { $push: { FavoriteMovies: ObjectId("601374048db5020db9381740") } }
// )

// //multiple conditions
// db.movies.find(
//   {$and:[{ "Genre.Name": "Comedy" }, { "Director.Name": "Farrelly Brothers"}]}).pretty()

//   _id" : ObjectId("60136f938db5020db938173b")


// mongoimport --uri mongodb+srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB --collection movies --type JSON --file ./movies.json
// mongoimport --uri mongodb+srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB --collection movies --type json --file ./movies.json

// mongo "mongodb+srv://pdcluster.e8sgt.mongodb.net/myFilmDB" --username dill337
// mongo "mongodb+srv://pdcluster.e8sgt.mongodb.net/<dbname>" --username dill337

// mongodb+srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB?retryWrites=true&w=majority
// mongodb+srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB?retryWrites=true&w=majority
