import React from 'react'
import SearchBar from './SearchBar/SearchBar.jsx'
import NavStyle from './NavBar.module.css'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { getAll } from '../../redux/actions/index.js'


export default function NavBar () {

    const dispatch = useDispatch()

    function handleClick(e){
        e.preventDefault()
        dispatch(getAll())
    }

    return (
        <div className={NavStyle.all}>
                    <Link to='/home'>
                        <div className={NavStyle.globe} onClick={handleClick}>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/3/38/Erioll_world_3.png' alt='globe'/>
                            <h3>4Seasons</h3>
                        </div>
                    </Link>

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