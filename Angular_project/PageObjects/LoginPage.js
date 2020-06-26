var LoginPage = function() {
   
    var Username = element(by.model("vm.username"));
    var Password = element(by.model("vm.password"));
    var Login= element(by.buttonText("Login"));
    
    var Logout=element(by.className("btn btn-primary"));

    
    this.get = function() {
      browser.get('http://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
    };

    this.SetUsername = function(name) {
        Username.sendKeys(name);
    };

    this.SetPassword = function(name) {
        Password.sendKeys(name);
    };

    this.ClickLogin = function() {
        Login.click();
    };

   
    this.ClickLogout = function() {
        Logout.click();
    };


    
  
  };
  module.exports = new LoginPage();