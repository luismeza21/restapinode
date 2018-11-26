const express = require('express');
const router = express.Router();
//Se inicia conexion con la base de datos
const mysqlconnection = require('../database');
// ruta definida para consulta 
router.get('/employees', (req, res) => {
    mysqlconnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if (!err) {
            res.json(rows);

        } else {
            console.log(err);
        }
    })
});

router.get('/employee/:id', (req, res) => {
    const { id } = req.params;
    mysqlconnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);

        } else {
            console.log(err);
        }
    });
});

router.post('/employee/create', (req, res) => {
    const {name, salary} =  req.body;
   
    var sql = 'INSERT INTO `employees` (`name`, `salary`) VALUES(?, ?)';
    mysqlconnection.query(sql, [name, salary], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Employeed saved'});
        } else {
            res.json({Status: 'Error '}, err);
            console.log(err);
        }
    });

});

module.exports = router;