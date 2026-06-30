import { Hono } from "hono";
// import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from "@prisma/client/scripts/default-index.js";


const app = new Hono<{
  // to Remove redline TS error under the (c.env.DATABSE_URL).
    Bindings: {
      DATABASE_URL: string;
    }
}>()


export const userRouter  = new Hono();



userRouter.post('/signup', async (c) => {
  const body  = await c.req.json();
  const prisma = new PrismaClient({
  // datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  // return c.text('Hono + Prisma + Postgres backend is ready.')

try {
 await prisma.user.create({
  data:{
    name: body.name,
    username: body.username,
    password: body.password
  }
 })
 return c.text("Signed Up")
  
} catch (e) {
  console.error(e);
  return c.json({ error: e }, 500);
}

})


 

userRouter.post('/signin', (c) => {
  return c.text('Hono + Prisma + Postgres backend is ready.')
})