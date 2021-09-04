import React from 'react';
import Landing from './LandingPage.module.css'
import { Link } from 'react-router-dom';


export default function LandingPage(){



    return (
        <div className={Landing.all}>
            <div className={Landing.center}>
                <div className={Landing.landingTitle}>
                    <span>EXPLORE THE WORLD</span>
                    <span>BOOK YOUR DREAMS</span>
                </div>
                <Link to='/home'>
                    <div className={Landing.buttonDiv}>
                        <span className={Landing.button}>Show me</span>
                    </div>
                </Link>
            </div>
        </div>
    )

}

