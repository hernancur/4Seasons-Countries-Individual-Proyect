import React from 'react'
import CardStyle from './CountryCard.module.css'

export default function CountryCard (props) {
    return (
        <div key={props.id} className={CardStyle.all}>
            <div className={CardStyle.container} >
                <h4>{props.name}</h4>
                <span className="Span-Card">{props.continent}</span>
            </div>
                <img className={CardStyle.img} src={props.img} alt="flag" />
        </div>
    )
}
