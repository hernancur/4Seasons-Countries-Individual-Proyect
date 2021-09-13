import React from 'react'
import style from './pagination.module.css'

export default function Pagination({currentPage, handleClick, handlePrev, handleNext, maxPage, minPage, state, itemsPerPage}) {

    let pages = []
    for(let i=1; i<=Math.ceil(state/itemsPerPage); i++){
        if(pages.length===24){
            pages.push(25)
        }else{
            pages.push(i)
        }
    }

    let pageIncrementButton = null;
    if(pages.length > maxPage){
      pageIncrementButton = <li onClick={handleNext} disabled={currentPage===pages.length-1?true:false}>&hellip;</li>
    }

    let pageDecrementButton = null;
    if(pages.length > maxPage){
      pageDecrementButton = <button onClick={handlePrev} disabled={currentPage===pages[0]?true:false}>&hellip;</button>
    }


    return(
        <div>
        <ul className={style.pagination}>

            <li>
            <button onClick={handlePrev} disabled={currentPage===pages[0]?true:false} >PREV</button>
            </li>
            {pageDecrementButton}
            {pages?.map(item => {
            
            if(item<maxPage+1 && item>minPage){
                return <li key={item}  id={item} onClick={handleClick} className={currentPage===item ? style.active : null} >{item}</li>
            }else{
                return null
            }})}
            {pageIncrementButton}
            <li>
            <button onClick={handleNext} disabled={currentPage===pages[24]?true:false}>NEXT</button>
            </li>

      </ul>

        </div>
    )
}