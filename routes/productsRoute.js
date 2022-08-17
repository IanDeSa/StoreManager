const express = require('express');
const productsController = require('../controllers/productsController');
const validation = require('../middlewares/valitationProducts');

const productsRoute = express.Router();

productsRoute.get('/', productsController.getAll);

productsRoute.get('/:id', productsController.getById);

productsRoute.post('/', validation.nameIsRequired, productsController.addProduct);

module.exports = productsRoute;
