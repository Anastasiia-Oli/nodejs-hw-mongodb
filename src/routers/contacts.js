import { Router } from 'express';

import {
  getContactsController,
  getContactByIdController,
} from '../controllers/contacts.js';

const router = Router();

// all contacts
router.get('/contacts', getContactsController);

// contact by id
router.get('/contacts/:contactId', getContactByIdController);

export default router;
