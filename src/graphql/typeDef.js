const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello : String!
  }
`;

// const typeDefs = gql`
//   type peopleContact {
//     id: ID!
//     nombre: String!
//     numeroTelefonico: String!
//     empresa: String!
//     ciudad: String!
//     ubicada: String!
//   }

//   type Query {
//     InterestedContacts: [Cliente!]!
//     contactInterested(id: ID!): Cliente
//   }

//   type Mutation {
//     createContactInterested(nombre: String!, numeroTelefonico: String!, empresa: String!, ciudad: String!, ubicada: String!): Cliente!
//     updateContactInterested(id: ID!, nombre: String, numeroTelefonico: String, empresa: String, ciudad: String, ubicada: String): Cliente
//     deleteContactInterested(id: ID!): Cliente
//   }
// `;

module.exports = {typeDefs}