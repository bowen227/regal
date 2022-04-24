import React from 'react';

export default function Footer() {
    const sales = [
        { copy: 'Discount Movie Tickets', link: 'https://www.corporateboxoffice.com/discount-tickets.html'},
        { copy: 'Ultimate Movie Pack', link: 'https://corporateboxoffice.com/ultimate-movie-pack-1-3.html'},
        { copy: 'Private Screenings', link: 'https://www.corporateboxoffice.com/private-screenings'},
        { copy: 'Theatre Church', link: 'https://www.corporateboxoffice.com/theatre-church'},
        { copy: 'Business Events', link: 'https://www.corporateboxoffice.com/business-events'},
        { copy: 'Group Sales', link: 'https://www.corporateboxoffice.com/group-sales'},
        { copy: 'IMAX Education Screenings', link: 'https://www.corporateboxoffice.com/educational-screenings'},
        { copy: 'Birthday Parties', link: 'https://experience.regmovies.com/birthday-party?_ga=2.89934237.700983170.1650661103-1736677093.1650661103'},
        { copy: 'Private Watch Party', link: 'https://www.regmovies.com/static/en/us/private-watch-party'},
        { copy: 'Gift Card Balance Inquiry', link: 'https://wbiprod.storedvalue.com/wbir/clients/regmovies'}
    ];

    const about = [
        { copy: 'About', link: 'https://www.regmovies.com/static/en/us/about'},
        { copy: 'Regal Crown Club', link: 'https://www.regmovies.com/static/en/us/regal-crown-club-info'},
        { copy: 'Promotions', link: 'https://www.regmovies.com/static/en/us/promotions'},
        { copy: 'Partners', link: 'https://www.regmovies.com/static/en/us/about/partners'},
        { copy: 'FAQ', link: 'https://www.regmovies.com/static/en/us/help/faq'},
        { copy: 'Regal Admittance Procedures', link: 'https://www.regmovies.com/static/en/us/admittance-procedures'},
        { copy: 'Job Opportunities', link: 'https://www.regmovies.com/static/en/us/about/job-opportunities'},
        { copy: 'Privacy Policy', link: 'https://www.regmovies.com/static/en/us/privacy'},
        { copy: 'Terms of Service', link: 'https://www.regmovies.com/static/en/us/tos'}
    ];

    const contact = [
        { copy: 'Contact Us', link: 'https://experience.regmovies.com/contact-us?_ga=2.93028763.700983170.1650661103-1736677093.1650661103'},
        { copy: 'Regal\'s Coronavirus Response', link: 'https://www.regmovies.com/static/en/us/corona-virus-response'},
        { copy: 'Community Affairs', link: 'https://www.regmovies.com/static/en/us/about/community-affairs'},
        { copy: 'Advertise With Regal', link: 'http://www.ncm.com/'},
        { copy: 'Theatre Technologies', link: 'https://www.regmovies.com/static/en/us/theatre/technology'},
        { copy: 'Theatre List', link: 'https://www.regmovies.com/static/en/us/theatre-list'}
    ];

    const touch = [
        { copy: 'Facebook', link: 'https://www.facebook.com/RegalMovies'},
        { copy: 'Twitter', link: 'https://twitter.com/RegalMovies'},
        { copy: 'YouTube', link: 'https://www.youtube.com/user/OfficialRegalMovies'}
    ];

    const apps = [
        { copy: 'Android', link: 'https://play.google.com/store/apps/details?id=com.fandango.regal'},
        { copy: 'iOS', link: 'https://apps.apple.com/us/app/regal-cinemas/id502912815'}
    ]
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='sales col'>
                    <h4>
                        <strong>Corporate Sales</strong>
                    </h4>
                    <div className='links-wrapper'>
                        {sales.map(s => <p className='link-item'><a href={s.link}>{s.copy}</a></p>)}
                    </div>
                </div>
                <div className='about col'>
                    <h4>
                        <strong>About Regal</strong>
                    </h4>
                    {about.map(a => <p className='link-item'><a href={a.link}>{a.copy}</a></p>)}
                </div>
                <div className='contact col'>
                    <h4>
                        <strong>Contact</strong>
                    </h4>
                    {contact.map(c => <p className='link-item'><a href={c.link}>{c.copy}</a></p>)}
                </div>
                <div className='touch col'>
                    <h4>
                        <strong>Stay in Touch</strong>
                    </h4>
                    {touch.map(t => <p className='link-item'><a href={t.link}>{t.copy}</a></p>)}
                    <div className='apps'>
                        <h4>
                            <strong>Download The Regal App</strong>
                        </h4>
                        {apps.map(a => <p className='link-item'><a href={a.link}>{a.copy}</a></p>)}
                    </div>
                </div>
            </div>
            <div className='rights'>
                <p>All rights reserved Regal Theatres 2022 ©</p>
            </div>
        </footer>
    )
}