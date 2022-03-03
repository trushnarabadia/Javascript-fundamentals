const User = require('./user.js');

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

class UserBase {
  constructor(users) {
  this.users = users;
  }

  count() {
    return users.length;
  };

  getNames() {
    return users.map(user => {
      return user.getName();
    });
  };

  getIntros() {
    return users.map(user => {
      return user.getIntro();
    });
  };
};


module.exports = UserBase;