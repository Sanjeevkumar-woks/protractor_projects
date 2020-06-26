
describe('Logged page', function() {
    it('Should varify the user', function() {
        browser.get("http://globalsqa.com/angularJs-protractor/registration-login-example/#/");
        browser.sleep(2000);
        element(by.className("ng-binding ng-scope")).getText().then(function(text){console.log(text)});
      browser.sleep(5000);
    });
  });

  var varify=element(by.className("ng-binding ng-scope"));