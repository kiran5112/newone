import React, { useEffect, useState } from "react";
import { Component } from "react";

// class Hook extends React.Component {
// ShouldComponentUpdate(){                 
//     return true
//     alert("done")
// }
// // componantDidMount ,componotWillUnmaunt,coponantsDidUnmount
//     constructor() {
//         super()
//         this.state = {
//             add: "sambhaji colony",
//             contact:800000
//         }
//     }

//    Test=()=>{
//     this.setState({add:"jalgoan"})
//    }


//     render() {
//         return (
//         <>
//             <h1>what is your add:{this.state.add}</h1>

//             <button onClick={this.Test}>test</button>
//             </>
//         )

//     }

// };
// export default Hook;


// function Hook(){
// const [count,setCount]=useState(100)
// const [sim,setSim]=useState(true)
//  useEffect(()=>{

//     console.log("MOUNTING PHASE");
//  },[count])   

// //   function add(){
// //     count(setCount+1)
// //   }  
//     return(
//         <div>
//             <h1>jatt battalian{count}</h1>
//             <h3>{sim}</h3>
//             <button onClick={()=>setCount(count+1)}>loop</button>
//             <button onClick={()=>setSim(!sim)}>loop2</button>
//             {
//                 sim?<h3>❤️❤️❤️❤️❤️❤️❤️❤️</h3>:<h3>😊😊😊😊😊😊😊😊😊</h3>
//             }
//         </div>
//     )
// };
// export default Hook;

// function Hook() {
//     const [pass, setPass] = useState("")
//     const [sub, setSub] = useState("")
//     const [users, setUsers] = useState(false)
//     const [err, setErr] = useState(false)
//     function did(e) {
//         e.preventDefault()

//         if (pass.length < 3 || sub.length < 3) {
//             alert("type cooorect")
//         } else {
//             alert("all good")
//         }
//     }
//     function Handler(e) {
//         let item = e.target.value
//         if (item.length < 3) {

//             setErr(true)
//         } else {
//             setErr(false)
//         }
//         setSub(item)
//     }
//     function login(e) {
//         let data = e.target.value
//         if (data < 3) {
//             setUsers(true)
//         } else {
//             setUsers(false)
//         }
//         setPass(data)
//     }
//     return (
//         <div>
//             <form onSubmit={did}>
//                 <input onChange={Handler} type='text' /><br></br>{err ? <span id='sp'>user not found</span> : null}
//                 <input onChange={login} type='password' placeholder="put valid.." /><br>
//                 </br>{users ? <span id='sp'>PASSWORD IS INVALID!</span> : null}
//                 <button>HOVER</button>
//             </form>
//         </div>
//     )
// };
// export default Hook;






function Hook() {
    const [todo, setTodo] = useState("")
    const [list, setList] = useState([])
    const [edits, setEdits] = useState("")

    function check() {
        let temp = [...list]
        temp.push(todo)
        setList(temp)
        setTodo("")
    }
    function handle(index) {
        let a = [...list]
        a.splice(index, 1)
        setList(a)
    }

    function edit(index) {
        setEdits(index)
    }
    return (
        <div>
            <h1>my page</h1>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={check}>add</button>


            {
                list.map((item, index) => {
                    return <div>

                        {index === edits ? <input /> : item}
                    
                        <li key={index}>{item}</li>
                        {edits}
                        <button onClick={() => handle(index)}>delete</button>
                        <button onClick={() => edit(index)}>Edit</button>
                    </div>
                })
            }
        </div>
    )
}

export default Hook