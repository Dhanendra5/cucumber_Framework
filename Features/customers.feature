Feature: Customers

Scenario: Add a new customer
				Given user launch chromebrowser
			  When user opens url "http://demo.guru99.com/V4/"
			  And user enter email as "mngr334130" 
			  And user enter passsword as "umypasa"
			  And click on login
			  And verify title page after login "
			  When Click on new customer
			  Then Enter new customer details 
			  And click on submit
			  Then user should view confirmation message 
			  And close the browser
			  
			  