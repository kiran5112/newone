import React, { createContext } from "react";
// import Child2 from "./Child2";

const data = createContext();
const data1 = createContext()
const data3 = createContext();   

// we have to CREATCONTEX,PROVIDER, USECONTEX,

function Contex() {
    const name = 'kiran'
    const arr = [10, 20, 40, 50, 60]
    const jok = 'RANDHAWA'




    return (
        <div>
            <data1.Provider value={name}>
                <data.Provider value={arr}>
                    <data3.Provider value={jok}>

                        < Child2 />
                    </data3.Provider>
                </data.Provider>
            </data1.Provider>

        </div>
    )
};
export default Contex;
export { data, data1,data3 }


