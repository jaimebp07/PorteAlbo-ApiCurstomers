const peopleContactController = require('../controllers/peopleContactController')

const resolvers = {
  Query: {
    hello: () => peopleContactController.hello(),
    getAllContactInformation: () => peopleContactController.getAllContactInformation(),
    getPeopleContact: (_, args) => peopleContactController.getPeopleContact(args),
  },
  Mutation: {
    createPeopleContact: (_, args, context, info) => peopleContactController.createPeopleContact(args),
    deletePeopleContact: (_, {id}) => peopleContactController.deletePeopleContact(id),
    updatePeopleContact: (_, {id, peopleContactInput}) => peopleContactController.updatePeopleContact(id, peopleContactInput),

  }
};

module.exports = { resolvers }
