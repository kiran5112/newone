// import React from "react";
import { useContext } from "react";
import {data, data1,data3} from './Contex'
 
function Child2(){
    const god = useContext(data)
    const god1 = useContext(data1)
    const  god2= useContext(data3)
    return(
        <div>
         
         <h1>hi my name is : and :{god}my array :{god1} my sir name is{god2}</h1>
        </div>
    )
};
export default Child2;

