const salesModel = require('../models/salesModel');
const productsService = require('./productsService');

const getById = async (id) => {
  const result = await salesModel.getById(id);
  if (!result || result.length === 0) return null;
  return result;
};

const getAll = async () => {
  const result = await salesModel.getAll();
  if (!result) return null;
  return result;
};

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const addSale = async (sales) => {
  const notFound = await sales.reduce(async (acc, cur) => {
    const validateById = await productsService.getById(cur.productId);
    if (!validateById) return true;
    return acc;
  }, false);
  if (notFound) return null;
  return salesModel.addSale(sales);
};

module.exports = { addSale, getAll, getById };