import PeopleContact from '../models/PeopleContactModel.js'

const peopleContactController = {
  hello: () => {
    return 'holaaa'
  },
  getAllContactInformation: async () => {
    const contacts = await PeopleContact.find()
    return contacts
  },
  createPeopleContact: async (args) => {
    const { nameContact, numberPhoneContact, emailContact, companyContact, cityContact } = args.peopleContactInput
    const newPeopleContact = new PeopleContact({ nameContact, numberPhoneContact, emailContact, companyContact, cityContact })
    await newPeopleContact.save()
    return newPeopleContact
  },
  getPeopleContact: async (args) => {
    const contact = await PeopleContact.findById(args.id)
    return contact
  },
  deletePeopleContact: async (id) => {
    await PeopleContact.findByIdAndDelete(id)
    return 'Contact delete'
  },
  updatePeopleContact: async (id, peopleContactInput) => {
    const contact = await PeopleContact.findByIdAndUpdate(id, { $set: peopleContactInput }, { new: true })
    return contact
  }
}

export default peopleContactController
