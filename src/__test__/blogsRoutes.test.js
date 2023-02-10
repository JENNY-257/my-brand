import request from 'supertest'
import app from '../index.js'
jest.setTimeout(2000000)
describe("getAllblogs",() =>{
    test('Should return all blogs', async () => {
        const response = await request(app).get('/api/v1/blogs');
        expect(response.statusCode).toBe(200);
      });
})
describe("getSingleblog",() =>{
    test('Should return single blog', async () => {
        const response = await request(app).get('/api/v1/blogs/id');
        expect(response.statusCode).toBe(404);

      });
})

describe("delteSingleblog",() =>{
    test('Should delete single blog', async () => {
        const response = await request(app).delete('/api/v1/blogs/id');
        expect(response.statusCode).toBe(404);

      });
})
describe("create blog",() =>{
    test('Should create single  blog', async () => {
        const response = await request(app).post('/api/v1/blogs/id');
        expect(response.statusCode).toBe(404);

      });
})
describe("create blog",() =>{
    test('Should create single  blog', async () => {
        const response = await request(app).patch('/api/v1/blogs/id');
        expect(response.statusCode).toBe(404);

      });
})
