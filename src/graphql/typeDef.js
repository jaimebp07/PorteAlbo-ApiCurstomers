import { gql } from 'apollo-server-express';

const typeDefsModule = gql `
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
    deletePeopleContact(id: ID!): String
    updatePeopleContact(id: ID!, peopleContactInput: PeopleContactInput): PeopleContact
  }
`;

export default typeDefsModule;