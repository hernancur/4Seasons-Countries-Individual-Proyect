import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { POST_URL } from '../../utils/variables';
import style from '../createActivity/createActivity.module.css';
import {Link} from 'react-router-dom'

export default function CreateActivity() {
  let state = useSelector((state) => state.countries);
  let {push} = useHistory()

  let [activity, setAct] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    price: null,
    countriesActivity: [],
  });

  let [stateButton, setSB] = useState(true)



  function handlerChange(e) {
    setAct({
      ...activity,
      [e.target.name]: e.target.value,
    });
  }

  function countriesArrHandler(e) {
    setAct({
      ...activity,
      countriesActivity: Array.from(
        new Set([...activity.countriesActivity, e.target.value])
      ),
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(POST_URL, activity);
    alert("Activity created successfully")
    push('/home')
  }

  useEffect(()=> {
    if(activity.name && activity.difficulty && activity.duration && activity.season && activity.countriesActivity.length){
      setSB(false)
    }else{
      setSB(true)
    }
  },[activity])


  return (
    <div className={style.form}>
      <div className={style.opacity}>
      </div>

      <div className={style.form__lef}>
        <Link to='/home'>
          <button type="submit">Home</button>
        </Link>
      </div>
      <form className={style.form__side} key="1" onSubmit={handleSubmit}>
        <div className={style.opacity}></div>

        <div className={style.form__side__up}>
          <div className={style.form__side__up_up}>
            <label className={style.form__labelName} key="activity name">Activity Name</label>
            <input
              name="name"
              value={activity.name}
              onChange={handlerChange}
              required
            />
            <label className={null} key="activity price">Price</label>
            <input
              name="price"
              value={activity.price}
              onChange={handlerChange}
            />
          </div>
          <div className={style.form__side__up_down}>
            <label className={style.form__labelDuration} key="activity name">Duration(days)</label>
            <input
            name="duration"
            min="1"
            max="365"
            value={activity.duration}
            onChange={handlerChange}
            required
          />

          </div>

        </div>
        <div className={style.form__side__down}>
          <div className={style.form__side__down__up}>
            <label className={style.form__side__down__up__country}>Country</label>
            <select
              name="Country"
              id="Country"
              onChange={countriesArrHandler}
              value={activity.countriesActivity}
            >
              <option value={''}>Select countries</option>
              {state?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className={style.form__side__down__down}>
            <div className={style.form__side__down__down__left}>
            <label className={style.form__side__down__down__left_season}>Season</label>
            <select
              name="season"
              id="season"
              onChange={handlerChange}
              value={activity.season}
            >
              <option value={''}>Choose one</option>
              <option value={'Spring'}>Spring</option>
              <option value={'Summer'}>Summer</option>
              <option value={'Autumn'}>Autumn</option>
              <option value={'Winter'}>Winter</option>
            </select>

            </div>
            <div className={style.form__side__down__down__right}>
            <label className={style.form__side__down__down__right__diff} key="difficulty" >Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              onChange={handlerChange}
              value={activity.difficulty}
              required
            >
              <option value={''}>Choose one</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            </div>
          </div>

        </div >
        <div className={style.divBut}>

        <button
            className="create-button"
            type="submit"
            disabled={stateButton ? true : false}
            onSubmit={handleSubmit}
            id="buttonC"
          >
            Create !
          </button>
        </div>

       
      </form>
    </div>
  );
}

