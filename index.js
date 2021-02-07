const express = require("express");
bodyParser = require('body-parser'),
  uuid = require("uuid");
morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const Models = require('./models.js');
require('dotenv').config({ path: '.env' })


const passport = require('passport');
require('./passport');
const { check, validationRequest, validationResult } = require('express-validator')

const Movies = Models.Movie;
const Users = Models.User;
const Genres = Models.Genre;
const Directors = Models.Director;
const Actors = Models.Actor;

// mongoose.connect('mongodb://localhost:27017/myFilmDB', { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect('mongodb+srv://dill337:4CovXh3bvoYIeBV2@pdcluster.e8sgt.mongodb.net/myFilmDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const cors = require('cors');



// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       let message = 'The CORs policy for this application doesn\'t allow acces from origin ' + origin;
//       return callback(new Error(message), false);
//     }
//     return callback(null, true);
//   }
// }));

let allowedOrigins = ['*']
// ['http://localhost:8080',
//   'http://localhost:1234',
//   'http://testsite.com',
//   'https://myfilmm.herokuapp.com/movies'
// ]

app.use(cors());

app.use(express.static('public'));
app.use(morgan('common'));
app.use(bodyParser.json());

let auth = require('./auth')(app);




// Get requests
app.get('/', (req, res) => {
  res.send('Some Good Movies');
});

//Returns a list of all movies *
app.get('/movies', (req, res) => {
  Movies.find()
    .then((movies) => {
      res.status(201).json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

app.get('/genres', passport.authenticate('jwt', { session: false }), (req, res) => {
  Genres.find()
    .then((movies) => {
      res.status(201).json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
})

app.get('/genres/:Name', passport.authenticate('jwt', { session: false }), (req, res) => {
  Genres.find({ Name: req.params.Name })
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

app.get('/directors', passport.authenticate('jwt', { session: false }), (req, res) => {
  Directors.find()
    .then((directors) => {
      res.status(201).json(directors);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});


//returns data on a specific movie *
app.get('/movies/:Title', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ Title: req.params.Title })
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

//   res.json(movies.find((movie) => { return movie.title === req.params.title }));
//   res.send('Here is a specific movie')
// })

//returns data about a genre by name
app.get('movies/genres/:Name', passport.authenticate('jwt', { session: false }), (req, res) => {
  Genres.find({ Name: req.params.Name })
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// res.send('Here is the genre you selected')

// })

//returns data about a director (bio, birth year, death year) by name
app.get('/director/:name', (req, res) => {

  if (!director.name) {
    const message = "We don't have anything by this director";
    res.status(400).send(message);
  } else {
    res.send('A little about the director you chose')
  }

})

//Get all users 
app.get('/users', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.find()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

//get user by username 
app.get('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOne({ Username: req.params.Username })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});
//new user register
/* expect in JSON format
{
  ID: Integer,
  Username: String,
  Password: String,
  Email: String,
  Birthday: Date 
}
*/
app.post('/users',
  //validation logic here for request 
  // can use a chain of methods like .not().isEmpty() or isLength({min: 5})
  [
    check('Username', 'Username is required').isLength({ min: 5 }),
    check('Username', 'Username contains non alphanumeric characters - not allowed').isAlphanumeric(),
    check('Password', 'Password is required').not().isEmpty(),
    check('Email', 'Email does not appear to be valid').isEmail()
  ],
  (req, res) => {
    //check the validation object for errors 
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    let hashedPassword = Users.hashPassword(req.body.Password);
    Users.findOne({ Username: req.body.Username })
      .then((user) => {
        if (user) {
          return res.status(400).send(req.body.Username + ' already exists');
        } else {
          Users
            .create({
              Username: req.body.Username,
              Password: hashedPassword,
              Email: req.body.Email,
              Birthday: req.body.Birthday
            })
            .then((user) => { res.status(201).json(user) })
            .catch((error) => {
              console.error(error);
              res.status(500).send('Error: ' + error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
      });
  });

//update a user's info by username
/* Expect JSON in this format 
{
  Username: string (required)
  Password: String, (required)
  Email: String, (required)
  Birthday: Date 
}
*/
app.put('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
    $set:
    {
      Username: req.body.Username,
      Password: req.body.Password,
      Email: req.body.Email,
      Birthday: req.body.Birthday
    }
  },
    { new: true }, // this line makes sure that the updated document is returned
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    });
});

// add a movie to a user's list of favorites 
app.post('/users/:Username/Movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
    $push: { FavoriteMovies: req.params.MovieID }
  },
    { new: true }, // this makes sure the document is returned 
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    });
});

//add a movie to a genre
app.post('/genres/:Name/Movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
  Genres.findOneAndUpdate({ Name: req.params.Name }, {
    $push: { GenreMovies: req.params.MovieID }
  },
    { new: true }, // this makes sure the document is returned 
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    });
});

app.post('/movies/:Title/Genres/:GenreID', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOneAndUpdate({ Title: req.params.Title }, {
    $push: { Genre: req.params.GenreID }
  },
    { new: true }, // this makes sure the document is returned 
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    });
});


//user can delete a movie from their favorites
app.delete('/users/:Username/Movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {

  Users.findOneAndUpdate({ Username: req.params.Username }, {
    $pull: { FavoriteMovies: req.params.MovieID }
  },
    { new: true }, // this makes sure the document is returned 
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    });
});


//delete a user by username 
app.delete('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndRemove({ Username: req.params.Username })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.Username + ' was not found');
      } else {
        res.status(200).send(req.params.Username + ' was deleted');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});


// app.listen(8080, () => {
//   console.log('Your app is listening on port 8080')
// });
const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log('Listening on Port ' + port);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something Broke');
});


