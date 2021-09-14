import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
      <div className={countryDetails.container}>
        <div className={countryDetails.nameContainer}>
          
          <Link to='/home'>
              <h5>Home</h5>
          </Link>
          <div className={countryDetails.nameContainer__flag}>
            <img src={item.img} alt={item.name} />
          </div>
          <div className={countryDetails.nameContainer__name}>
            <div className={countryDetails.nameContainer__name__country}>
              <h1>{item.name}</h1>
            </div>
            <div className={countryDetails.nameContainer__name__capital}>
              <h2>{item.capital}</h2>
            </div>
            
          </div>

        </div>
        <div className={countryDetails.infoContainer}>
          <div className={countryDetails.infoContainer__properties}>
            <div className={countryDetails.infoContainer__properties__1}>
              <h3>{item.continent}</h3>
            </div>
            <div className={countryDetails.infoContainer__properties__1}>
              <h3>{item.subRegion}</h3>
            </div>
            <div className={countryDetails.infoContainer__properties__1}>
              <h3> Area: {item.area}</h3>
            </div>
            <div className={countryDetails.infoContainer__properties__1}>
              <h3>Population: {item.population}</h3>
            </div>
          </div>
          <div className={countryDetails.infoContainer__activities}>  
              {item.Activities?.map((act) => (
                <div className={countryDetails.infoContainer__activities__card}>
                  <div className={countryDetails.infoContainer__activities__card__infoContainer__1}>
                    <div className={countryDetails.infoContainer__activities__card__infoContainer__1__name}>
                      <h3>{act.name}</h3>
                    </div>
                    <div className={countryDetails.infoContainer__activities__card__infoContainer__1__season}>
                      <h4>Season </h4>
                      <p>{act.season}</p>
                    </div>
                  </div>
                  <div className={countryDetails.infoContainer__activities__card__infoContainer__2}>
                    <div className={countryDetails.infoContainer__activities__card__infoContainer__2__duration}>
                      <h4>Duration </h4>
                      <p>{act.duration}</p>
                    </div>
                    <div className={countryDetails.infoContainer__activities__card__infoContainer__2__difficulty}>
                      <h4>Difficulty</h4>
                      <p>{act.difficulty}</p>
                    </div>

                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    ))
    }
    </div>
  );
}
















      // {/* {countryContainer?.map((item) => (
      //   <div className={item.id}>
      //     <div>
      //       <span>{item.name}</span>
      //     </div>
      //     <div>
      //       <img src={item.img} alt="flag" />
      //     </div>
      //     <div>
      //       <span>Continent: {item.continent}</span>
      //       <span>SubRegion: {item.subRegion}</span>
      //       <span>Capital: {item.capital}</span>
      //     </div>
      //     <div>
      //       <span>Area: {item.area}</span>
      //       <span>Population: {item.population}</span>
      //     </div>
      //     <div>
      //       {item.Activities?.map((act) => (
      //         <div className={act.id} key={act.id}>
      //           <span>Activity: {act.name}</span>
      //           <span>Difficulty: {act.difficulty}</span>
      //           <span>Duration: {act.duration}</span>
      //           <span>Season: {act.season}</span>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // ))} */}