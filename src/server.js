import express from 'express';
import { getAllContacts } from './services/contacts.js';

const app = express();

app.get('/contacts.json', getAllContacts);

const PORT = process.env.PORT || 3000;
const setupServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

export default setupServer;
