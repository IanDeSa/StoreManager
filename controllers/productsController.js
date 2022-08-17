const productsService = require('../services/productsService');

const message = { message: 'Product not found' };

const getAll = async (_req, res, next) => {
  try {
    const result = await productsService.getAll();
    // if (!result || result.length === 0) return res.status(404).json(message);
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [result] = await productsService.getById(id);
    if (!result || result.length === 0) return res.status(404).json(message);
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const response = await productsService.addProduct(name);
    return res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  addProduct,
};