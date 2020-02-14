const {ArrayHelpers} = require('../lib/helpers');
const twoHours = 10;
const everyOneHours = 10;
const store = require('data-store')({ path: process.cwd() + '/data.json' });
/**
 * Pool
 * - Used to store data
 * */
function Pool() {}

/**
 * Clear Data In Pool
 * */
Pool.prototype.clearData = function () {
  store.set('size', 0);
  store.set('pool', []);
};
/**
 * Set Size
 * @param {number} size
 * */
Pool.prototype.setSize = function (size) {
  let size_old = this.getSize();
  let pool = this.getPool();
  let isArray = Array.isArray(pool);
  if (!isArray) {
    store.set('pool', []);
  }
  if (size >= size_old) {
    store.set('size', size);
  } else {
    return false;
  }
  return true;
};
/**
 * Get Data In Pool
 * @returns {array} data
 * */
Pool.prototype.getPool = function () {
  return store.get('pool');
};
Pool.prototype.getSize = function () {
  return store.get('size');
};
/**
 * Parking Lot
 * - Add Parking In Pool
 * @param {object} data
 * @param {string} data.name
 * @param {number} data.index
 * */
Pool.prototype.addPool = function (data) {
  let pool = this.getPool();
  let rs = ArrayHelpers.FindIndexArrayObject(pool, 'name', data.name);
  if (!rs) {
    pool[data.index] = {name: data.name, time: Date.now()};
    store.set('pool', pool);
    return true
  } else {
    return false
  }
};
/**
 * Find slot still empty
 * */
Pool.prototype.findEmpty = function () {
  let pool = this.getPool();
  let size = this.getSize();
  let index;
  for (let i = 0; i < size; i++) {
    if (!pool[i] || !pool[i].name) {
      index = i;
      break;
    }
  }
  return index;
};

/**
 * Pay Fee
 * - Payment when exit parking
 * @param {string} name
 * @param {number} hours
 * */
Pool.prototype.removePool = function (name, hours) {
  let pool = this.getPool();
  let rs = ArrayHelpers.FindIndexArrayObject(pool, 'name', name);
  if (rs) {
    let money = 0;
    if (hours <= 2) {
      money = (10 * hours)/2;
    } else {
      let after = hours - 2;
      money = 10 + (after * 10);
    }
    pool[rs.index] =  {
      name: null,
      time: null
    };
    store.set('pool', pool);
    return {
      index: rs.index,
      name: rs.object.name,
      money,
      hours
    }
  } else {
    return null;
  }
};

module.exports = Pool;
