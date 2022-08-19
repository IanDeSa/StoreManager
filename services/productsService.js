const productsModel = require('../models/productsModel');

const getAll = async () => productsModel.getAll();

const getById = async (id) => {
  const [result] = await productsModel.getById(id);
  if (!result) return null;
  return result;
};

const addProduct = async (name) => productsModel.addProduct(name);

const update = async ({ name, id }) => {
  const result = await productsModel.update({ name, id });
  if (!result) return false;
  return result;
};

const destroy = async (id) => {
  const validation = await getById(id);
  console.log(validation);
  if (!validation) return null;
  return productsModel.destroy(id);
};

module.exports = {
  getAll,
  getById,
  addProduct,
  update,
  destroy,
};