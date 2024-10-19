const express = require('express');
const cors = require('cors');
const pino = require('pino')();

const setupServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // Логування за допомогою pino
  app.use((req, res, next) => {
    pino.info(`${req.method} ${req.url}`);
    next();
  });

  // Обробка неіснуючих маршрутів
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  return app;
};

module.exports = setupServer;
const { getContact } = require('./utils/env');
app.get('/contacts/:contactId', getContact);
