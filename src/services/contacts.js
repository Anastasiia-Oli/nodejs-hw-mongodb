import { ContactsCollection } from '../db/models/contacts.js';

// get all
export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

// get id
export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};
