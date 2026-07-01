import axios from 'axios'


async function fetchData(){
 
    const response = await axios.get("url...")
    return response.data
} 

export default async function App(){
  
    const data = await fetchData()
     
 return (
    <>
    <div>
        {data.name}
        {data.email}

    </div>
    </>
 )

}