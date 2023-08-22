import { gql } from 'apollo-server-express'

const typeDefsModule = gql`
  type PeopleContact {
    id: ID
    nameContact: String
    numberPhoneContact: String
    emailContact: String
    companyContact: String
    cityContact: String
  }

  type Query {
    hello : String!
    getAllContactInformation: [PeopleContact]
    getPeopleContact(id: ID): PeopleContact
  }

  input PeopleContactInput {
    nameContact: String
    numberPhoneContact: String
    emailContact: String
    companyContact: String
    cityContact: String
  }

  type Mutation {
    createPeopleContact(peopleContactInput: PeopleContactInput): PeopleContact
    deletePeopleContact(id: ID!): String
    updatePeopleContact(id: ID!, peopleContactInput: PeopleContactInput): PeopleContact
  }
`

export default typeDefsModule
