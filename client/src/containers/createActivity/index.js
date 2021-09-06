import React, { useState, useSelector } from 'react'; //useDispatch 

export default function CreateActivity() {
//   let dispatch = useDispatch();

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

  function handleSubmit(e) {
    e.preventDefault();
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
            <option selected value={''}></option>
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
            <option selected value={''}></option>
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
            onChange={handlerChange}
            value={activity.countriesActivity}
          >
            <option selected value={''}></option>
            {state?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          {/*                                  CREATE BUTTON                                       */}

          <button className="create-button" type="submit">
            Create!
          </button>
        </form>
      </div>
    </div>
  );
};
