import { useState,useEffect } from "react";
const useFetch= (url)=>{
    
    const [data ,setData]=useState (null);
    const [ispending,setisPending]=useState(true);
    const [error ,seterror]=useState();


 

 useEffect(
    ()=>{
    setTimeout(()=>{

    fetch(url)
    .then( res => {
        if(!res.ok){
            throw Error('couldnent fetech the data resource')
        }
        return res.json();

    })
    .then(data =>{
        setData(data)
        setisPending(false)
        seterror()
    }).catch((err)=>{

        seterror(err.message+"please setup the json server");
        setisPending(false)
    });
},1000);
},[url]);
return {data,ispending,error}
};
export default useFetch;

