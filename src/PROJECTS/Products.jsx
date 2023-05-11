import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Styles from './Styles.css'

function Products({ items, increament, decreament }) {
    console.log(items);

    
    return (
        <div className='products'>

            {
                items.map((item, index) => {

                    return (
                        <div className='product'>
                            <img src={item.thumbnail} />

                            <div className='detail'>
                                <div>{item.title}</div>
                                <div>{item.count}</div>
                                <div>
                                    <button onClick={() => increament(index)}>+</button>
                                    <button onClick={() => decreament(index)}>-</button>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products





