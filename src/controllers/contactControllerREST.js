const contactControllerREST = {};

contactControllerREST.displayStartupInformation = (req, res)=> {
    res.send('Hola, esta es la APi de personas a contactar!!')
}



module.exports = contactControllerREST;