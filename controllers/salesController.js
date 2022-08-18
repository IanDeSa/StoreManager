const salesService = require('../services/salesService');

const addSale = async (req, res, next) => {
  try {
    const sales = req.body;
    const response = await salesService.addSale(sales);
    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { addSale };