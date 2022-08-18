const express = require('express');
const salesController = require('../controllers/salesController');
const validation = require('../middlewares/salesValidation');

const salesRoute = express.Router();

salesRoute.post('/', validation.isRequired, salesController.addSale);

module.exports = salesRoute;