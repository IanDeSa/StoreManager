const express = require('express');
const app = require('./app');
const routes = require('./routes');
const error = require('./middlewares/error');

app.use(express.json());
require('dotenv').config();

app.use('/products', routes.productsRoute);

app.use(error);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
