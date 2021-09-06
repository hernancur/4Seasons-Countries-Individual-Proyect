import React from 'react'
import SearchBar from './SearchBar/SearchBar.jsx'
import NavStyle from './NavBar.module.css'
import { Link } from 'react-router-dom'


export default function NavBar () {
    return (
        <div className={NavStyle.all}>
                <div className={NavStyle.globe}>
                    <Link to='/home'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/3/38/Erioll_world_3.png' alt='globe'/>
                    </Link>
                    <h3>WorldBook</h3>
                </div>

                <div className={NavStyle.search}>
                    <SearchBar/>
                </div>

                <Link to='/createActivity'>
                    <div className={NavStyle.book}>
                        <h3>Book an activity</h3>
                    </div>
                </Link>

        </div>
    )
}