
import Dom2 from './Dom2';
import React, { createContext } from "react";

const car = createContext();
const car2 = createContext();


function Dom() {
    const a = ['kiran','achal','janu','monu'];
    const b = ' nano';
    return (
        <div>
            <car.Provider value={a}>
                <car2.Provider value={b}>
                
                <Dom2 />

            </car2.Provider>
            </car.Provider>


        </div>
    )
};
export default Dom;
export { car, car2 }