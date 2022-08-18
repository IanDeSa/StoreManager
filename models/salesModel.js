const connection = require('./connection');

const idSale = async () => {
  const [sale] = await connection.execute('INSERT INTO sales (date) VALUES (now());');
  return sale.insertId;
};

const addSale = async (sales) => {
  const saleId = await idSale();
  const querySQL = `INSERT INTO
                    sales_products (sale_id, product_id, quantity)
                    VALUES (?,?,?);`;

  Promise.all(sales
    .map((sale) => connection.execute(querySQL, [saleId, sale.productId, sale.quantity])));
  return { id: saleId, itemsSold: sales };
};

module.exports = { addSale }; 
