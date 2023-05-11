import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function Todo() {
    const [todo, setTodo] = useState([])
    const [col, setCol] = useState(false)
    const [hub, setHub] = useState("")

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            setTodo(res.data);
            console.log(res.data);
        }, [])
    })
    function hang(index) {
        setHub(index)
    }

    const handleChange = (index) => {
        let temp = [...todo];
        temp[index].completed = !temp[index].completed;
        setTodo(temp);
    }
    function fun() {
        let y = [...todo]
        y.pop()
        setTodo(y)
    }
    return (
        <div>{


            todo.map((item, index) => {

                return <div key={index}>
                    {item.title}
                    {/* <li>{index === hub ? item.title : item.id}</li> */}
                    <button onClick={() => fun}>delite</button>
                    <input type="checkbox" checked={item.completed} onChange={() => handleChange(index)} /> {item.todo}


                </div>
            })
        }</div>
    )
}

export default Todo


// import axios from "axios"
// import { useState } from "react"
// import { useEffect } from "react"
// function Todo() {
//     const [todos, setTodos] = useState([]);
//     useEffect(() => {
//         axios.get('https://dummyjson.com/todos').then(res => { setTodos(res.data.todos); })
//     }, [])
//     const handleChange = (index) => {
//         let temp = [...todos];
//         temp[index].completed = !temp[index].completed;
//          setTodos(temp);
//     }
//     function funk(index){
// let temp = [...todos]
// temp.splice(index,1);
// setTodos(temp)
//     }
//     return (
//         <div className="App"> {todos.map((item, index) => {
//             return (<div key={item.id}> <input type="checkbox"
//                 checked={item.completed} onChange={() => handleChange(index)} /> {item.todo}
//                 <button onClick={()=>funk(index)}>delite</button>
                
//                  </div>)
                
//         })} </div>)
// }

// export default Todo;







