import React, { useState } from "react";

function Abc(){
    const [count,setCount]=useState(0)
return(
    <div>
        <h2>hellooo</h2>
        <h1 onMouseOver={setCount(count+1)}>MY {count} AAPLICATION</h1>
    </div>
)
};
export default Abc;