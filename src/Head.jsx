import React from "react";
import { Link } from "react-router-dom";
function Head() {
    return (
        <div>
            <h3>I AM HEAD</h3>
            <div><Link to="/product">Product</Link></div>
            <div>
                <Link to="/Sarvice">Sarvice</Link>


            </div>
            <div><Link to="/Contacts">Contacts</Link></div>
            <div><Link to="/Page">Page</Link></div><br></br>
            <Link to="/click">click</Link>
        </div>
    )
};
export default Head;