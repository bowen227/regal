import React from 'react';
import CardDeck from '../components/CardDeck';
import Header from '../components/Header';

export default function Home({ movies }) {
    return (
        <div className='home'>
            <Header />
            {movies ? <CardDeck movies={movies} /> : 'Loading...'}
        </div>
    )
}