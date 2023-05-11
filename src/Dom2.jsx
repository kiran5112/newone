import { useContext } from "react";
// import Dom from "./Dom";
import { car, car2 } from './Dom'



function Dom2() {

    const r = useContext(car);
const r1 = useContext(car2)


    return (
        <div>
            <h2>my new car:{r} and second {r1}</h2>
        </div>
    )

};
export default Dom2;