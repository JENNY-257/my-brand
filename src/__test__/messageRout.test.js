import request from 'supertest'
import app from '../index.js'
jest.setTimeout(2000000)
describe("post massages",() =>{
    //posting new message
  test('should post a new message',async()=>{
    const res=await request(app).post('/api/v1/messages').send({
      userNames : "testUser keep keep",
      email : "email@test.com",
      message: "my message must be greater than 10 characters"
  })
    expect(res.statusCode).toBe(200)
  })
})