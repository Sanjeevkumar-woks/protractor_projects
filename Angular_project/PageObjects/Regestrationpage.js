var Regestrationpage = function() {
    var Firstname = element(by.model("vm.user.firstName"));
    var Lastname = element(by.model("vm.user.lastName"));
    var Username = element(by.model("vm.user.username"));
    var Password = element(by.model("vm.user.password"));
    var Register= element(by.buttonText("Register"));
    
  
    this.get = function() {
      browser.get('http://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    };
  
    this.SetFirstName = function(name) {
        Firstname.sendKeys(name);
    };

    this.SetLastName = function(name) {
        Lastname.sendKeys(name);
      };

      this.SetUsername = function(name) {
        Username.sendKeys(name);
    };
    this.SetPassword = function(name) {
        Password.sendKeys(name);
    };

    this.ClickRegister = function() {
        Register.click();
    };
  
  
  };
  module.exports = new Regestrationpage();