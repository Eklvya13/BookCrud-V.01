const express = require('express')
const { logger } = require('./someMiddlewares')
const api = require('./routes/api')
const app = express()

const port = 3000

app.use(logger)

app.get('/', (req, res) => res.send('Homepage here!!'))

app.get('/api', api);

app.listen(port, () => console.log(`http://localhost:${port}!`))