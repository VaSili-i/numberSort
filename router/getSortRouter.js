const express = require ("express")
const urlencodedParser = express.urlencoded({extended: false});
const Router = require('express')
const router = Router()
const sortController = require('../controller/getSortController.js')


router.get('/', sortController.getNumber)
router.post('/', urlencodedParser, sortController.postNumber)
router.post('/get', urlencodedParser, sortController.getSortedArr)

module.exports = router
