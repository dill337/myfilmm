let movie22 = {
  Title: "Kiss Kiss Bang Bang",
  Description: "A murder mystery brings together a private eye, a struggling actress, and a thief masquerading as an actor.",
  Genre: {
    Name: ["Comedy"],
    Description: "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect"
  },
  Director: {
    Name: "Shane Black",
    Bio: "Shane Black is an American film director.",
    Birth: "1961",
  },
  Year: "2010",
  Actors: ["Robert Downey Junior", "Val Kilmer", "Michelle Monaghan"],
  ImagePath: "https://m.media-amazon.com/images/M/MV5BMTY5NDExMDA3M15BMl5BanBnXkFtZTYwNTc2MzA3._V1_UX182_CR0,0,182,268_AL_.jpg",
  Featured: false
}

db.movies.insertOne(movie22)
// /*
// Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.
// */

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
