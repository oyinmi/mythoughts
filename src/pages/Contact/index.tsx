import React from "react";
import './style.css';

export default function Contact () {
    return(
        <div className="contact">
            <div className="headerCon">
                <p className="heading">CONTACT</p>
                <p className="line"></p>
            </div>

            <div className="conInfo">
                <p className="location">England, United Kingdom</p>
                <p className="email">mythoughtsbytheholyspirit@gmail.com</p>
            </div>

            <form className="formCon">
                <input 
                    placeholder="Name"
                />
                <input 
                    placeholder="Phone"
                />
                <input 
                    placeholder="Email Address"
                />
                <textarea 
                    placeholder="Message"
                />

                <button>CONTACT US</button>
            </form>
        </div>
    );
}