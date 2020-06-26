var regestrationpage = require('../PageObjects/Regestrationpage');
describe('Regestration page', function() {
  it('Should regester the user', function() {
    regestrationpage.get();
    regestrationpage.SetFirstName('SANJEEV');
    regestrationpage.SetLastName('MANAGUTTI');
    regestrationpage.SetUsername('sanjeev@123');
    regestrationpage.SetPassword('Welcome');
    regestrationpage.ClickRegister();
    browser.sleep(5000);
  });
});

var loginpage = require('../PageObjects/LoginPage');
describe('Login page', function() {
  it('Should Login the user', function() {
    
    loginpage.get();
    loginpage.SetUsername('sanjeev@123');
    loginpage.SetPassword('Welcome');
    loginpage.ClickLogin();
    browser.sleep(5000);
    element(by.className("ng-binding ng-scope")).getText().then(function(text){console.log(text)});
    loginpage.ClickLogout();
    browser.sleep(5000);
    
  });
});