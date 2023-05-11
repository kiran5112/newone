import React, { useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { addTodo ,editTodo } from '../Slice'

function Unp() {
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()
    function Handle() {
        dispatch(addTodo(todo))
        setTodo("")
    }
    return (
        <div className='unp'>
            <input placeholder='ENTER VALUE'
                type='text' value={todo} onChange={(e) => setTodo(e.target.value)} /><br></br>
            <button onClick={Handle}>Add</button>
        </div>
    )
}

export default Unp