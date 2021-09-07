import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { POST_URL } from '../../utils/variables';

export default function CreateActivity() {
  let state = useSelector((state) => state.countries);

  let [activity, setAct] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countriesActivity: [],
  });

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
  }

  return (
    <div className="form">
      <div>
        <form onSubmit={handleSubmit}>
          {/*                                      NAME                                       */}

          <label>Activity Name</label>
          <input
            name="name"
            value={activity.name}
            onChange={handlerChange}
            required
          />

          {/*                                  DIFFICULTY                                       */}

          <label>Difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            onChange={handlerChange}
            value={activity.difficulty}
            required
          >
            <option value={''}></option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          {/*                                    DURATION                                       */}

          <label>{`Duration (days)`}</label>
          <input
            name="duration"
            min="1"
            max="365"
            value={activity.duration}
            onChange={handlerChange}
            required
          />

          {/*                                  SEASON                                       */}

          <label>Season</label>
          <select
            name="season"
            id="season"
            onChange={handlerChange}
            value={activity.season}
          >
            <option value={''}></option>
            <option value={'Spring'}>Spring</option>
            <option value={'Summer'}>Summer</option>
            <option value={'Autumn'}>Autumn</option>
            <option value={'Winter'}>Winter</option>
          </select>

          {/*                                  SELECTING COUNTRIES                                       */}

          <label>Select Country</label>
          <select
            name="Country"
            id="Country"
            onChange={countriesArrHandler}
            value={activity.countriesActivity}
          >
            <option value={''}></option>
            {state?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          {/*                                  CREATE BUTTON                                       */}

          <button
            className="create-button"
            type="submit"
            // onClick={handleSubmit}
          >
            Create!
          </button>

          {/*                                  IDS SELECTED COUNTRIES                                       */}

          <ul>
            {activity.countriesActivity?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
}
