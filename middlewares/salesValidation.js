const validationSales = {
  isRequired: async (req, res, next) => {
    const sales = req.body;
    const products = sales.every((sale) => Object.keys(sale).includes('productId'));
    const quantitys = sales.every((sale) => Object.keys(sale).includes('quantity'));
    const valueZero = sales.some((sale) => sale.quantity <= 0);

    switch (true) {
      case (!products):
        return res.status(400).json({ message: '"productId" is required' });
      case (valueZero):
        return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
      case (!quantitys):
        return res.status(400).json({ message: '"quantity" is required' });
      default:
        break;
    }
    next();
  },
};

module.exports = validationSales;