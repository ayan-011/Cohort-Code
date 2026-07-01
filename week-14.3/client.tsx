"use client"
import {useEffect, useState} from "react"
import axios from "axios"

export default function App(){
    const [data, getData] = useState({
        email:"",
        name:""
    })

    useEffect(()=>{
        axios.get("")
        .then(response =>{
            getData(response.data);
        })
    },[])

    return(
        <div>

        {data.name}
        {data.email}
        </div>
    )
 
}