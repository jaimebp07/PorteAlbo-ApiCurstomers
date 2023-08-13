# PorteAlbo-ApiCurstomers
 
# API GraphQL de PeopleContact

Esta API GraphQL permite gestionar información de contactos de las personas que entran a la landing de PorteAlbo y desean dejar sus datos para ser contactadas posteriormente por un asesor comercial de la empresa

## Instalación

1. Clona este repositorio y instala las dependencias:

```bash
git clone https://github.com/jaimebp07/PorteAlbo-ApiCurstomers.git
cd PorteAlbo-ApiCurstomers.git
npm install
```

## Uso

```bash
npm start
```
- Accede a la API en http://localhost:3000/graphql para explorar resolvers, consultas y mutaciones.

## Estructura del Proyecto

* `controllers/:` Controladores para la lógica de negocio.
* `models/:` Modelos de la base de datos.
* `resolvers/:` Resolvers para las solicitudes GraphQL.
* `schemas/:` Esquemas GraphQL con Apollo Server.
* `tests/:` Pruebas unitarias para controladores y resolvers.

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

query{
  deletePeopleContact(id: "64d45e33a52659c027a65ff0") 
}

query{
  getPeopleContact(id: "64d45e33a52659c027a65ff0") {
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
