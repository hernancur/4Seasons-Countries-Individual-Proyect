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
                        <div onClick={handleClick} className={NavStyle.container}>
                            <Link to='/home'>
                                <ul className={NavStyle.main}>
                                    <li data-val="Home">Home</li>
                                </ul>
                            </Link>
                        </div>


                    <div className={NavStyle.container}>
                        <Link to='/createActivity'>
                            <ul className={NavStyle.main}>
                                <li data-val="Book an activity">Book an activity</li>
                            </ul>
                        </Link>
                    </div>

                <div className={NavStyle.container}>
                    <SearchBar/>
                </div>
        </div>
    )
}