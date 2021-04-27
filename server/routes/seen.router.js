const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.get('/', (req, res) => {
    const query = 
    `SELECT "user".id, "films".title, "films".description, "films".poster_url, "userlists".rating, "userlists".seen FROM "userlists"
    JOIN "user" ON "user".id = "userlists".user_id
    JOIN "films" ON "films".id = "userlists".film_id
    WHERE "seen" = TRUE;`; 
    pool.query(query)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR in GET seen', err);
        res.sendStatus(500)
    })
});


// router.put('/', (req, res) => {
//     console.log('in PUT for seen:', req.params);
//     let queryText = `UPDATE "userlists" SET "seen" = TRUE WHERE "id" =$1;`;
//     pool.query(queryText, [req.params.id]).then((results) => {
//       res.sendStatus(200);
//     }).catch((error) => {
//       console.log('error in PUT');
//     })
//   })  
  

module.exports = router;