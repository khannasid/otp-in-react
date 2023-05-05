import React from "react";
import "./Footer.css"
export default function Footer(){
    return(
        <div>
            <div className="changes">
                <a href="#" className="number">Change Number</a>
                <a href="#" className="resend">Re-send OTP</a>
            </div>
            <button className="button" type="submit">Verify Phone Number</button>
        </div>
    );
}