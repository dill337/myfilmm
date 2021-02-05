const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


let movieSchema = mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],

  // // {
  // //   Name: String,
  // //   Description: String
  // },
  Director: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Director' }],
  // {
  //   Name: String,
  //   Bio: String
  // },
  Actors: [String],
  ImagePath: String,
  Featured: Boolean
});

let userSchema = mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.Password)
}

let genreSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  GenreMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

let directorSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Bio: { type: String, required: true },
  Birth: { type: String },
  Death: { type: String },
  DirectedMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
})

let actorSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Bio: { type: String, required: true },
  Birth: { type: String },
  Death: { type: String },
  ActedMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
})

let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);
let Genre = mongoose.model('Genre', genreSchema);
let Director = mongoose.model('Director', directorSchema);
let Actor = mongoose.model('Actor', actorSchema)


module.exports.Movie = Movie;
module.exports.User = User;
module.exports.Genre = Genre;
module.exports.Director = Director;
module.exports.Actor = Actor 