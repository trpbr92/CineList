const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    const query = 
    `SELECT "userlists".id, "films".title, "films".description, "films".poster_url, "userlists".rating, "userlists".seen FROM "userlists"
    JOIN "user" ON "user".id = "userlists".user_id
    JOIN "films" ON "films".id = "userlists".film_id
    WHERE "seen" = TRUE
    ORDER BY "films" ASC;`; 
    pool.query(query)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR in GET seen', err);
        res.sendStatus(500)
    })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in PUT for seen:', req.params);
    let queryText = `UPDATE "userlists" SET "seen" = DEFAULT WHERE "id" =$1;`;
    pool.query(queryText, [req.params.id]).then((results) => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log('error in PUT FALSE');
    })
  })  


module.exports = router;