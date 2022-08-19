const connection = require('./connection');

const getById = async (id) => {
  const querySQL = `SELECT S.date,
                    SP.product_id AS productId,
                    SP.quantity
                    FROM sales AS S
                    INNER JOIN sales_products AS SP
                    ON S.id = SP.sale_id
                    WHERE S.id = ?;`;
  const [sale] = await connection.execute(querySQL, [id]);
  return sale;
};

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

const getAll = async () => {
  const querySQL = `SELECT S.id AS saleId,
                    S.date,
                    SP.product_id AS productId,
                    SP.quantity
                    FROM sales AS S
                    INNER JOIN sales_products AS SP
                    ON S.id = SP.sale_id;`;
  const [allSales] = await connection.execute(querySQL);
  return allSales;
};

module.exports = { addSale, getAll, getById };