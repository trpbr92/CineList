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
  let user_id = req.body.user_id;
  let film_id = req.body.film_id;
  console.log('in add to watchlist POST:', user_id, film_id);
  queryText = `INSERT INTO "userlists" ("user_id", "film_id") VALUES ($1, $2);`;
  pool.query( queryText [user_id, film_id]).then((results) => {
    res.sendStatus(200);
  }).catch ((error) => {
    console.log('error in POST');
    res.sendStatus(500);
  })
})

module.exports = router;
