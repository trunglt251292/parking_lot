const parkingLot = require('../index');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const colors = require('colors');

/**
 * Create Parking Lot
 * @param {number} number
 * */
function create_parking_lot(number) {
  if (Number.isInteger(parseInt(number))) {
    let data = parkingLot.setSizePool(parseInt(number));
    if (data) {
      console.log(`Created parking lot with ${parkingLot.Pool.getSize()} slots`);
      return true;
    }
    return false;
  } else {
    return false;
  }
}

/**
 * Leave Parking Lot
 * @param {string} car_name
 * @param {number} hours
 * */

function leave(car_name, hours) {
  let data = parkingLot.leavePark(car_name, parseInt(hours));
  if (!data.success) {
    console.log(`Registration number ${car_name} not found`);
    return false;
  } else {
    console.log(`Registration number ${data.data.name} with Slot Number ${data.data.index + 1} is free with Charge ${data.data.money}`)
    return true;
  }
}

/**
 * Park car
 * @param {string} car_name
 * */
function park(car_name) {
  let data = parkingLot.setPark(car_name);
  if (!data.success) {
    switch (data.params) {
      case "EXISTS":
        console.log(`Error: ${car_name} is exists.`);
        break;
      case "FULLED":
        console.log(data.error);
        break;
      case "NOT_SIZE":
        console.log(data.error);
        break;
      default:
        break;
    }
    return false;
  } else {
    console.log('Allocated slot number: ', data.data.index + 1);
    return true;
  }
}
/**
 * Get status park
 * */
function status () {
  let data = parkingLot.getParkDetail();
  console.log('Slot No.   Registration No.');
  data.map((element, index) => {
    if (element.name) {
      console.log(`${index + 1}   ${element.name}`);
    }
  });
  return data;
}
/**
 * Main run CLI by file
 * */
async function main (name_file) {
  let data = await fs.readFileSync(name_file, 'utf8');
  data = data.split('\n');
  for (let i  = 0; i < data.length; i++) {
    if (data[i]) {
      console.log(colors.blue(`COMMAND: ${data[i]}`));
      let { stdout, stderr } = await exec(data[i]);
      console.log(colors.green(`STDOUT: ${stdout}`));
    }
  }
  console.log('### DONE');
}

function clear_data () {
  parkingLot.clearData();
}

module.exports = {
  create_parking_lot,
  leave,
  park,
  status,
  main,
  clear_data
};
