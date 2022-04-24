import React from 'react';

export default function FiftyFifty({ imgUrl, label, title, copy, btnText, btnLink}) {
    return (
        <section className='fifty-fifty'>
            <div className='fifty-container'>
                <h2>{label}</h2>
                <div className='fifty-wrapper'>
                    <div className='img-wrapper'>
                        <img src={imgUrl} alt={title} />
                    </div>
                    <div className='content-wrapper'>
                        <div className='content'>
                            <h3>{title}</h3>
                            <p>{copy}</p>
                        </div>
                        <div className='btn-wrapper'>
                            <span>
                                <a href={btnLink}><span>{btnText}</span></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}