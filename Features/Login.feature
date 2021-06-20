Feature: Login
Scenario: Successful login with valid credentials
			Given user launch chromebrowser
			When user opens url "http://demo.guru99.com/V4/"
			And user enter email as "mngr334130" 
			And user enter passsword as "umypasa"
			And click on login
		  And verify title page after login "
			When user clicks on logout link
			And close browser
			
Scenario Outline: Login data drivern with valid credentials and invalid credentials
			Given user launch chromebrowser
			When user opens url "http://demo.guru99.com/V4/"
			And user enter email as "<email>" 
			And user enter passsword as "<password>"
			And click on login
		  And verify title page after login "
			When user clicks on logout link
			And close browser
			
			Examples:			
			|email             | password |
			|mngr334130        | umypasa|
			| invalidusername  | invalid password|
			
			