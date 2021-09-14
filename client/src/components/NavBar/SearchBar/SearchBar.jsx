import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import SearchBarStyle from './SearchBar.module.css'
import { getByName } from '../../../redux/actions';


export default function SearchBar() {

  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(getByName(search))
        setSearch("")
        
      }}>
        <input
          onChange={e => setSearch(e.target.value)}
          className={SearchBarStyle.busqueda}
          type="text"
          placeholder="Search country here..."
          name="search"
          value={search}
        />
        <input type="submit" className={SearchBarStyle.boton} value={`\uD83C\uDF1F`}/> 
      </form>
    </div>
  )
};

