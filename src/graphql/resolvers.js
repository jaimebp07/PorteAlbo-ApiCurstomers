const peopleContactController = require('../controllers/peopleContactController')

const resolvers = {
    Query: {
        hello : () => peopleContactController.hello(), 
        // peopleContacts: clienteController.obtenerClientes,
        // peopleContact: (_, { id }) => clienteController.obtenerClientePorId(id),
    },
    // },
    // Mutation: {
    //     createContactInterested: (_, clienteData) => clienteController.createContactInterested(clienteData),
    //     updateContactInterested: (_, clienteData) => clienteController.updateContactInterested(clienteData),
    //     deleteContactInterested: (_, { id }) => clienteController.deleteContactInterested(id),
    // },
  };

module.exports = {resolvers}