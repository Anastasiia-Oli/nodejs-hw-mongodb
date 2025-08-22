import { Router } from 'express';

import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

// all contacts
router.get('/contacts', ctrlWrapper(getContactsController));

// contact by id
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

// create contact
router.post('/contacts', ctrlWrapper(createContactController));

// edit contact
router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

// delete contact
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;
