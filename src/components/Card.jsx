import React from 'react';
import { Link } from "react-router-dom";

export default function Card({ posterImg, title}) {

    const handleImage = (event) => {
        event.target.src = '/film.placeholder.poster.jpg';

    }
    return (
        <Link to={title.split(' ').join('-').split(':').join('')} className='card'>
            <img src={posterImg[0].Url} alt={posterImg.Title} onError={(event) => handleImage(event)} />
            <p>{title}</p>
        </Link>
    )
}