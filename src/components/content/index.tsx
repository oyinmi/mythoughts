import React, { useState} from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Dove from "../../assets/images/dove.png";
import './style.css';


interface Content {
    id: number
    image: string
    title: string
    introduction: string
}


const initialPosts: Content[] = [
    {
        id: 1,
        image: `${Dove}`,
        title: "What Is Your Relationship With The Holy Spirit Like",
        introduction: "Developing and keeping a relationship with the Holy Spirit is paramount to our lives as children of God.",
    },
    {
        id: 2,
        image: `${Dove}`,
        title: "What Is Your Relationship With The Holy Spirit Like",
        introduction: "Developing and keeping a relationship with the Holy Spirit is paramount to our lives as children of God.",
    },
    {
        id: 3,
        image: `${Dove}`,
        title: "What Is Your Relationship With The Holy Spirit Like",
        introduction: "Developing and keeping a relationship with the Holy Spirit is paramount to our lives as children of God.",
    },
    {
        id: 4,
        image: `${Dove}`,
        title: "What Is Your Relationship With The Holy Spirit Like",
        introduction: "Developing and keeping a relationship with the Holy Spirit is paramount to our lives as children of God.",
    },
    {
        id: 5,
        image: `${Dove}`,
        title: "What Is Your Relationship With The Holy Spirit Like",
        introduction: "Developing and keeping a relationship with the Holy Spirit is paramount to our lives as children of God.",
    },
    {
        id: 6,
        image: `${Dove}`,
        title: "What Is Your Relationship With The Holy Spirit Like",
        introduction: "Developing and keeping a relationship with the Holy Spirit is paramount to our lives as children of God.",
    },
    {
        id: 7,
        image: `${Dove}`,
        title: "What Is Your Relationship With The Holy Spirit Like",
        introduction: "Developing and keeping a relationship with the Holy Spirit is paramount to our lives as children of God.",
    },

];


function Content() {
    const [posts, setPosts] = useState(initialPosts);

    return(
        <>
            <Helmet>
                <title>My Thoughts</title>
                <meta name="description" content="Post" />
                <link rel="canonical" href="/component/content" />
            </Helmet>

            <div className='container'>
                {posts.map((post) => (
                    <div className='content' key={post.id}>
                        <div>
                            <img src={post.image} alt='Image' className='image'/>
                        </div>

                        <div className='text'>
                            <Link to="blog" style={{textDecorationLine: 'none'}}>
                                <p className='title'>{post.title}</p>
                            </Link>
                            <p className='introduction'>{post.introduction}</p>
                            <Link to="blog" style={{ textDecorationLine: 'none'}}>
                                <p className='more'>Read More</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}


export default Content;