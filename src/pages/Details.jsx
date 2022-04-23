import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Details({ movie }) {
    const [showMore, setShowMore] = useState(false);
    const [windowWidth, setWindowWidth] = useState(null);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const releaseDate = new Date(movie.OpeningDate).toLocaleDateString("en-US", options);
    let rating = null;

    if (!windowWidth) {
        setWindowWidth(window.window.innerWidth);
    }

    if (windowWidth < 768) {
        setShowMore(true);
    }

    switch (movie.Rating) {
        case 'PG':
            rating = 'https://www.regmovies.com/xmedia/img/10110/rating/PG.png';
            break;
        case 'R':
            rating = 'https://www.regmovies.com/xmedia/img/10110/rating/R.png';
            break;
        case 'PG13':
            rating = 'https://www.regmovies.com/xmedia/img/10110/rating/PG13.png';
            break;
        default:
            break;
    }
    return (
        <div className='details'>
            <Header />
            <div className="breadcrumb-wrapper">
                <Link className='breadcrumb' to="/">Home / {movie.Title}</Link>
            </div>
            <div className="details-wrapper">
                <div className='title'>
                    <h1>{movie.Title}</h1>
                    <img src={rating} alt={movie.Title} />
                </div>
                <div className='preview'>
                    <img src={movie.Media.filter(m => m.SubType === 'TV_CarouselFeature')[0].Url} alt={movie.Title} />
                </div>
                {windowWidth < 768 ?
                    <div className='more-details'>
                        <button onClick={() => setShowMore(!showMore)}>Movie Details</button>
                    </div>
                    :
                    null
                }
                {showMore ? 
                    <div className='show-more'>
                        <div className="details-content">
                            <h2>More information about</h2>
                            <div className="release-time-wrapper">
                                <div className='release'>
                                    <h4>Release date:</h4>
                                    <p>{releaseDate}</p>
                                </div>
                                <div className='Run-time'>
                                    <h4>Running time:</h4>
                                    <p>{movie.Duration} minutes</p>
                                </div>
                            </div>
                            <div className='movie-description'>{movie.LongDescription}</div>
                            <div className='original-title'>
                                <p className='group-heading'>Original title:</p>
                                <p>{movie.Title}</p>
                            </div>
                            <div className="cast">
                                <p className='group-heading'>Cast:</p>
                                <p>{movie.Actors.join(', ')}</p>
                            </div>
                            <div className='showing-in'>
                                <p className='group-heading'>Showing in:</p>
                                <p>{movie.Attributes.join(' ')}</p>
                            </div>
                        </div>
                        <div className='poster-img'>
                            <img src={movie.Media.filter(m => m.SubType === 'TV_TopShelfPosterImage')[0].Url} alt={movie.title} />
                        </div>
                    </div>
                : null}
            </div>
        </div>
    )
}