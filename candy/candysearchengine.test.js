const candySearch = require('./candysearchengine.js');

describe('search candies', () => { 
  it('searches for candies beginning with "Ma" and a max price of 10', () => {
    expect(candySearch('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  });

  it('searches for candies beginning with "Ma" and a max price of 2', () => {
    expect(candySearch('Ma', 2)).toEqual([ 'Mars' ])
  });

  it('searches for candies beginning with "S" and a max price of 10', () => {
    expect(candySearch('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  });

  it('searches for candies beginning with "S" and a max price of 4', () => {
    expect(candySearch('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
  });


});