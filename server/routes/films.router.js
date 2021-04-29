const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// /**
//  * GET route template
//  */
// router.get('/', (req, res) => {
//     const query = `SELECT * FROM "films" ORDER BY "title" ASC;`;
//     pool.query(query)
//     .then(result => {
//         res.send(result.rows);
//     })
//     .catch(err => {
//         console.log('ERROR in GET films', err);
//         res.sendStatus(500)
//     })
// });

//GET route for getting individual film profile


router.get('/:filmId', ( req, res )=>{
    filmId = req.params["filmId"]
    console.log( 'in film details GET', filmId );
    //need movie description from movies table and genres from genre table
    //join statement in query
    const queryText = `SELECT * FROM "films" WHERE id = $1;`;
    pool.query( queryText, [ filmId ] )
    .then( ( results )=>{
      res.send( results.rows );
    })
    .catch ( ( err )=>{
      console.log( 'err in movieId GET', err );
      res.sendStatus( 500 );
    })
  })

router.post('/', (req, res) => {
  console.log(req.body);
  queryText = `INSERT INTO "userlists" ("user_id", "film_id") VALUES ($1, $2);`;
  pool.query( queryText, [req.body.userId, req.body.filmID]).then((results) => {
    res.sendStatus(201);
  }).catch ((err) => {
    console.log('error in POST', err);
    res.sendStatus(500);
  })
})

router.put('/', (req, res) => {
  console.log('in PUT for rating:', req.body);
  const number = Number.parseInt(req.body.rating);
  let queryText = `UPDATE "userlists" SET "rating" = ($1) WHERE "id"= ($2);`;
  pool.query(queryText, [number ,req.body.id]).then((results) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('error in PUT rating');
  })
})  

module.exports = router;
