const Pool = require('./pool');

class ParkingLot {
  constructor() {
    this.Pool = new Pool();
  }
  /**
   * Set Size Pool
   * @param {number} size
   * */
  setSizePool (size) {
    return this.Pool.setSize(size);
  }
  /**
   * Park
   * @param {string} car_number
   * */
  setPark (car_number) {
    if (!this.Pool.getSize()) {
      return {
        success: false,
        error: 'Please create parking lot. Command: create_parking_lot {Number}',
        params: 'NOT_SIZE'
      }
    } else {
      let index = this.Pool.findEmpty();
      if (!index && index!==0) {
        return {
          success: false,
          error: 'Sorry, park lot is full',
          params: 'FULLED'
        }
      } else {
        let result = this.Pool.addPool({
          index,
          name: car_number
        });
        return !result ? {
          success: false,
          error: 'Car_number is exists.',
          params: 'EXISTS'
        } : {
          success: true,
          data: {
            index,
            name: car_number
          }
        }
      }
    }
  }
  /**
   * Leave park
   * @param {string} name
   * @param {number} hours
   * */
  leavePark (name, hours) {
    let result = this.Pool.removePool(name, hours);
    if (!result) {
      return {
        success: false,
        error: 'Car_number not found',
        params: 'CAR_NUMBER_NOTE_FOUND'
      }
    } else {
      return {
        success: true,
        data: result
      }
    }
  }
  /**
   * Get Pool
   * */
  getParkDetail () {
    return this.Pool.getPool();
  }
  /**
   * Clear Data
   * */
  clearData () {
    this.Pool.clearData();
  }
}

const parkingLot = new ParkingLot();

module.exports = parkingLot;




