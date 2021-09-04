import React from 'react'
import CardStyle from './CountryCard.module.css'

export default function CountryCard (props) {
    return (
        <div key={props.id} className={CardStyle.all}>
            <div className={CardStyle.imgContainer}>
                <img className={CardStyle.img} src={props.img} alt="flag" />
            </div>
            <div className={CardStyle.container} >
                <h4>{props.name}</h4>
                <h4>Continent: <span className="Span-Card">{props.continent}</span></h4>
            </div>
        </div>
    )
}
