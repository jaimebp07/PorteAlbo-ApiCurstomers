const { Schema, model } = require('mongoose');

const contacInformation = new Schema({

    name_pcontact: {
        type: String,
        require: true
    },
    number_phone_pcontact: {
        type: String,
        require: true
    },
    email_pcontact: {
        type: String,
        require: true
    },
    company_pcontact: {
        type: String,
        require: true
    },
    city_pcontact: {
        type: String,
        require: true
    },
})

module.exports = model("PeopleContact", contacInformation);