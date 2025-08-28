// import createHttpError from 'http-errors';

// import { ROLES } from '../constants/index.js';
// import { ContactsCollection } from '../db/models/contacts.js';

// // accepting roles
// export const checkRoles =
//   (...roles) =>
//   async (req, res, next) => {
//     // check user presence
//     const { user } = req;
//     if (!user) {
//       next(createHttpError(401));
//       return;
//     }

//     // check user role
//     const { role } = user;
//     if (roles.includes(ROLES.ADMIN) && role === ROLES.ADMIN) {
//       next();
//       return;
//     }

//     //   check USER role
//     if (roles.includes(ROLES.USER) && role === ROLES.USER) {
//       const { contactId } = req.params;
//       if (!contactId) {
//         next(createHttpError(403));
//         return;
//       }

//       const contact = await ContactsCollection.findOne({
//         _id: contactId,
//         userId: user._id,
//       });

//       if (contact) {
//         next();
//         return;
//       }
//     }
//     next(createHttpError(403));
//   };
