import React from 'react';
import Landing from './LandingPage.module.css'
import { Link } from 'react-router-dom';


export default function LandingPage(){



    return (
        <div className={Landing.all}>
            <div className={Landing.center}>
                <div className={Landing.landingTitle}>
                    <span className={Landing.season}>4Seasons</span>
                    <span className={Landing.explore}>Explore the world, book your dreams</span>
                </div>
                <Link to='/home'>
                    <div className={Landing.buttonDiv}>
                        <button className={Landing.button}>Show me</button>
                    </div>
                </Link>
            </div>
        </div>
    )

}

