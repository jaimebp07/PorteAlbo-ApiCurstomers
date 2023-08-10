const PeopleContact = require('../models/PeopleContactModel')
// const clientes = require('../data/data');

const peopleContactController = {
    hello: () => {
        return `holaaa`;
    },
    getAllContactInformation: async () => {
        const contacts = await PeopleContact.find()
        return contacts;
    },
    createPeopleContact: async (args) => {
        const { name_pcontact, number_phone_pcontact, email_pcontact, company_pcontact, city_pcontact } = args.peopleContactInput;
        const newPeopleContact = new PeopleContact({ name_pcontact, number_phone_pcontact, email_pcontact, company_pcontact, city_pcontact });
        await newPeopleContact.save();
        return newPeopleContact;
    },
    getPeopleContact: async (args) => {
        const contact = await PeopleContact.findById(args.id);
        return contact;
    },
    deletePeopleContact: async (id) => {
        await PeopleContact.findByIdAndDelete(id);
        return "Contact delete";
    },
    updatePeopleContact: async (id, peopleContactInput) => {
        const contact = await PeopleContact.findByIdAndUpdate(id, {$set: peopleContactInput}, {new: true})
        return contact;
    }
};

module.exports = peopleContactController;

