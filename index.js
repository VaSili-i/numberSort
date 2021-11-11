require('dotenv').config()
const express = require('express');
const hbs = require('hbs');
const sequelize = require('./db');
const modelNumber = require('./model/modelSaveNumber.js');
const router =  require('./router/getSortRouter.js')
const path = require('path');
const urlencodedParser = express.urlencoded({extended: false});

const app = express()
const PORT = process.env.PORT || 6000;

app.use(express.json())
app.use(express.static(__dirname + '/views'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', router)


async function start(){
	await sequelize.authenticate()
	await sequelize.sync()
	await app.listen(PORT, () => console.log(`server working on: ${PORT}`))
}

	start();
