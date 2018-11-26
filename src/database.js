const mysql = require('mysql');

const mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'luismeza',
    password: 'luismeza',
    database: 'company'
});

mysqlconnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is connected');
    }
});


module.exports = mysqlconnection;