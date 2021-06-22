package stepDefinitions;

import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.WebDriver;

import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.NewAccount;

public class BaseClass {
	
	public WebDriver driver;
	public LoginPage lp;
	public AddCustomerPage addcust;
	public NewAccount newaccount;
	public String customerid;

	
	public String randomstring()
	{
		String generatedstring=RandomStringUtils.randomAlphabetic(8);
		return(generatedstring);
	}	

}
