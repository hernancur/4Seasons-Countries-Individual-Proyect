//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const axios = require('axios');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { URL_ALL } = require('./src/utils/variables');
const { Country } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  let aux = await Country.findAll();
  if (!aux.length) {
    await axios.get(URL_ALL).then(async (response) => {
      let vital = response.data?.map((item) => {
        return {
          id: item.alpha3Code,
          name: item.name,
          img: item.flag,
          continent: item.region,
          population: item.population
        };
      });
      await Country.bulkCreate(vital);
    });
  }
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
