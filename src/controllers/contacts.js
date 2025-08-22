import { getAllContacts, getContactById } from '../services/contacts.js';
import createHttpError from 'http-errors';
import { createContact, updateContact } from '../services/contacts.js';

// --------- get all
export const getContactsController = async (req, res, next) => {
  const contacts = await getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

// --------------- get by id
export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contact,
  });
};

// ---------------- create (post)
export const createContactController = async (req, res) => {
  const contact = await createContact(req.body);

  if (!req.body.name || !req.body.phoneNumber || !req.body.contactType) {
    return res.status(400).json({
      status: 400,
      message: 'Missing required fields: name, phoneNumber, contactType',
    });
  }

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
};

// ----------- edit (patch)
export const patchContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);

  if (!result) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  res.json({
    status: 200,
    message: 'Successfully patched a student!',
    data: result.contact,
  });
};
