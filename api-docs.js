const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "iribagiza project API",
        version: "1.0.0",
        description: "Blogs, Messages and User apis",
        contact: {
          name: "Jeannette Iribagiza",
          email: "j.iribagiza2@gmail.com",
          url: "web.com",
        },
      },
      servers: [
        {
          url: 'http://localhost:5000/',
          description: 'Local Server',
        }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
    },
    apis: ['src/routes/blogRoutes.js', 'src/routes/userRoutes.js', 'src/routes/messageRoutes.js'],
  }
  export default options