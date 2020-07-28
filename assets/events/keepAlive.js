const express = require('express');
const app = express();
const moment = require('moment');
const momenttz = require('moment-timezone');
const fs = require('mz/fs');

app.all('/', (req, res) => {
  res.send('Your bot is alive!')
})

app.get('/daily', async (req, res) => {
  const now = momenttz().tz("Japan");
  const result = [];

  for (let eq of JSON.parse(await fs.readFile('./assets/json/dailyOrder.json', 'utf8'))) {
      const name = eq[0];
      //const startDate = moment(eq[1], 'YYYYMMDD').subtract(1, 'day');
      const startDate = moment(eq[1], 'YYYYMMDD');
      const intervals = eq[2];

      let i = 0;
      while (startDate <= now) {
          if (startDate.isSame(now, 'day')) {
              result.push(name);
          }

          startDate.add(intervals[i++ % intervals.length], 'day');
      }
  }

  res.send(result);
});

function keepAlive() {
  const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
  });
}

module.exports = keepAlive;