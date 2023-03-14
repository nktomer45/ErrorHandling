var express = require('express');
var router = express.Router();
const promiseHandlerWithAsync=require('./controller/promiseHandler')
//const promiseHandlerWithAwait =require('./controller/promiseHandler')

/* GET home page. */
router.get('/async', promiseHandlerWithAsync)
//router.use('/await',promiseHandlerWithAwait)

module.exports = router;
