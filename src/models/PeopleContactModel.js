import { Schema, model } from 'mongoose';

const contactInformationSchema = new Schema({
  name_pcontact: {
    type: String,
    required: true
  },
  number_phone_pcontact: {
    type: String,
    required: true
  },
  email_pcontact: {
    type: String,
    required: true
  },
  company_pcontact: {
    type: String,
    required: true
  },
  city_pcontact: {
    type: String,
    required: true
  }
});

const PeopleContact = model('PeopleContact', contactInformationSchema);

export default PeopleContact;