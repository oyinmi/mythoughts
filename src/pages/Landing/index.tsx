import React from "react";
import Content from "../../components/content";
import './style.css';


export default function Landing () {
    return(
        <div className="blog">
            <div className="headerCon">
                <p className="blogName">MY THOUGHTS</p>
                <p className="subtext">"Inspired by the Holy Spirit"</p>
            </div>

            <Content />
        </div>
    );
};
