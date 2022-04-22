import React from 'react';

export default function Card({ posterImg, title}) {

    const handleImage = (event) => {
        event.target.src = '/film.placeholder.poster.jpg';

    }
    return (
        <div className='card'>
            <img src={posterImg[0].Url} alt={posterImg.Title} onError={(event) => handleImage(event)} />
            <p>{title}</p>
        </div>
    )
}