import { useEffect } from "react";
import { useEffect, useState } from "react";

var arr = images
const [URL, setURL] = useState([])
const [NewArray, setNewArray] = useState([])
// var NewArray = images
var res
const fetchData = async () => {
    const response = await fetch("http://localhost:8080/feed");
    res= await response.text() 
    arr.push(res)
    setNewArray(arr.slice())
    console.log(NewArray)
    console.log(URL)
    console.log(arr)
     
  }

const update = () => {
    useEffect(()=>{
        // NewArray = NewArray.slice() 
          setURL(NewArray);
        },[NewArray ])   
}