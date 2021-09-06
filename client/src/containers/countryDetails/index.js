import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../../redux/actions';
import countryDetails from './countryDetails.module.css';

export default function CountryDetails() {
  const state = useSelector((state) => state.country); // {...}
  const dispatch = useDispatch();
  const { id } = useParams();
  let countryContainer = []
  countryContainer.push(state)

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  return (
    <div className={countryDetails.all}>
      {countryContainer?.map((item) => (
        <div className={item.id}>
          <div>
            <span>{item.name}</span>
          </div>
          <div>
            <img src={item.img} alt="flag" />
          </div>
          <div>
            <span>Continent: {item.continent}</span>
            <span>SubRegion: {item.subRegion}</span>
            <span>Capital: {item.capital}</span>
          </div>
          <div>
            <span>Area: {item.area}</span>
            <span>Population: {item.population}</span>
          </div>
          <div>
            {item.Activities?.map((act) => (
              <div className={act.id}>
                <span>Activity: {act.name}</span>
                <span>Difficulty: {act.difficulty}</span>
                <span>Duration: {act.duration}</span>
                <span>Season: {act.season}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
