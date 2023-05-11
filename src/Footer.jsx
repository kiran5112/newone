import React, { useEffect, useRef, useState } from "react";
import { Component } from "react";



// class Footer extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             village: "pak"
//         }
//     }
//     componentDidMount() {
//         console.log(10 * 50);
//     }
//     render() {
//         return (
//             <div>
//                 <h2> my app:{this.state.village}</h2>
//             </div>
//         )
//     }
// };
// export default Footer;

// function Footer() {

//     let val= useRef(null)
//     function sum(e){
// e.preventDefault()
// console.log(val.current.value);
//     }
//     const [count, setCount] = useState(5)
//     return (
//         <div><form onSubmit={sum}>
//             <h1>my value:{count}</h1>
//             <button onClick={() => setCount(count + 5)}>add</button>
//             <input ref={val} type="number" placeholder="PUT NUM"/>
// </form>
//         </div>
//     )
// };
// export default Footer;

// function Footer() {
//     let obj = [80, 70, 50, 30, 5, 6, 7, 8, 9, 10]
//     return (
//         <div>
//             {
//                 obj.map((key) =>
//                     <h3>{key}</h3>
//                 )
//             }
//         </div>
//     )

// };
// export default Footer;

// function Footer() {
//     const [todo, setTodo] = useState("")
//     const [val, setVal] = useState([])

//     function handleAdd() {
//         const myv = [...todo]
//         myv.push(val)
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
//                         return <ul><li>{item}</li></ul>
//                     })
//                 }
//             </ul>

//         </div>
//     )

// };
// export default Footer;

// function Footer() {
//     const [sim, setSim] = useState("")
//     const [num, setNum] = useState([])

//     function add() {
//         const myb = [...sim]
//         myb.push(num)
//         setNum(myb)
//         setSim("")

//     }
//     useEffect(()=>{
//         console.log("my name");
//     },[])


//     return (
//         <div>
//             <input value={sim} onChange={(e) => setSim(e.target.value)} type='text' />
//             <button onClick={add}>good</button>

//             <ul>
//                 {
//                     num.map((mn) =>
//                         <li>{mn}</li>
//                     )
//                 }

//             </ul>

//         </div>
//     )
// };
// export default Footer;

// class Footer extends React.Component {

//     // // componentWillUnmount() 
//     // componentWillUnmount() {
//     //     alert("user delete the info")
//     // }
//     constructor() {
//         super()
//         this.state = {
//             toggle: true
//         }


//     }
//     render() {
//         return (
//             <div>
//                 <h1>react application</h1>
//                 {
//                     this.state.toggle ? <li>kiran Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Inventore cupiditate hic dolorem iure fuga amet quis nostrum
//                         quisquam incidunt, asperiores sequi
//                         numquam! Assumenda atque nesciunt ratione nobist? </li> : <Check />
//                 }
//                 <button onClick={() => { this.setState({ toggle: !this.state.toggle }) }}>Delete</button>
//                 {/* <Chech/> */}
//             </div>
//         )
//     }


// }
// export default Footer;

// class Check extends React.Component {

//     componentDidmount() {
//         alert("I DELET SAMETHING")
//     }
//     render() {
//         return (
//             <h1>kiran randhawa</h1>
//         )
//     }
// }




function Footer() {
    const [info, setInfo] = useState(false)
    const [err, setErr] = useState(false)
    const[s,setS]=useState("")
    const[f,setF]=useState("")
    function click(e) {
        if(f.length<3||s.length<3){
            alert("type correct value")
        }else{
            alert("good")
        }
        e.preventDefault()
    }
    function Handle(e) {
        let x = e.target.value;
        if (x.length < 3) {
            setErr(true)
        }
        else {
            setErr(false)
        }
        setS(x)
        console.log(e.target.value);
    }
    function jok(e) {
        let y = e.target.value;
        if (y.length < 5) {
            setInfo(true)
        }
        else {
            setInfo(false)
        }
        setF(y)
    }
    return (
        <div><form onSubmit={click}>
            <input type="text" onChange={Handle} />{err ? <span>ENCORRECT VALUE</span> : null}
            <input type="passworld" onChange={jok} />{info ? <span>PUT CORRECT VALUE</span> : null}
            <button type="submeet">button</button>

        </form></div>
    )
}

export default Footer