const assert = require('assert');
let {create_parking_lot, park, status, leave, clear_data} = require('../action');
const data = {
  size: 6,
  car_number: 'KA-01-HH-9999',
  hours: 10
};
before(() => { return clear_data() });
after(()=> { return clear_data() });

describe(`Create Parking Lot With ${data.size} Lot`, () => {
  it('should return true', () => {
    let result = create_parking_lot(data.size);
    assert.equal(result, true);
  });
});

describe(`Park Lot With Car_Number park ${data.car_number}`, () => {
  it('should be return true', () => {
    let result = park(data.car_number);
    assert.equal(result, true);
  });
});

describe(`Status Parking Lot`, () => {
  it('should be is array', function () {
    let result = status();
    assert.equal(Array.isArray(result), true);
  });
});

describe(`Leave Parking Lot With ${data.car_number} hours ${data.hours}`, () => {
  it('should be return true', function () {
    let result = leave(data.car_number, data.hours);
    assert.equal(result, true);
  });
});
