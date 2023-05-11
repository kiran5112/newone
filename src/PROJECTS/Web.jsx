import React, { useEffect, useState } from 'react'
import ClowdApp from './ClowdApp'
import axios from 'axios'


function Web() {
    const [imag, setImag] = useState('')
    const [con, setCon] = useState(false)
    const [product, setProduct] = useState([])
    const [buy, setBuy] = useState(false)
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res) => {
            console.log(res.data.products);
            setProduct(res.data.products)
            let myv = res.data.products
            myv.forEach((ele) => {
                ele.count = 0
            })
            setProduct(myv)
        })


    }, [])

    let sum = 0;
    product.forEach((ele) => {
        sum = sum + ele.count
    })
    function add(index) {
        let temp = [...product]
        temp[index].count = temp[index].count + 1
        setProduct(temp)

    }
    function sub(index) {
        let temp = [...product]
        if (temp[index].count > 0) {
            temp[index].count = temp[index].count - 1
        }
        setProduct(temp)

    }
    function handle(index) {
        let temp = [...product]
        temp[index]
            setBuy(!buy)
    }
    return (
        <div className='web'>
            <h2>deign your web site according to you</h2>
            <div style={{
                backgroundColor: imag,
                backgroundImage: imag,
                fontSize: imag,
                height: "500px",
                width: "600px",
                fontFamily: imag,
                fontWeight: imag,
                border: imag,

            }}>
                <input placeholder='MAKE YOU WEBSITE AS PER YOUR CHOICE ' value={imag} onChange={(e) => setImag(e.target.value)} />

                <button onClick={() => setCon(!con)}>{con ? "add" : "Save"}</button>
                <h2>Chenge Something Hire </h2>



                {
                    con ? <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button> :
                        <div><div className="spinner-border outline-primary m-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></div>

                }

            </div>
            <h1>{sum}</h1>
            <div className='mater'>
                {                  
                    product.map((item, index) => {
                        return <div  key={index}>
                            <img src={item.thumbnail} />
                            {item.count}
                            <button onClick={() => handle(index)}>{buy ? "book now" : "buy"}</button>
                            <button onClick={() => add(index)}>add</button>
                            <button onClick={() => sub(index)}>sub</button>
                            

                            
                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default Web