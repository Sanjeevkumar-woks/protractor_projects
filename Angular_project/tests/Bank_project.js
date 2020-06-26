
describe('Manager', function() {

    function verifyAndCloseAlert(text){
        let Ec=protractor.ExpectedConditions;
        browser.wait(Ec.alertIsPresent(),4000,"Alert not Found !");
        
        let alert=browser.switchTo().alert();
        let alertText=alert.getText();
        
        expect(alertText).toContain(text);
        alert.accept();
    }
    
  it('Manager login', function() {
    browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    element(by.buttonText("Bank Manager Login")).click();
    browser.sleep(5000);
  });


  it('Add customer', function() {	
      element(by.className("btn btn-lg tab")).click();
      element(by.model("fName")).sendKeys("Sanjeev");
      element(by.model("lName")).sendKeys("Managutti");
      element(by.model("postCd")).sendKeys("590016");
      element(by.className("btn btn-default")).click();
      browser.sleep(2000);
      verifyAndCloseAlert("Customer added successfully");
    });
   

    it('Open account', function() {
      element(by.buttonText("Open Account")).click();
      let Customers=element(by.model('custId'));
      let options=Customers.all(by.tagName('option'));
      //element(by.model("custId")).$('[value="Sanjeev Managutti"]').click();

      options.then(function(items){
            for(let i=0; i<items.length;  i++){
                 items[i].getText().then(function(txt){
                     if(txt == "Sanjeev Managutti"){
                         items[i].click();
                     }
                 })

            }  
         })
         browser.sleep(2000);

      element(by.model("currency")).$('[value="Rupee"]').click();
      element(by.buttonText("Process")).click();
      browser.sleep(2000);
      verifyAndCloseAlert("Account created successfully");      
    });

    xit('Deelet customer', function() {	
        element(by.buttonText("Customers")).click();
        let rows =element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
        rows.each(function(row){
            let cells=row.$$('td');
            cells.get(0).getText().then(function(txt){
                if(txt == 'Sanjeev'){
                    cells.get(4).$('button').click();
                }
            })
        })   	
        browser.sleep(5000);
    });
     

});



describe('Customer', function() {

    function verifyAndCloseAlert(text){
        let Ec=protractor.ExpectedConditions;
        browser.wait(Ec.alertIsPresent(),4000,"Alert not Found !");
        
        let alert=browser.switchTo().alert();
        let alertText=alert.getText();
        
        expect(alertText).toContain(text);
        alert.accept();
    }
    
  it('Customer Login', function() {
    browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    element(by.buttonText("Customer Login")).click();
    browser.sleep(5000);
  });

  it('Select customer', function() {
    let Customers=element(by.model('custId'));
    let options=Customers.all(by.tagName('option'));
    options.then(function(items){
          for(let i=0; i<items.length;  i++){
               items[i].getText().then(function(txt){
                   if(txt == "Sanjeev Managutti"){
                       items[i].click();
                   }
               })

          } 
          browser.sleep(2000);
          element(by.buttonText("Login")).click();   
     })
  });
      


  it('Deposit Amount', function() {	
        element(by.buttonText("Deposit")).click();  
        element(by.model("amount")).sendKeys("10000"); 
        element(by.className("btn btn-default")).click();
        browser.sleep(2000);
        element(by.className("error ng-binding")).getText().then(function(text){console.log(text)});
    // element(by.className("error ng-binding")).getText().then(function(text){expect(text).toContain("Deposit Successful")});
   });

   it('Withdrow Amount', function() {	
    element(by.buttonText("Withdrawl")).click();  
    element(by.model("amount")).sendKeys("5000"); 
    element(by.className("btn btn-default")).click();
    browser.sleep(2000);
    element(by.className("error ng-binding")).getText().then(function(text){console.log(text)});
    // element(by.className("error ng-binding")).getText().then(function(text){expect(text).toContain("Deposit Successful")});
    });
    
       
  it('Customer logout', function() {
    element(by.buttonText("Logout")).click();
    browser.sleep(5000);
  });

});
