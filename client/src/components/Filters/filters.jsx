import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import style from './filters.module.css'
import {order, population, filter, actFilter} from '../../redux/actions/index'

export default function OrderFilters(){

    const state = useSelector(state => state.activities)
    const dispatch = useDispatch()

    function handleOrderChange(e){
        if(e.target.value === "Default"){
            dispatch(filter(e.target.value))
        }else if(e.target.value==="UP" || e.target.value === "DOWN"){
            dispatch(order(e.target.value))
        }else{
            dispatch(population(e.target.value))
        }
    }

    function handleFilterChange(e){
        dispatch(filter(e.target.value))
    }

    function handleActChange(e){
        dispatch(actFilter(e.target.value))
    }

    return(
        <>
            <div className={style.box}>
            {/*                               ORDENAMIENTO                              */}
                <select  onChange={handleOrderChange}>
                    <option value="Default">Order By</option>
                    <option value="UP">A to Z</option>
                    <option value="DOWN">Z to A</option>
                    <option value="UP-P">Ascending Population</option>
                    <option value="DOWN-P">Descending Population</option>
                </select>
            </div>
            <div>
            {/*                               FILTRADO POR CONTINENTE                              */}
                <select  onChange={handleFilterChange}>
                    <option value="Default">Filter by region</option>
                    <option value="Europe">Europe</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Polar">Polar</option>
                </select>
            </div>
            <div>
            {/*                               FILTRADO POR ACTIVIDAD                              */}
                <select onChange={handleActChange}>
                    <option value="Default">Filter by Activity</option>
                    {state?.map((item) => (
                    <option key={item.id} value={item.name}>
                        {item.name}
                    </option>
                    ))}
                </select>
            </div>

        </>
    )
}