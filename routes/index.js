const router = require('express').Router(); 
const apiRoutes = require('./api'); //imporiting a file 

router.use('/api', apiRoutes); //route

router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;