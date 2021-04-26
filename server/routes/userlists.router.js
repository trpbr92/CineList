const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `SELECT "user".id, "films".title, "films".description, "films".poster_url FROM "userlists"
JOIN "user" ON "user".id = "userlists".user_id
JOIN "films" ON "films".id = "userlists".film_id;`;
    pool.query(query)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR in GET films', err);
        res.sendStatus(500)
    })
});

module.exports = router;