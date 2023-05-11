import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'
import { useDispatch } from 'react-redux'


function Pro() {
    const { todos } = useSelector((state) => state.todo)
    console.log(todos);
    const disptch = useDispatch();
    return (
        <div className='pro'>
            {
                todos.map((todo, index) => {
                    return <div>  {todo} 
                        <button onClick={() => disptch(editTodo(index))}>🗑️</button>
                        <button>📝</button>
                    </div>
                })
            }
        </div>
    )
}

export default Pro