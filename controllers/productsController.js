const productsService = require('../services/productsService');

const message = { message: 'Product not found' };

const getAll = async (_req, res, next) => {
  try {
    const result = await productsService.getAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [result] = await productsService.getById(id);
    if (!result || result.length === 0) return res.status(404).json(message);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await productsService.addProduct(name);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  addProduct,
};