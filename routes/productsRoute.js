const express = require('express');
const productsController = require('../controllers/productsController');

const productsRoute = express.Router();

productsRoute.get('/', productsController.getAll);

productsRoute.get('/:id', productsController.getById);

module.exports = productsRoute;
