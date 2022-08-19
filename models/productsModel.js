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

const update = async ({ name, id }) => {
  await connection.execute('UPDATE products SET name = ? WHERE id = ?;', [name, id]);
  return { id, name };
};

const destroy = async (id) => connection.execute('DELETE FROM products WHERE id = ?;', [id]);

module.exports = {
  getAll,
  getById,
  addProduct,
  update,
  destroy,
};