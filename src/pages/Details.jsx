import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Details({ movie }) {
    const [showMore, setShowMore] = useState(false);
    const [windowWidth, setWindowWidth] = useState(null);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const releaseDate = new Date(movie.OpeningDate).toLocaleDateString("en-US", options);
    const trailer = movie.Media.filter(m => m.SubType === 'Trailer_Youtube')[0];
    const embedUrl = 'https://www.youtube.com/embed/';
    const trailerUrl = `${embedUrl}${trailer.Url.split('/')[3]}?autoplay=1&mute=1&origin=https://regal-test.netlify.app`;
    let rating = null;

    if (!windowWidth) {
        setWindowWidth(window.window.innerWidth);
    }

    const handleResize = () => {
        setWindowWidth(window.window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

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
                <span className='breadcrumb'>
                    <Link to="/">Home /</Link> {movie.Title}
                </span>
            </div>
            <div className="details-wrapper">
                <div className='title'>
                    <h1>{movie.Title}</h1>
                    <img src={rating} alt={movie.Title} />
                </div>
                <div className='preview'>
                    {trailer ? 
                        <iframe
                          className='responsive-iframe'
                          src={trailerUrl}
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title="video"
                        />
                    : null}
                </div>
                {windowWidth < 768 ?
                    <div className='more-details'>
                        <button onClick={() => setShowMore(!showMore)}>Movie Details</button>
                    </div>
                    :
                    null
                }
                {showMore || windowWidth > 767 ? 
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
            <Footer />
        </div>
    )
}