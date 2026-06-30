import { Hono } from "hono"; 


export const blogRouter  = new Hono();

const app = new Hono<{
  // to Remove redline TS error under the (c.env.DATABSE_URL).
    Bindings: {
      DATABASE_URL: string;
    }
}>()


blogRouter.post('/ ', async (c) => {
//   const body  = await c.req.json();
//   const prisma = new PrismaClient({
//   datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())
//   // return c.text('Hono + Prisma + Postgres backend is ready.')

// try {
//  await prisma.user.create({
//   data:{
//     name: body.name,
//     username: body.username,
//     password: body.password
//   }
//  })
//  return c.text("Signed Up")
  
// } catch (e) {
//   console.error(e);
//   return c.json({ error: e }, 500);
// }

})


 

 