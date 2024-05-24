import { useState,useEffect } from "react";
const useFetch= (url)=>{
    
    const [data ,setData]=useState (null);
    const [ispending,setisPending]=useState(true);
    const [error ,seterror]=useState();

 useEffect(// this use effect is used to fetch the data from the server 
        ()=>{ 
            const abortControlleer = new AbortController();// to stop  the fetch request once the page is changed
        
            setTimeout(()=>{

            fetch(url,{signal: abortControlleer.signal})
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
                })
                .catch((err)=>{
                         if(err.name==='AbortError'){// this error is due to the data is not the type of data we expect to happen 
                                 console.log('fetch aborted');
                            } else{

                            seterror(err.message+"please setup the json server it might be due to bad url request ");//this error is due to the json server is not running
                            setisPending(false);
                    }
                });
             },1000);

    return()=> abortControlleer.abort();	
},[url]);// this is the dependency array which is used to run the use effect when the url is changed

return {data,ispending,error}

};
export default useFetch;

