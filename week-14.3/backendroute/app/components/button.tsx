'use client'

import { useState } from 'react'
import axios from 'axios'

const Button = () => {
      const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
   <div className="caard border p-5 rounded flex flex-col   items-center gap-3">
        <input
        onChange={(e)=>{
            setUsername(e.target.value)
        }} type="text" placeholder='name' className='p-2 border rounded outline-none'/>
        <input
        onChange={(e)=>{
            setPassword(e.target.value)
        }} type="text" placeholder='password' className='p-2 border rounded outline-none' /> 
        <button 
         onClick={()=>{
            axios.post("http://localhost:3000/api/user", 
              {  username, 
                password}
            )
         }}
        className='border rounded py-1 px-3 w-fit flex cursor-pointer hover:bg-black hover:text-white '>SignUp</button>
      </div>
  )
}

export default Button