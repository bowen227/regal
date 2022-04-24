import React from 'react';
import SALES from '../shared/sales';
import ABOUT from '../shared/about';
import CONTACT from '../shared/contact';
import TOUCH from '../shared/touch';
import APPS from '../shared/apps';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='sales col'>
                    <h4>
                        <strong>Corporate Sales</strong>
                    </h4>
                    <div className='links-wrapper'>
                        {SALES.map(s => <p className='link-item'><a href={s.link}>{s.copy}</a></p>)}
                    </div>
                </div>
                <div className='about col'>
                    <h4>
                        <strong>About Regal</strong>
                    </h4>
                    {ABOUT.map(a => <p className='link-item'><a href={a.link}>{a.copy}</a></p>)}
                </div>
                <div className='contact col'>
                    <h4>
                        <strong>Contact</strong>
                    </h4>
                    {CONTACT.map(c => <p className='link-item'><a href={c.link}>{c.copy}</a></p>)}
                </div>
                <div className='touch col'>
                    <h4>
                        <strong>Stay in Touch</strong>
                    </h4>
                    {TOUCH.map(t => <p className='link-item'><a href={t.link}>{t.copy}</a></p>)}
                    <div className='apps'>
                        <h4>
                            <strong>Download The Regal App</strong>
                        </h4>
                        {APPS.map(a => <p className='link-item'><a href={a.link}>{a.copy}</a></p>)}
                    </div>
                </div>
            </div>
            <div className='rights'>
                <p>All rights reserved Regal Theatres 2022 ©</p>
            </div>
        </footer>
    )
}