 
import { Hono } from 'hono' 
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

const app = new Hono<{
  // to Remove redline TS error under the (c.env.DATABSE_URL).
    Bindings: {
      DATABASE_URL: string;
    }
}>()



 

app.get('/', (c) => {
  return c.text('Hello Hono.')
})


app.route('/api/v1/user/', userRouter)
app.route('/api/v1/blog/', blogRouter)
 
  
 
 
 
export default app




// psql 'postgres://avnadmin:<redacted>@hono-ayansaifi2nd-3763.h.aivencloud.com:20911/defaultdb?sslmode=require'



// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19rVHNhSGh0X0V5YWd3ekNGNG56c1IiLCJhcGlfa2V5IjoiMDFLVlo3VjZXU1RLV1FDSDQ1OU5DUDg4UFoiLCJ0ZW5hbnRfaWQiOiI1NWY2M2NjM2FlOTUxNjg4MDZiZWEyMjVjYTQyYzc0MTg3NzRkOGJkODQzZTcxYWUwMDIxODE3MmU4ZjM5ZTQzIiwiaW50ZXJuYWxfc2VjcmV0IjoiMDBhNmMxODMtODY1MC00OGEwLTk5N2QtYzA0MGI5MzcxOWZmIn0.sBcRwhBUjmVEa8o4v9b6-JgAsakrwZ200i6168tEhbA"