const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const result = await productsService.getAll();
  if (!result || result.length === 0) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const [result] = await productsService.getById(id);
  if (!result || result.length === 0) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(result);
};

const addProduct = async (req, res) => {
  const { name } = req.body;
  const response = await productsService.addProduct(name);
  return res.status(201).json(response);
};

module.exports = {
  getAll,
  getById,
  addProduct,
};