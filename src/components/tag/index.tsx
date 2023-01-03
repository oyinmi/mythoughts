import React, { useState } from "react";
import "./style.css";

interface Tags {
    id: number
    tagg: string
}

const initialTags: Tags[] = [
    {
        id: 1,
        tagg: "Holy Spirit"
    },

    {
        id: 2,
        tagg: "Relationship"
    },

    {
        id: 3,
        tagg: "Christian"
    },

    {
        id: 4,
        tagg: "Growth"
    },
]

function Tag () {
    const [tags, setTags] = useState(initialTags);

    return(
        <div className="tagCon">
            {
                tags.map((tag) => (
                    <h5 className="tag">{tag.tagg}</h5>
                ))
            }
        </div>
    );
}


export default Tag;