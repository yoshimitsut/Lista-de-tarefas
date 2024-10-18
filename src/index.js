const express = require('express')
const path = require('node:path')
const router = require('./routes')

const app = express()

// Configurando os arquivos estáticos
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Configuração para ler dados de requisição
app.use(express.urlencoded({ extended: true }))

// Rotas de aplicação
app.use(router)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Servidor iniciado! Rodando em http://localhost:${PORT}/`))