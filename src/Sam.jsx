import React, { Component, createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
// import { useState } from "react";
// import Footer from "./Footer";







// function Sam(){
//     const [data,setData]=useState(10)
// var x = 0;
//  return(
//     <div><h3>{data}</h3>
//     <input  id="num"type={Number}></input>
//     <button onClick={()=>setData(data+1)}>+</button>
//     </div>
//  );   
// };
// export default Sam;

// =========================usestate


// function Sam() {

//     let [data, setData] = useState("aachal")
//     return (
//         <div><h2> hellllllllllll::{data}</h2>
//             <button onClick={() => setData("kiran")}>check</button>

//         </div>
//     )
// };
// export default Sam;


// ===============================EVENTS IN REACT

// function Sam() {

//     function call() {
//         alert("NICE TO MEET YOU")
//     }
//     return (
//         <div>
//             <button onClick={call}>click here</button>
//         </div>
//     )
// };
// export default Sam;

//   export default class Sam extends React.Component{
//  get(){
// alert("wawa")
// }
//   render(){
//     return(
//         <div>
//             <button onClick={()=>this.get()}>boom</button>
//         </div>
//     )
//   }  
// }

// =======================================props to transefer the data btwn parent to child componts

// function Sam(props){
//     return(
//         <div>
//             <h5>{props.text.name}</h5>
//             <h5>{props.text.age}</h5>
//             <h5>{props.data}</h5>

//         </div>
//     )
// };
// export default Sam;

// function Sam(){
// let [data,setData]=useState(20)

//     return(
//         <div>
//         <input type={Number}></input>-
//           <input type={Number}></input>
//           <h1> ANS::{data}</h1>
//             <button onClick={()=>{setData(data)}}>calculet</button>
//         </div>
//     )
// };
// export default Sam;
// ------------------------------------------add sub, mul function
// class Sam extends React.Component{

//    add(a,b){
//     return a+b
//    } 
// render(){
//     return (
//         <div>


// <li>sum {this.add(4,6)}</li>

//         </div>
//     )
// }
// }
// export default Sam;

// ------------------------------------input fild se value kse get kren
// function Sam(){

// const [data, setData]=useState(null)

//   function get(val){
//     setData(val.target.value)
// }
//     return(
//         <div>
//         <input type="text" onChange={get}/>
//         <li> {data}</li>
//         </div>
//     )
// };
// export default Sam;
// ===========================================array ko print kre
// function Sam() {

//     let x = [50, 60, 70, 12, 80]

//     return (
//         <div>

//             {
//                 x.map((data) =>

//                     <h2>{data}</h2>
//                 )
//             }
//         </div>

//     )
// }

// export default Sam;
// ===================================== array of objects in react
// function Sam() {
//     const student = [
//         { name: "kiran", age: 25, email: "kr@gmail.com", num: 45578 },
//         { name: "ran", age: 5, email: "aff@gmail.com", num: 45578 },
//         { name: "achal", age: 60, email: "dddd@gmail.com", num: 45578 },
//         { name: "kunal", age: 35, email: "loo@gmail.com", num: 45578 }

//     ]

//     return (

//         <div>
//             <table border='1'>
//                 {
//                     student.map((item) =>
//                         <tr>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.num}</td>
//                             <td>{item.age}</td>

//                         </tr>
//                     )
//                 }
//             </table>
//         </div>

//     )

// };

// -----------------------------------------if else condition in react/ tarnary opreter

// function Sam() {

//     const [log, logset] = useState(3)
//     return (
//         <div>
//             {log == 1 ? <h2>ITS GOOD</h2> : log == 2 ? <h2>ITS BAD</h2> : <h2>OKOK</h2>}
//         </div>
//     )
// }

// export default Sam;

// ===================================================high order componts hoc

// function Hoc(){
//     return <h2>red counter</h2>
// }
// function Sam() {

//     const [count, setCount] = useState(0)
//     return (
// <div>
//     <h1>{count}</h1>
//     <button onClick={()=>{setCount(count+1)}}>up</button>

// </div>
// )
// }


// export default Sam;

// ==============================usememo and usecallback(it act on function) 
// are the same hooks use for 
// make the page progresive and efficiant and avoid extra function calling

// ===================usecontext to trafer the data from parent to last child

// function Sam() {

//  const data = createContext();
//  const data2 = createContext();

//     return (
//     let a = 'kiran'
//     let b = 'achal'
// //         <div>
// <data.Provider value={a}>,
//     <data2.Provider>
//         <soom/>
//     </data2.Provider value={b}>
// </data.Provider>

//         </div>
//     )
// };
// export default Sam;
// -------------------------------------to get value from inpute and show in ui
// function Sam() {
//     const [todo, setTodo] = useState("")
//     const [val, setVal] = useState([])

//     function handleAdd() {
//         const myv = [...val]
//         myv.push(todo)
//         setVal(myv)
//         setTodo("")
//     }

//     return (
//         <div>
//             <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" />
//             <button onClick={handleAdd}>fix me </button>
//             <ul>
//                 {
//                     val.map((item) => {
//                         return <li>{item}</li>
//                     })
//                 }
//             </ul>

//         </div>
//     )

// };
// export default Sam

// function Sam() {
//     const [todo, setTodo] = useState("")
//     const [val, setVal] = useState([])

//     function add() {
//         let boom = [...todo]
//         boom.push(val)
//         setVal(boom)
//         setTodo("")

//     }

//     return (
//         <div>
//             <input value={todo} onChange={(e) => setTodo(e.target.value)} type='text' /><br></br>
//             <button onClick={add}>make</button>

//             <ul>
//                 {
//                     val.map((data) => {4
//                         return <li>{data}</li>
//                     })
//                 }
//             </ul>

//         </div>
//     )
// };
// export default Sam;

// function Sam() {
//     let val = useRef(null)
//     let val2 = useRef(null)

//     const [sim,setSim]=useState("")

//     function funk(e) {
//         e.preventDefault()
//         console.log("MY VALUE", val.current.value);
//         console.log("o bapre", val2.current.value);
//     }
//     return (

//         <div>
//             <form onSubmit={funk}>
//                 <input ref={val} type="text" />
//                 <input ref={val2} type="text" />
//                 <button>oooo</button>
//                 <input type="text" value={sim} onChange={(e)=>setSim(e.target.value)}/>
//                 <h5>{sim}</h5>
//             </form>
//         </div>
//     )

// };
// export default Sam;

// function Sam() {
//     const [dom, setDom] = useState(0)

//  useEffect(() => {
//   console.log("tit for tat");

// },[])

//     useEffect(() => {
//         setInterval(() => {
//             document.getElementById("demo").innerHTML = "Lspernatur ullam molestia imus dolorem aliquid!"
//         }, 4000);



//     })


//     return (
//         <div>
//             <h3>I AM KIRAN{dom}</h3>
//             <h1 id="demo"></h1>
//             <button onClick={() => setDom(dom + 1)}> buttonoo</button>
//         </div>
//     )
// };
// export default Sam;

// toggle kse kren ------------------------------------------------

// function Sam(){

// useEffect(()=>{
//     console.log("data is fetching");
// })
//     const [sem,setSem]=useState(true)
//     return(
//         <div>
//            
//  <li>chicku {sem}</li>
//           {  sem?<h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere beatae
//              reiciendis, eum cumque quae quo recusandae laborum dignissimos hic pariatur 
//             corporis sed perferendis doloremque, est cum fuga ex, voluptatum placeat!</h2>:<Footer/>

//           }

//             <button onClick={()=>setSem(!sem)}>wonder</button>
//         </div>
//     )
// }
// export default Sam;
// LIFE CYCLE METHODS========================================
// class Sam extends React.Component {
//     componentWillUnmount() {
//         alert("did unmounting");
//     }
//     constructor() {
//         super()
//         this.state = {
//             name: "randhawa"
//         }

//     }
//     render(){
//         return(
//             <div>

//         {
//           this.state.name?<h1>myappplication</h1>:<h2>NOTHING TO SHOW</h2>  
//         }
//         <button onClick={()=>{this.setState({name:!this.state.name})}}>😊</button>
//             </div>
//         )
//     }
// };
// export default Sam;
// ===========================HIGH ORDER COMPONANTS

// function Sam() {
//     return (
//         <div>
//             <h1>high order coponants</h1>
//             <Hoc item={Counter} />
//             <Style item={Zoo} />
//         </div>
//     )
// }
// export default Sam;

// function Hoc(props) {
//     return (
//         <div>
//             <h1 style={{ background: 'pink', width: 100 }}> <props.item /></h1>
//         </div>
//     )
// }
// function Counter() {
//     const [count, setCount] = useState(0)

//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={() => setCount(count + 1)}>make</button>
//         </div>
//     )

// }

// function Sam() {
//     const [user, setUser] = useState(false)
//     const [con, setCon] = useState(false)
//     const [zoo,setZoo] = useState(false)
//     const [sim, setSim] = useState("")
//     const [val, setVal] = useState("")
//     function submeet(e) {
//         e.preventDefault()
//         if (sim.length < 3 || val.length < 3) {
//             alert('ERROR')
//         } else {
//             alert("ALL GOOD" )
//         }

//     }
//     function Handler(e) {
//         let data = e.target.value
//         if (data.length < 3) {
//             setUser(true)
//         } else {
//             setUser(false)
//         }
//         setSim(data)
//     }
//     function add(e) {
//         let item = e.target.value
//         if (item.length < 3) {
//             setCon(true)
//         } else {
//             setCon(false)
//         }
//         setVal(item)
//     }



//     return (

//         <div>
//             <h1>form validation</h1>
//             <form onSubmit={submeet}>
//                 <input onChange={Handler} type="text" placeholder="NAME...." />{user ? <span id='sp'> USERS NOT FAUND</span> : null}
//                 <input onChange={add} type="password" placeholder="PASS...." />{con ? <span id='sp'> PASS NOT FAUND</span> : null}
//                 <button>call</button>
//             </form>

//         </div>
//     )


// }

// export default Sam;
// ==========================USECONTEX HOOH
// const item = createContext();
// const item1 = createContext()
// function Sam() {

//     let name = 'RAVINDRA'
//     let gen = 'DHADIWAL'
//     return (
//         <div>
//             <item.Provider value={name}>
//                 <item1.Provider value={gen}>
//                     <child2 />
//                 </item1.Provider>
//             </item.Provider>
//         </div>
//     )
// };
// export default Sam;
// export { item, item1 }

// function Sam() {
//     const d = new Date()
//     // document.getElementById("demo").innerText=d
//     return (
//         <div>
//             <h1 id='demo'>hellow</h1>
//         </div>
//     )
// }
// export default Sam;
// ==============================post methods in api
// function Sam() {
//     const[col,setCol]=useState([])
//     const [datas, setDatas] = useState('')

//     function Get() {
//         axios.post("https://jsonplaceholder.typicode.com/posts", {
//             datas
//         }).then(res => console.log("data is posting", res))
//         setDatas("")
//     }

//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/posts").then(res => setCol(res.data))
//     }, [])



//     return (
//         <>
//             <input value={datas} onChange={(e) => setDatas(e.target.value)} type="text" />
//             <button onClick={Get}>add</button>
//             {
//                 col.map(item => {
//                     return <li>{item.title} --------{datas}
//                     {/* <button  onClick={del}>delete</button> */}
//                     </li>

//                 })
//             }

//     {/* <li>{datas}</li> */}


//         </>
//     )
// };
// export default Sam;

// function Sam(){  
//     const[color,setColor]=useState('')


//     return(
//         <div style={{backgroundColor:color,height:'400px',width:"400px"}}>
//  <input value={color} type="text" placeholder="ENTER NAME OF THE COLOR" onChange={(e)=>setColor(e.target.value)}/> 




//         </div>
//     )
// };
// export default Sam;


// const [datas, setDatas] = useState([])
// const [countries, setCountries] = useState([])
// const [search, setSearch] = useState('')
// const [asending, setAsending] = useState(true)
// useEffect(() => {
//   axios.get('https://restcountries.com/v3.1/all').then((res) => {
//     console.log(res);
//     setCountries(res.data)
//     setDatas(res.data)

//   })


// }, [])
// useEffect(() => {
//   let temp = [...datas]
//   temp = temp.filter(coun => {
//     let cn = coun.name.common.toLowerCase()
//     if (cn.startsWith(search)) return true
//   })
//   setCountries(temp)
// }, [search])


// function sorter() {
//   let asen = [...countries]
//   if (asending) {
//     asen.sort((a, b) => {
//       return a.population - b.population
//     })
//     setAsending(false)
//   } else {
//     asen.sort((a, b) => {
//       return b.population - a.population
//     })
//     setAsending(true)
//   }
//   setCountries(asen)
// }



//   return (

//     <div>
//       {/* <input value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)} />
//   {
//         countries.map((item) => {
//           return <div>{item.name.common} <button onClick={sorter}> {item.population}</button></div>
//         })
//       } */}


//     </div>
//   )
// }

// export default App



// function Sam() {
//   const [input, setInput] = useState({ name: "", email: "", })
//   const [table, setTable] = useState([])

//   function handle(e) {
//     setInput({ ...input, [e.target.name]: e.target.value })
//     console.log(input);
//   }
//   function submeet(e) {
//     e.preventDefault()
//     setTable([...table, input ])
//     setInput({ name: "", email: "", })
//   }
//   function edit(index) {
//     let tem = table[index]
//     setInput({ name: tem.name, email: tem.email })
//   }
//   return (
//     <div><form onSubmit={submeet}>
//       NAME: <input name="name" value={input.name} onChange={handle} />
//       EMAI:<input name='email' value={input.email} onChange={handle} />
//       <button type="submeet">Add{""}</button>
//     </form>

//       <div>
//         {
//           table.map((item,index) => {
//             return <div key={index}>{item.name}
//             {item.email}
//             <button onClick={()=>edit(index)}>eddd</button>
//             </div>
//           })
//         }

//       </div>
//     </div>
//   )
// }

// export default Sam



// function Sam() {
//   const [input, setInput] = useState({ name:"", email:"",pass:"", })
//   const [table, setTable] = useState([])
//   const[edi,setEdi]=useState(false)

//   function handle(e) {
//     setInput({ ...input, [e.target.name]: e.target.value })
//   }
//   function submeet(e) {
//     e.preventDefault()
//     setTable([...table,input])
//     console.log(input);
//     setInput({name:"",email:"",pass:"",})

//   }
//   function dele(index){
//     let a =[...table]
//     a.splice(index,1)
//     setTable(a)
//   }
//   function edit(index){
//     let temp = table[index]
//     setInput({name:temp.name,email:temp.email,pass:temp.pass})
//     setEdi(true)
//   }
//   return (
//     <div>
//       <form onClick={submeet}>
//         <input name="name" value={input.name} onChange={handle} />
//         <input name="email" 
//          onChange={handle}value={input.email} />
//         <input name="password" value={input.pass} onChange={handle} />

//         <button type="submeet">{edi?"update":"add"}</button>
//       </form>
//       <div>
// <table>
//   <thead>
//     <tr>name</tr>
//     <tr>email</tr>

//   </thead>
//   <tbody>
//     {
//       table.map((item,index)=>{
//         return<div> <tr key={index}>{item.name}</tr>
//         <tr>{item.email}</tr>
//         <tr>{item.pass}</tr>
        
//           <button onClick={()=>dele(index)}>delete</button>
//           <button onClick={()=>edit(index)}>edite</button>
        
//         </div>
//       })
//     }
//   </tbody>
// </table>

//       </div>
//     </div>
//   )
// }

// export default Sam



function Sam() {
  const[search,setSearch]=useState([])

  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then((res)=>{
      console.log(res);
      setSearch(res.data.products)
    })
  },[])
  return (
    <div>Sam
{/* <input type="search" onChange={(e)=> setSearch(e.target.value)}/> */}

{/* {search} */}
{
  search.map((item)=>{
    return(
      <div>{item.title}</div>
    )
  })
}
    </div>
  )
}

export default Sam
