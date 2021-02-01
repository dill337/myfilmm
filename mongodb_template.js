// let movie16 = {
//   Title: "Snatch",
//   Description: "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
//   Genre: {
//     Name: ["Action-Drama"],
//     Description: "Action-Drama Films are serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature, with suspenseful action packed scenes."
//   },
//   Director: {
//     Name: "Guy Ritchide",
//     Bio: "Guy Ritchie is an English film director.",
//     Birth: "1968",
//   },
//   Actors: ["Brad Pitt", "Jason Statham", "Benicio Del Toro", "Dennis Farina"],
//   ImagePath: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7Hi3ThNLimq1gdEB45DoMdXdb73Mkg5RlFJ5l2D8dfy9JsaiK",
//   Featured: false
// }

// db.movies.insertOne(movie16)
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