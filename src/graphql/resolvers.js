const peopleContactController = require('../controllers/peopleContactController')

const resolvers = {
  Query: {
    hello: () => peopleContactController.hello(),
    getAllContactInformation: () => peopleContactController.getAllContactInformation(),
    getPeopleContact: (_, args) => peopleContactController.getPeopleContact(args),
    deletePeopleContact: (_, {id}) => peopleContactController.deletePeopleContact(id),
  },
  Mutation: {
    createPeopleContact: (_, args, context, info) => peopleContactController.createPeopleContact(args),
  }
};

module.exports = { resolvers }
