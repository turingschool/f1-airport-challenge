var assert = require('chai').assert
var Plane = require('./plane');
var Airport = require('./airport');

describe('User', function() {
  it.skip('should be able to have a name and passengers', function() {
    var plane1 = new Plane({ name: 'Southwest', passengers: ['Louisa', 'Khalid'] });
    var plane2 = new Plane({ name: 'Frontier', passengers: ['Robbie', 'Brittany'] });

    assert.equal(plane1.name, 'Southwest');
    assert.deepEqual(plane1.passengers, ['Louisa', 'Khalid'])

    assert.equal(plane2.name, 'Frontier');
    assert.deepEqual(plane2.passengers, ['Robbie', 'Brittany'])
  })

  it.skip('should not have any passengers by default', function() {
    var plane = new Plane({ name: 'United' });

    assert.deepEqual(plane.passengers, []);
  });

  it.skip('should be able to thank passengers for choosing their airline', function() {
    var plane1 = new Plane({ name: 'Southwest', passengers: ['Louisa', 'Khalid'] });
    var plane2 = new Plane({ name: 'Frontier', passengers: ['Robbie', 'Brittany'] });

    assert.equal(plane1.thankPassenger(), 'Thank you for choosing the Southwest airline.')
    assert.equal(plane2.thankPassenger(), 'Thank you for choosing the Frontier airline.')
  })

  it.skip('should be able to accept passengers', function() {
    var plane = new Plane({ name: 'Southwest', passengers: ['Louisa', 'Khalid'] });

    plane.acceptNewPassengers(['Will', 'Leta', 'David']);
    assert.deepEqual(plane.passengers, ['Louisa', 'Khalid', 'Will', 'Leta', 'David']);
  });

  it.skip('should be able to travel to an airport', function() {
    var airport = new Airport('Denver International Airport', 12);
    var plane1 = new Plane({ name: 'Southwest', passengers: ['Louisa', 'Khalid'] });
    var plane2 = new Plane({ name: 'Frontier', passengers: ['Robbie', 'Brittany'] });
    
    plane1.travelTo(airport);
    assert.equal(airport.planes[0].name, 'Southwest');

    plane2.travelTo(airport);
    assert.equal(airport.planes[0].name, 'Frontier');
    assert.equal(airport.planes[1].name, 'Southwest');
  });

  it.skip('should not be able to travel to an airport if there are no stations available', function() {
    var airport = new Airport('Denver International Airport', 2);
    var plane1 = new Plane({ name: 'Southwest', passengers: ['Louisa', 'Khalid'] });
    var plane2 = new Plane({ name: 'Frontier', passengers: ['Robbie', 'Brittany'] });
    var plane3 = new Plane({ name: 'United', passengers: ['Travis', 'Pam'] });

    assert.equal(airport.stationsAvailable, 2);

    plane1.travelTo(airport);
    assert.equal(airport.stationsAvailable, 1);

    plane2.travelTo(airport);
    assert.equal(airport.stationsAvailable, 0);
    assert.equal(airport.planes[0].name, 'Frontier');
    assert.equal(airport.planes[1].name, 'Southwest');

    plane3.travelTo(airport);
    assert.equal(airport.stationsAvailable, 0);
    assert.equal(airport.planes[0].name, 'Frontier');
    assert.equal(airport.planes[1].name, 'Southwest');
  });
});