//Fecthing data in next.js


import React from 'react'
import axios from 'axios'


async function getUserData(){
    const response = await axios.get('')
    return response.data
}

const page = async() => {
    
    const userDetails = await getUserData()

  return (
    <div>
        {userDetails.name}
        {userDetails.email}
    </div>
  )
}

export default page