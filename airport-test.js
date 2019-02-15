var assert = require('chai').assert
var Airport = require('./airport');

describe('Airport', function() {
  it.skip('should be a function', function () {
    assert.isFunction(Airport);
  });

  it.skip('should instantiate our aiport', function () {
    var airport = new Airport();

    assert.isObject(airport);
  });

  it.skip('should have a school name', function() {
    var airport1 = new Airport('Denver International Airport');
    var airport2 = new Airport('Newark Liberty International Airport');

    assert.equal(airport1.name, 'Denver International Airport');
    assert.equal(airport2.name, 'Newark Liberty International Airport');
  });

  it.skip('should default with no planes stationed', function() {
    var airport = new Airport('Denver International Airport');

    assert.deepEqual(airport.planes, []);
  });

  it.skip('should know how many stations are available', function() {
    var airport1 = new Airport('Denver International Airport', 12);
    var airport2 = new Airport('Newark Liberty International Airport', 4);
    
    assert.equal(airport1.stationsAvailable, 12);
    assert.equal(airport2.stationsAvailable, 4);
  });
});