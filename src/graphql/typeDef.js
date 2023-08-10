const { gql } = require('apollo-server-express');

const typeDefs = gql `
  type PeopleContact {
    id: ID
    name_pcontact: String
    number_phone_pcontact: String
    email_pcontact: String
    company_pcontact: String
    city_pcontact: String
  }

  type Query {
    hello : String!
    getAllContactInformation: [PeopleContact]
    getPeopleContact(id: ID): PeopleContact
    deletePeopleContact(id: ID): String
  }

  input PeopleContactInput {
    name_pcontact: String
    number_phone_pcontact: String
    email_pcontact: String
    company_pcontact: String
    city_pcontact: String
  }

  type Mutation {
    createPeopleContact(peopleContactInput: PeopleContactInput): PeopleContact
  }
`;

module.exports = {typeDefs}