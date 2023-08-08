const router = require('express').Router();

const contactControllerREST = require('../controllers/contactControllerREST');

router.get('/', contactControllerREST.displayStartupInformation);
// router.post('/addcustomer', customerController.addcustomer)

module.exports = router;