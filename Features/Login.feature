Feature: Login
Scenario: Successful login with valid credentials
			Given user launch chromebrowser
			When user opens url "https://demo.nopcommerce.com/login"
			And user enter email as "vundupuramdhanendra@gmail.com" and passsword as "Welcome@143"
			And click on login
			Then page title should be "nopCommerce demo store"
			When user clicks on logout link
			Then page title should be "your store. Login"
			And close browser
			
			