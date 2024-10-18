const express = require('express')
const taskListController = require('./controllers/taskListController')

const router = express.Router()

//Rotas
router.get('/', (req, res) => res.render('index'))

module.exports = router