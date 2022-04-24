import React from 'react';
import CardDeck from '../components/CardDeck';
import FiftyFifty from '../components/FiftyFifty';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DONATE from '../shared/donate';

export default function Home({ movies }) {
    return (
        <div className='home'>
            <Header />
            {movies ? <CardDeck movies={movies} /> : 'Loading...'}
            <FiftyFifty imgUrl={DONATE.imgUrl} label={DONATE.label} title={DONATE.title} copy={DONATE.copy} btnText={DONATE.btnText} btnLink={DONATE.btnLink} />
            <Footer />
        </div>
    )
}