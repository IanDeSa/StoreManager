const express = require('express');
const productsController = require('../controllers/productsController');
const validation = require('../middlewares/valitationProducts');

const productsRoute = express.Router();

productsRoute.get('/', productsController.getAll);

productsRoute.get('/:id', productsController.getById);

productsRoute.post('/', validation.nameIsRequired, productsController.addProduct);

productsRoute.put('/:id', validation.nameIsRequired, productsController.update);

productsRoute.delete('/:id', productsController.destroy);

module.exports = productsRoute;
