const salesService = require('../services/salesService');

const getAll = async (_req, res, next) => {
  try {
    const result = await salesService.getAll();
    if (!result) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await salesService.getById(id);
    if (!result) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const addSale = async (req, res, next) => {
  try {
    const sales = req.body;
    const result = await salesService.addSale(sales);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { addSale, getAll, getById };