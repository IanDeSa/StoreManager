const productsModel = require('../models/productsModel');

const getAll = async () => productsModel.getAll();

const getById = async (id) => productsModel.getById(id);

const addProduct = async (name) => productsModel.addProduct(name);

module.exports = {
  getAll,
  getById,
  addProduct,
};