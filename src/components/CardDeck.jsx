import React, { useState } from 'react';
import Card from './Card';

export default function CardDeck({ movies }) {
    const [moviesToShow, setMoviesToShow] = useState(10);
    const [totalMovies] = useState(movies.length);

    return (
        <>
            <section className="card-deck">
                {movies.map((m, index) => {
                    if (index < moviesToShow) {
                        return <Card key={m.Order} posterImg={m.Movie.Media.filter(pi => pi.SubType === 'TV_SmallPosterImage')} title={m.Movie.Title} />
                    }
                    return 'good'
                })}
            </section>
            <div className='more-btn-container'>
                {moviesToShow < totalMovies ? 
                    <button className='load-more-btn' onClick={() => setMoviesToShow(moviesToShow + 5)}>Load More</button>
                : null}
            </div>
        </>
    )
}