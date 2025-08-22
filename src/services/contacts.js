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
