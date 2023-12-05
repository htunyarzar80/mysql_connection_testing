var express = require('express')
var mysql = require('mysql')

var app = express()

app.use(express.json)

const databaseConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database: 'testdb'
})

databaseConnection.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Database is connected !')
    }
})