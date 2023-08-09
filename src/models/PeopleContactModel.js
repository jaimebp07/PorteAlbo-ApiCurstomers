const {Shema, model} = require('moongoose');

new Schema ({
    
    name_pcontact:{
        type:{
            type: String,
            require: true
        }
    },
    number_phone_pcontact:{
        type:{
            type: String,
            require: true
        }
    },
    email_pcontact:{
        type:{
            type: String,
            require: true
        }
    },
    company_pcontact:{
        type:{
            type: String,
            require: true
        }
    },
    city_pcontact:{
        type:{
            type: String,
            require: true
        }
    },
})