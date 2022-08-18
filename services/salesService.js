const salesModel = require('../models/salesModel');

const addSale = async (sales) => salesModel.addSale(sales);

const getAll = async () => salesModel.getAll();

const getById = async (id) => salesModel.getById(id);

module.exports = { addSale, getAll, getById };