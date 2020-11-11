let mynow = new Date();
//console.log(mynow);

let myexp = new Date("2020-11-12 01:00:00");
//console.log(myexp);

//milisec = myexp - mynow;

const dayinMil = 24 * 60 * 60 * 1000;
const hourinMil = 60 * 60 * 1000;
const mininMil = 60 * 1000;
const secinMil = 1000;

function fetchDay(mili) {
  return Math.floor(mili / dayinMil);
}

function fetchHour(mili) {
  return Math.floor((mili % dayinMil) / hourinMil);
}

function fetchMin(mili) {
  return Math.floor(((mili % dayinMil) % hourinMil) / mininMil);
}

function fetchSec(mili) {
  return Math.floor((((mili % dayinMil) % hourinMil) % mininMil) / secinMil);
}

// console.log(
//   milisec,
//   fetchDay(milisec),
//   fetchHour(milisec),
//   fetchMin(milisec),
//   fetchSec(milisec)
// );

module.exports.fetchDay=fetchDay;
module.exports.fetchHour=fetchHour;
module.exports.fetchMin=fetchMin;
module.exports.fetchSec=fetchSec;
