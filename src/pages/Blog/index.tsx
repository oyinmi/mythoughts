import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Tag from "../../components/tag";
import "./style.css";

export default function Blog () {
    return(
        <>
            <Helmet>
                <title>Blog</title>
                <meta name="description" content="Blog" />
                <link rel="canonical" href="/blog" />
            </Helmet>

            <div className="container">
                <h1 className="topic">WHAT IS YOUR RELATIONSHIP WITH THE HOLY SPIRIT LIKE?</h1>
                <p className="line"></p>
                <div className="date">15 Dec</div>

                <div className="messageCon">
                    <p className="message">
                        The first time I heard about having a relationship with the Holy Spirit was in 2016, I really can’t remember when exactly but, a friend and fellow youth coper told me about “the relationship”, communication with the Holy Spirit, and its importance.
                    </p>
                    <p className="message">
                        Firstly, what does relationship mean? Relationship, according to the dictionary, is a way in which two or more people or things are connected, or the state of being connected. A good and healthy relationship involves honesty, trust, respect and open communication between the partners.
                    </p>
                    <p className="message">
                        Who is the Holy Spirit? The Holy Spirit is the third person in the holy trinity.
                    </p>
                    <p className="message">
                        The moment we give our lives to God and confess Jesus Christ (2 Corinthians 5: 17) and the Holy Spirit begins to dwell within us.
                    </p>

                    <Tag />

                    <div className="commentCon">
                        <p className="comment">Comments</p>
                        <textarea/>
                    </div>
                </div>

            </div>

        </>
    );
}

