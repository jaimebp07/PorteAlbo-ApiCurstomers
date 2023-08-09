const router = require('express').Router();

const contactControllerREST = require('../controllers/contactControllerREST');

router.get('/', contactControllerREST.displayStartupInformation);
// router.post('/addcustomer', customerController.addcustomer)

router.get('*', contactControllerREST.pageNotFound)
module.exports = router;