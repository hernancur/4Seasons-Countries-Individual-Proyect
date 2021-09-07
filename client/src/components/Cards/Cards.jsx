import React, {useState} from 'react';
import CardsStyle from './Cards.module.css'
import {useSelector} from 'react-redux'
import CountryCard from '../CountryCard/CountryCard'
import { Link } from 'react-router-dom'


export default function Cards() {
 
  let state = useSelector(state => state.countries)

  /* temas a ver: 
    no me muestra el pais 10 porque queda por fuera del 9-10 del paginado
  */


  /*                                                   PAGINATION                                           */
  
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)

  const [pageLimit, setPageLimit] = useState(5)
  const [maxPage, setMaxPage] = useState(5)
  const [minPage, setMinPage] = useState(0)

  
  let pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

  const indexOfLastItem = currentPage*itemsPerPage
  const indexOfFirstItem = indexOfLastItem-itemsPerPage 
  const currentItems = state.slice(indexOfFirstItem, indexOfLastItem) 

  function handleClick(e){
    if(Number(e.target.id) === 1) setItemsPerPage(9)
    if(Number(e.target.id) !== 1) setItemsPerPage(10)
    setCurrentPage(Number(e.target.id))
    setPageLimit(5)
  }
  
  function handlePrev(e){
    setCurrentPage(currentPage-1)
    if((currentPage-1)%pageLimit===0){
      setMaxPage(maxPage-pageLimit)
      setMinPage(minPage-pageLimit)
    }
  }

  function handleNext(e){
    setCurrentPage(currentPage+1)
    if(currentPage+1>maxPage){
      setMaxPage(maxPage+pageLimit)
      setMinPage(minPage+pageLimit)
    }
  }

  let pageIncrementButton = null;
  if(pages.length > maxPage){
    pageIncrementButton = <li onClick={handleNext}>&hellip;</li>
  }
  
  let pageDecrementButton = null;
  if(pages.length > maxPage){
    pageDecrementButton = <button onClick={handlePrev} disabled={currentPage===pages[0]?true:false}>&hellip;</button>
  }
  
  return (
    <div className={CardsStyle.cartas}>
      <ul className={CardsStyle.pagination}>

        <li>
          <button onClick={handlePrev} disabled={currentPage===pages[0]?true:false} >PREV</button>
        </li>
        {pageDecrementButton}
        {pages?.map(item => {
          
          if(item<maxPage+1 && item>minPage){
            return <li key={item}  id={item} onClick={handleClick} className={currentPage===item ? CardsStyle.active : null} >{item}</li>
          }else{
            return null
          }})}
        {pageIncrementButton}
        <li>
          <button onClick={handleNext} disabled={currentPage===pages[24]?true:false}>NEXT</button>
        </li>

      </ul>

      {currentItems?.map((el) =>
          <Link key={el.id} to={`/countries/${el.id}`}>
            <CountryCard key={el.population} name={el.name} continent={el.continent} img={el.img} />
          </Link>)}

    </div>
  )
};