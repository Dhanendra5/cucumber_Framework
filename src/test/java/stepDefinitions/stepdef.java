package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPage;

public class stepdef {
	
	public WebDriver driver;
	public LoginPage lp;
	
	@Given("^user launch chromebrowser$")
	public void user_launch_chromebrowser()  {
	  
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		//passing driver parameter so that constructor will be invoked
		lp = new LoginPage(driver);
	}

	@When("^user opens url \"([^\"]*)\"$")
	public void user_opens_url(String url)  {
	  
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

}
