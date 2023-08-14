const contactControllerREST = {};

contactControllerREST.displayStartupInformation = (req, res)=> {
    res.send('Hola, esta es la APi de personas a contactar!!')
}

contactControllerREST.pageNotFound = (req, res) => {
    res.status(404).send('Not found');
}


export default contactControllerREST;