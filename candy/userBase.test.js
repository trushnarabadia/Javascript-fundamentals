const User = require('./user.js');
const UserBase = require('./userBase.js');

describe('UserBase class', () => {

  const users = [
        new User('Uma'),
        new User('Josh'),
        new User('Ollie')
      ];

  it('returns UserBase.count', () => {
    let userBase = new UserBase(users);
    expect(userBase.count()).toEqual(3);
  });
  

  it('gets users intros', () => {
    let userBase = new UserBase(users);
    expect(userBase.getIntros()).toEqual(['Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie'])
  });

  it('gets users names', () => {
    let userBase = new UserBase(users);
    expect(userBase.getNames()).toEqual(['Uma', 'Josh', 'Ollie'])
  });

});


