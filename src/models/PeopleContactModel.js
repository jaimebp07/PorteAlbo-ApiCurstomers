import { Schema, model } from 'mongoose'

const contactInformationSchema = new Schema({
  nameContact: {
    type: String,
    required: true
  },
  numberPhoneContact: {
    type: String,
    required: true
  },
  emailContact: {
    type: String,
    required: true
  },
  companyContact: {
    type: String,
    required: true
  },
  cityContact: {
    type: String,
    required: true
  }
})

const PeopleContact = model('PeopleContact', contactInformationSchema)

export default PeopleContact
