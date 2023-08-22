import express from 'express'
import contactControllerREST from '../controllers/contactControllerREST.js'

const peopleContactRoutesModule = express.Router()

peopleContactRoutesModule.get('/', contactControllerREST.displayStartupInformation)
// router.post('/addcustomer', customerController.addcustomer)

peopleContactRoutesModule.get('*', contactControllerREST.pageNotFound)

export default peopleContactRoutesModule
