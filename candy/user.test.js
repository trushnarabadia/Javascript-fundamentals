const User = require('./user.js');

describe('User class', () => {
  it('returns user name', () => {
    let user = new User('Uma');
    expect(user.getName()).toBe('Uma');
  });

  it('gets users intro', () => {
    let user = new User('Uma');
    expect(user.getIntro()).toBe('Hi, my name is Uma')
  })
});
