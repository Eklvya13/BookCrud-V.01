const express = require('express')
const { logger } = require('./someMiddlewares')
const bodyParser = require('body-parser')

const api = require('./routes/api')
const app = express()

const port = 3000

app.use(logger)

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Homepage here!!'))

app.use('/api', api);

app.listen(port, () => console.log(`http://localhost:${port}!`))