const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BIDE API',
      version: '1.0.0',
      description: 'API documentation for the Browser IDE backend'
    },
    servers: [
      { url: 'http://localhost:5000' }
    ]
  },
  apis: ['./src/routes/*.js', './src/docs/*.js']
}

const specs = swaggerJsdoc(options)
module.exports = specs
