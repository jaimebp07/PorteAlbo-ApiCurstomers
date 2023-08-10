const peopleContactController = require('../controllers/peopleContactController')

const resolvers = {
  Query: {
    hello: () => peopleContactController.hello(),
    getAllContactInformation: () => peopleContactController.getAllContactInformation(),
    getPeopleContact: (_, args) => peopleContactController.getPeopleContact(args),
  },
  Mutation: {
    createPeopleContact: (_, args, context, info) => peopleContactController.createPeopleContact(args),
    
  }
};

module.exports = { resolvers }
