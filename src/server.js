import express from 'express';
import { getAllContacts } from './services/contacts';

const app = express();

app.get('/contacts', getAllContacts);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
