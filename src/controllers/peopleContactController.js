
// const clientes = require('../data/data');

const peopleContactController = {
    hello: () => {
        return `holaaa`;
    },
    displayStartupInformation: (req, res) => {
        res.sed({message: "Hola!, Bienvenido." })
    },
    
//   obtenerClientes: () => clientes,
//   obtenerClientePorId: (id) => clientes.find((cliente) => cliente.id === id),
//   crearCliente: (clienteData) => {
//     const nuevoCliente = {
//       id: String(Date.now()),
//       ...clienteData,
//     };
//     clientes.push(nuevoCliente);
//     return nuevoCliente;
//   },
//   actualizarCliente: (clienteData) => {
//     const { id } = clienteData;
//     const clienteExistente = clientes.find((cliente) => cliente.id === id);
//     if (!clienteExistente) {
//       throw new Error(`Cliente con ID ${id} no encontrado`);
//     }
//     Object.assign(clienteExistente, clienteData);
//     return clienteExistente;
//   },
//   eliminarCliente: (id) => {
//     const index = clientes.findIndex((cliente) => cliente.id === id);
//     if (index === -1) {
//       throw new Error(`Cliente con ID ${id} no encontrado`);
//     }
//     const [clienteEliminado] = clientes.splice(index, 1);
//     return clienteEliminado;
//   },
};

module.exports = peopleContactController;
