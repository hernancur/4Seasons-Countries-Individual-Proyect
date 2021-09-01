const { Country, Activity } = require('../db.js');
const axios = require('axios');
const { URL_ID } = require('../utils/variables.js');
const { Op } = require('sequelize');

const findById = async function (req, res) {
  try {
    let ident = req.params.id;
    let Eapi = await axios.get(URL_ID + ident);
    let union = {
      capital: Eapi.data.capital,
      subRegion: Eapi.data.subregion,
      area: Eapi.data.area,
      population: Eapi.data.population,
    };
    Country.findByPk(ident, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [{ model: Activity }],
    }).then((response) => {
      let arr = [];
      arr.push(response);
      response = arr.map((item) => {
        return {
          id: item.id,
          name: item.name,
          img: item.img,
          continent: item.continent,
          Activities: item.Activities.map((el) => {
            return {
              id: el.id,
              name: el.name,
              difficulty: el.difficulty,
              duration: el.duration,
              season: el.season,
            };
          }),
        };
      });
      res.send(Object.assign(response[0], union));
    }); // working
  } catch (error) {
    res.send(error);
  }
};

const findAll = function (req, res) {
  let searchName = req.query.name ? req.query.name : null;

  if (searchName) {
    searchName =
      searchName.charAt(0).toUpperCase() + searchName.slice(1).toLowerCase();
    // UpperCase the first letter and Lower the rest of it
    try {
      Country.findAll({
        where: {
          name: {
            [Op.like]: `%${searchName}%`,
          },
        },
        attributes: {
          exclude: [
            'capital',
            'subRegion',
            'area',
            'population',
            'createdAt',
            'updatedAt',
          ],
        },
      }).then((response) => {
        if (!response.length) res.status(404).send('Country not found');
        else res.status(200).send(response);
      });
    } catch (error) {
      res.send(error);
    }
  } else {
    try {
      Country.findAll({
        attributes: {
          exclude: [
            'capital',
            'subRegion',
            'area',
            'population',
            'createdAt',
            'updatedAt',
          ],
        },
      }).then((response) => res.status(200).send(response));
    } catch (error) {
      res.send(error);
    }
  }
};

const postActivity = async function (req, res) {
  try {
    let { name, difficulty, duration, season, countriesActivity } = req.body;
    let obj = {
      name,
      difficulty,
      duration,
      season,
    };

    await Activity.create(obj)
      .then((response) => response.addCountries(countriesActivity))
      .then((response) => res.send(response));
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  findById: findById,
  findAll: findAll,
  postActivity: postActivity,
};
