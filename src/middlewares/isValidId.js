// src/middlewares/isValidId.js

import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    throw createHttpError(400, 'id is not valid');
  }

  next();
};