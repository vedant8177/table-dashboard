const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("successfully connected to database");
});

// const order = `INSERT INTO users VALUES ('', 'aditya', 'inamdar', 'adityainamdar007@gmail.com', 'raidenshogun');`;
// connection.query(order, (err, result, fields) => {
//         if (err) throw err;
//         console.log(result);
//     }
// );

module.exports = connection;