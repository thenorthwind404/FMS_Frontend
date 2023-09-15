import React, { useContext, useState } from "react";
import axios from "axios";

import { createContext } from "react";





 let tokenContext = createContext();
export function Dashboard(){
    let tokenCon = useContext(tokenContext);
    function HandleToken(e){
        console.log(tokenCon);
        
        let urlDemo = "https://localhost:44361/weatherforecast/demo"
        let bearer = "Bearer "+tokenCon;
       
       // console.log(bearer);
         let conFig = {
            headers : { Authorization : bearer }
         }
         let body ={
            key:"value"
         }
  axios.put(urlDemo,body,conFig).then(res=>{
    console.log(res.data)
  }).catch(error=>{
    console.log(error);
  });

    }
    return (
     <>
     <h1>Dashboard</h1>
      <button onClick={(e) => HandleToken(e)}>Update</button>
     </>

    )
}


export function TokenComponent(){

    let [values, setValues] =  useState({name:" ",password:" "});
    let [token,setToken] = useState("");

   

    function  HandleClick(e){
    let urls = "https://localhost:44361/weatherforecast/authenticate";
        axios.post(urls,values).then(res=>{
            console.log(res.data);
            setToken(res.data);
        }).catch(error=>{
            console.log(error);
        });
   console.log(values);

    }
    if(token != ""){
      
      return (<>            
        <tokenContext.Provider value={token} >

             <Dashboard>

             </Dashboard>
        
            </tokenContext.Provider>
            </>
            )

    }
    else{

    
    return(
        <>
        <p>User Name</p>
        <input type="text" value={values.name} onChange={(e) => setValues({...values,name:e.target.value})} />
        <br />
        <p>Password</p>
        <input type="text" value={values.password} onChange={(e) => setValues({...values,password:e.target.value})}/>
        <br/>
        <button onClick={(e) => HandleClick(e)}>Login</button>
        </>

    )
    }
}