const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerSpecs = require('./config/swagger')
const { sequelize } = require('./config/db')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

app.get('/api/health', async (req, res) => {
  try {
    await sequelize.authenticate()
    res.json({
      status: 'ok',
      db: 'up'
    })
  } catch (e) {
    res.status(500).json({
      status: 'error',
      db: 'down'
    })
  }
})

app.get('/', (req, res) => {
  res.send('BIDE API is running')
})

module.exports = app
