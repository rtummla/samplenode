//app.js
const express = require('express');
const cors = require('cors');
const app= express();

app.use(cors());
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kuchipudidance',
    database: 'accounts'
});
  
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

app.get('/contacts', (req, res) => {
    connection.query("select * from accounts", (err, rows, fields) =>{
    console.log(rows);
    res.json(rows);    
    });
});
app.get('/payments', (req, res) => {
    connection.query("select * from payments", (err, rows, fields) =>{
    console.log(rows);
    res.json(rows);    
    });
});

app.get('/invoice', (req, res) => {
    connection.query("select * from invoice", (err, rows, fields) =>{
    console.log(rows);
    res.json(rows);    
    });
});
