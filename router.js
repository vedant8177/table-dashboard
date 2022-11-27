const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('./db/connection');

router.get('/', (req, res) => {
    connection.query(
        `SELECT * FROM users`,
        (err, result, fields) => {
        if (err) {throw err;}
        else {
            res.render('index', { data: result });
        }
    }
    )
});

router.post('/dashboard', (req, res) => {
    let fname = req.body.firstName;
    let lname = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let sql = `INSERT INTO users VALUES ('', ?, ?, ?, ?)`;
    connection.query(sql, [fname, lname, email, password], (err, result, fields) => {
        if (err) throw err;
        else
        {
            return res.redirect('/')
        }
    });
});

router.post('/delete', (req, res) => {
    let uid = req.body.id;
    let sql = `DELETE FROM users WHERE id= ?`;
    connection.query(sql, [uid], (err) => {
        if (err) throw err;
        else {
            res.redirect('/');
        }
    });
});


module.exports = router;