import React, { useState } from 'react'
import './App.css'

function Form() {
    const [input, setInput] = useState({ name: "", email: "", })
    const [table, setTable] = useState([])
    const[edi,setEdi]=useState(false)


    function submeet(e) {
        e.preventDefault()
        setTable([...table, input])
        setInput({ name: "", email: "" })
    }
    function handle(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
      

    }
    function dele(index) {
        let temp = [...table]
        temp.splice(index, 1)
        setTable(temp)
    }
    function edit(index) {
        let tepm = table[index]
        setInput({ name: tepm.name, email: tepm.email })
        setEdi(true)
    }
    return (
        <div className='cool'>Form
            <form onSubmit={submeet}>

                NAME : <input name='name' onChange={handle} value={input.name} />
                EMAIL:  <input name='email' onChange={handle} value={input.email} />

                <button type='submeet'>{edi?"update":"add"}</button>
            </form>

            <div>
                <table className='t'>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            table.map((item, index) => {
                                return <tr key={index}> <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button onClick={() => edit(index)}>edit</button>
                                        <button onClick={() => dele(index)}>delete</button>
                                    </td>
                                </tr>

                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Form