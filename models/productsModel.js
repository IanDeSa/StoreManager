const connection = require('./connection');

const getAll = async () => { 
  const [result] = await connection.execute('SELECT * FROM products;');
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute('SELECT * FROM products WHERE id = ?;', [id]);
  return result;
};

const addProduct = async (name) => {
  const [product] = await connection.execute(
    'INSERT INTO products (name) VALUES (?);',
    [name],
  );
  return { id: product.insertId, name };
};

module.exports = {
  getAll,
  getById,
  addProduct,
};