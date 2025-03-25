import Post from './Post'
import {images} from './sampleImages'
import { useEffect, useState } from 'react';


export default function Posts(){
    var arr = images
    const [URL, setURL] = useState([])
    const [NewArray, setNewArray] = useState([])
    // var NewArray = images
    var res
    const func = async function fetchData(){
        const response = await fetch("http://localhost:8080/feed");
        res= await response.text() 
        arr.push(res)
        setNewArray(arr.slice())

        console.log(NewArray)
        console.log(URL)
        console.log(arr)
         
      }
      // useMemo 
     useEffect(()=>{
      // NewArray = NewArray.slice() 
        setURL(NewArray);
      },[NewArray ])
  
    return (
        <div className="Posts">
            <button onClick={func}>Click me</button>
            {
                
                URL.map((ImageURL, i) => {
                     return <Post key={i} URL={ImageURL}/>
                })
            }
            
        </div>
       
    )
}