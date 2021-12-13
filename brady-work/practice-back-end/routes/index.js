var express = require('express');
var router = express.Router();
// require('../db/connection')
var People = require('../model/People')
var mouseService = require('../service/mouseService')

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const people = [
  { name: 'Brady', favoriteColor: 'blue', says: 'Its too early for these kinds of questions Donnie' },
  { name: 'Auzy', favoriteColor: 'green', says: 'I love Jungle' },
  { name: 'Scott', favoriteColor: 'green', says: 'I love Neville' },
  { name: 'Neville', favoriteColor: 'gray', says: 'Bork Bork' },
]

router.get('/person', function (req, res, next) {

  res.setHeader('Content-Type', 'application/json');

  res.json(people.map(person => ({ name: person.name, favoriteColor: person.favoriteColor })));
});

router.get('/person/:name', function (req, res, next) {

  res.setHeader('Content-Type', 'application/json');

  res.json(
    people
      .find((person) => person.name === req.params.name)
      .says
  )
})

router.post('/person', function (req, res, next) {
  const person = new People.People({ name: 'Donnie', favoriteColor: 'yellow', says: 'I want my burrito' })
  person.save(function (err) {
    console.error(err)
  })
})

// {
//   "length": {
//     "min": 79,
//       "max": 100
//   }
// }

router.get('/parts/mouse', function (req, res, next) {
  mouseService.getMice((rows) => {
    res.json(rows)
  })
})

router.post('/parts/mouse', function (req, res, next) {
  const DEFAULT_DIMENSIONS = {
    length: {
      min: 0,
      max: 1000000
    },
    width: {
      min: 0,
      max: 1000000
    },
    height: {
      min: 0,
      max: 1000000
    },
    weight: {
      min: 0,
      max: 1000000
    },
  }
  // console.log(req);
  const params = {
    ...DEFAULT_DIMENSIONS,
    ...req.body.dimensions
  }
  mouseService.getMiceByDimensions(params, (rows) => {
    console.log(rows)
    res.json(rows)
  })
})

module.exports = router;
