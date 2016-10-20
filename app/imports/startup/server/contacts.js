import {Contacts} from '../../api/contacts/contacts.js';
import {_} from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds =[
  {
    first: 'Preston',
    last: 'Exzabe',
    address: '55-555 Dole st.',
    telephone: '808-772-1439',
    email: 'pexzabe@hawaii.edu'
  },
  {
    first: 'Henri',
    last: 'Casanova',
    address: '55-555 Dole st.',
    telephone: '808-772-1439',
    email: 'pexzabe@hawaii.edu'
  },
  {
    first: 'John',
    last: 'Doe',
    address: '55-555 Dole st.',
    telephone: '808-772-1439',
    email: 'pexzabe@hawaii.edu'
  },
  {
    first: 'Jane',
    last: 'Doe',
    address: '55-555 Dole st.',
    telephone: '808-772-1439',
    email: 'pexzabe@hawaii.edu'
  },

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
