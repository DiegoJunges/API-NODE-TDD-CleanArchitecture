const request = require('supertest')
const app = require('../config/app')

describe('JSON parser Middleware', () => {
  it('Should parser body as JSON', async () => {
    app.post('/test_json_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_json_parser')
      .send({ name: 'John Doe'})
      .expect({ name: 'John Doe'})
  })
})
  