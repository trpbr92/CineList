const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.get('/:search', rejectUnauthenticated, (req, res) => {
    const query = `SELECT * FROM "films" WHERE UPPER("title") LIKE UPPER( '%' || $1 || '%');`;
    console.log('in search', req.params.search);
    pool.query(query, [req.params.search])
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR with GET search', err);
        res.sendStatus(500);
    })
});

module.exports = router;