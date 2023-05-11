import React, { useState } from 'react'
import './App.css'

function Click() {
    const [x, setX] = useState("lorem igffffffffffffffffxex")
    const [col, setCol] = useState()
    const [t, setT] = useState(false)
    function cool() {
        setX("")

    }
    function fon(){
        alert("do you want to dilit")
    }
    return (
        <div>
            <h1>THANK YOU FOR VISIT</h1>
            <button onClick={() => setX(x + "kiran randhawa")}>click</button>
            <button onClick={cool}>clear</button>
            <div>{x}</div>
            <div style={{ backgroundColor: col }} ><input value={col} onChange={(e) => setCol(e.target.value)}
            />kiran </div>
            <button onClick={() => setT(!t)}>DILITE</button>
            {
                t ? <h3 style={{ border: '1px black solid', backgroundColor: 'pink', width: "300px", height: "100px", borderRadius: "40px", textAlign: 'center' }}>Dilited succesfully<br>
                </br>🛒</h3> : <div>{fon()}</div>
            }
            <div>{t}</div>
            <img src='https://www.google.com/url?sa=i&url=http%3A%2F%2Ft3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQDTlJP1kEDZnXm2WBz2cQAtb2dKKJDZEZkH3nb53-2nIWAp0jOEDD-9ZfVuEg_wRPzXNRq9FLwnEZyG5w&psig=AOvVaw1TCfewCUXj_lYGaxzqWn9Q&ust=1681800811797000&source=images&cd=vfe&ved=0CAQQjB1qFwoTCPio8LaqsP4CFQAAAAAdAAAAABAE'></img>

            <div><h1 className='shod'><span style={{ color: 'blue' }}>G</span><span style={{ color: "red", fontSize: '30px' }}>🙃🙃</span><span style={{ color: 'royalblue' }}>gl</span>e</h1></div>

        </div> 

    )
}

export default Click;