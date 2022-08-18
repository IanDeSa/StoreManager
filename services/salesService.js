const salesModel = require('../models/salesModel');

const addSale = async (sales) => salesModel.addSale(sales);

module.exports = { addSale };