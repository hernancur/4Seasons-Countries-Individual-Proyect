import React, {useState, useEffect} from 'react';
import CardsStyle from './Cards.module.css'
import {useSelector} from 'react-redux'
import CountryCard from '../CountryCard/CountryCard'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination/pagination';
import OrderFilters from '../Filters/filters.jsx';


export default  function Cards() {
 
  let state =  useSelector( state =>  state.filteredCountries)
  // let actState = useSelector(state => state.filteredAct)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)

  const [pageLimit, setPageLimit] = useState(5)
  const [maxPage, setMaxPage] = useState(5)
  const [minPage, setMinPage] = useState(0)

  

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

  useEffect(()=>{
    setCurrentPage(1)
  }, [state])

  return (
    <>
     

      <div className={CardsStyle.fil}>
        <OrderFilters />
      </div>

      <div className={CardsStyle.cardss}>
        {currentItems?.map((el) =>
            <Link key={el.id} to={`/countries/${el.id}`}>
              <CountryCard key={el.population} name={el.name} continent={el.continent} img={el.img} />
            </Link>)}
      </div>

      <div className={CardsStyle.pag}>
        <Pagination 
          currentPage={currentPage}
          handleClick={handleClick}
          handlePrev={handlePrev}
          handleNext={handleNext}
          maxPage={maxPage}
          minPage={minPage}
          state={state.length}
          itemsPerPage={itemsPerPage}
        />
      </div>

    </>
  )
};