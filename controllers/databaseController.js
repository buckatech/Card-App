//test object
const userDB = {
  user1: {
    email: 'test@test.com',
    password: '1234'
  },
  user2: {
    email: 'cant@test.com',
    password: '4321'
  }
};

//function to check if the email is present in the userDatabase
function doesEmailExist(email) {
  for (var key in userDB) {
    if (userDB[key].email === email) {
      return key;
    }
  }
}

const checkEmail =function (email, password){
  if (doesEmailExist(email)) {
    console.log('email yes');
  } else if (email && password) {
    console.log('email and password');
  } else {
    console.log('doge');
  }
};

checkEmail('', '');