import React from 'react';
import CardsStyle from './Cards.module.css'
import {useSelector} from 'react-redux'
import CountryCard from '../CountryCard/CountryCard'
import { Link } from 'react-router-dom'


export default function Cards() {
 
  let state = useSelector(state => state.countries)
  
  return (
    <div className={CardsStyle.cartas}>
      {state?.map((el) => <Link to={`/countries/${el.id}`}>
            <CountryCard key={el.id} name={el.name} continent={el.continent} img={el.img} />
          </Link>)}
      
    </div>
  )
};