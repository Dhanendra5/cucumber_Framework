package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;


public class stepdef extends BaseClass {
	
	
	@Given("^user launch chromebrowser$")
	public void user_launch_chromebrowser()  {
	  
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		//passing driver parameter so that constructor will be invoked
		lp = new LoginPage(driver);
	}

	@When("^user opens url \"([^\"]*)\"$")
	public void user_opens_url(String url)  {
	  
		driver.manage().window().maximize();
		driver.get(url);
	    
	}
	
	@When("^user enter email as \"([^\"]*)\"$")
	public void user_enter_email_as(String username)  {
		
		lp.setUserName(username);
	
	}

	@When("^user enter passsword as \"([^\"]*)\"$")
	public void user_enter_passsword_as(String password) {
		
		lp.setPassword(password);
	   
	}

	@When("^click on login$")
	public void click_on_login()  {
	  
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
		lp.clickSubmit();
	
	    
	}
	
	@When("^verify title page after login \"$")
	public void verify_title_page_after_login() {
		
		String title = driver.getTitle();
		System.out.println("title of page " + title);
		Assert.assertEquals("Guru99 Bank Manager HomePage", title);	  
	}

	@When("^user clicks on logout link$")
	public void user_clicks_on_logout_link() throws InterruptedException  {
	  
	 lp.clickLogout();
	 
	}

	@Then("^close browser$")
	public void close_browser()  {
	  
	    driver.close();
	    
	}
	
	//customers features step definitions
	
	@When("^Click on new customer$")
	public void click_on_new_customer() {
	  
	addcust = new AddCustomerPage(driver);
	addcust.clickAddNewCustomer();
		
	}

	@Then("^Enter new customer details$")
	public void enter_new_customer_details() throws InterruptedException {
		
	
	
		addcust.custName("Dhani");
		addcust.custgender("male");
		addcust.custdob("10","15","1985");
		Thread.sleep(5000);
		addcust.custaddress("INDIA");
		addcust.custcity("HYD");
		addcust.custstate("AP");
		addcust.custpinno("5000074");
		addcust.custtelephoneno("987890091");
		String email=randomstring()+"@gmail.com";
		addcust.custemailid(email);
		addcust.custpassword("abcdef");
		addcust.custsubmit();
		

		
		boolean res=driver.getPageSource().contains("Customer Registered Successfully!!!");
		
		if(res==true)
		{
			Assert.assertTrue(true);
		}
		else
		{
			Assert.assertTrue(false);
		}
		
	}

	@Then("^click on submit$")
	public void click_on_submit() {
	  
	
	}

	@Then("^user should view confirmation message$")
	public void user_should_view_confirmation_message() {
	  
	
	}

	@Then("^close the browser$")
	public void close_the_browser() {
	  
	
	
	}
	
	//steps for adding a new account for generated customer
	@When("^user should click on new Account$")
	public void user_should_click_on_new_Account()  {
	   
	   
	}

	@Then("^user should add the account$")
	public void user_should_add_the_account()  {
	   
	   
	}

	@Then("^user should validate whether account got created successfully$")
	public void user_should_validate_whether_account_got_created_successfully()  {
	   
	}

}
