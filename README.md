# PorteAlbo-ApiCurstomers
 

## Querys Apollographql

query{
  getAllContactInformation {
    name_pcontact,
    number_phone_pcontact,
    email_pcontact,
    company_pcontact,
    city_pcontact
  }
}

mutation {
  createPeopleContact(
     peopleContactInput: {
      name_pcontact: "Juan"
      number_phone_pcontact: "3214567788"
      email_pcontact: "juan@gmail.com"
      company_pcontact: "Restaurante del norte"
      city_pcontact: "Tibasosa-Boyaca"
    }
  ) {
    name_pcontact,
    number_phone_pcontact,
    email_pcontact,
    company_pcontact,
    city_pcontact
  }
}
