const express = require('express');
const server = express();
server.use(express.json());
const Cars = require('../cars/carsModel')
module.exports = server;

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});
  
server.get('/cars', (req, res) => {
    Cars.getAll()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
        res.status(500).json({ error:`Problem with server.js get/cars getAll()-${error}`})
    })
})

