import React, { useMemo, useState } from "react";

function Memo(){
const [add,setAdd]=useState(0)
const [sub,setSub]=useState(100)



const Mool= useMemo(function Sop(){
  console.log(add);
    return add*10   
},[add])
  return(
    <div>
      <h5>{Mool}</h5>
        {/* <h2>{Sop()}</h2> */}
<button onClick={()=>setAdd(add+1)}>😤{add}😊</button>
<button onClick={()=>setSub(sub-1)}>❤️{sub}🙃</button>
    </div>
  )
};
export default Memo;