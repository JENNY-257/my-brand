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
        const response = await request(app).get('/api/v1/blogs/63e36bed09039ac26884a27d');
        expect(response.statusCode).toBe(200);

      });
})

describe("delteSingleblog",() =>{
    test('Should delete single blog', async () => {
        const response = await request(app).delete('/api/v1/blogs/63e36bed09039ac26884a27d');
        expect(response.statusCode).toBe(201);

      });
})
describe("create blog",() =>{
    test('Should create single  blog', async () => {
        const response = await request(app).post('/api/v1/blogs/63e36bed09039ac26884a27d');
        expect(response.statusCode).toBe(404);
      });
     })
describe("update blog",() =>{
    test('Should update single  blog', async () => {
        const response = await request(app).patch('/api/v1/blogs/63e36bed09039ac26884a27d');
        expect(response.statusCode).toBe(404);

      });
})
//     // test likes
describe("like a blog",() =>{
 
    test('should like a blog',async()=>{
      const res =await request(app).post('/api/v1/blogs/63e36bed09039ac26884a27d/likes');
      expect(res.statusCode).toBe(200);
    });
     
    })
    // test messages
    // describe("get messages",() =>{
 
    //   test('should like a blog',async()=>{
    //     const res =await request(app).get('/api/v1/blogs/messages');
    //     expect(res.statusCode).toBe(200);
    //   });
  
    //   })
      describe("post message",() =>{
 
        test('should post message',async()=>{
          const res =await request(app).post('/api/v1/messages');
          expect(res.statusCode).toBe(200);
        });
    
        })
        describe("get  all messages",() =>{
 
          test('should get all messages',async()=>{
            const res =await request(app).get('/api/v1/messages');
            expect(res.statusCode).toBe(200);
          });
      
          })
  // test comments

 describe("get comments ",() =>{
 
          test('should get all comments',async()=>{
            const res =await request(app).post('/api/v1/blogs/63e36bed09039ac26884a27d/comments');
            expect(res.statusCode).toBe(404);
          });
      
          })
          describe("delete comments ",() =>{
 
            test('should single comment',async()=>{
              const res =await request(app).delete('/api/v1/blogs/63e36bed09039ac26884a27d/comments/63e382eab2db9b3aafc7fa1d');
              expect(res.statusCode).toBe(404);
            });
        
            })