package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import utilities.WaitHelper;

public class NewAccount {
	
public WebDriver ldriver;
WaitHelper waithelper;
	
	public NewAccount(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
		waithelper = new WaitHelper(ldriver);
	}
	
	@FindBy(how = How.XPATH, using ="//a[contains(text(),'New Account')]")
	@CacheLookup
	WebElement clickNewAccount;
	
	@FindBy(name="cusid")
	@CacheLookup
	WebElement custidtxtbox;
	
	@FindBy(name="inideposit")
	@CacheLookup
	WebElement deposit;
	
	
	@FindBy(name="selaccount")
	@CacheLookup
	WebElement Accounttype;
	
	@FindBy(name="button2")
	@CacheLookup
	WebElement submitnewaccount;
	
	
	
	public void ClickNewAccount()
	{
		clickNewAccount.click();	}
	
	public void initialDeposit(String amt)
	{
		deposit.sendKeys(amt);
	}
		
	public void submitnewaccount()
	{
		submitnewaccount.click();
	}
	
	public  void accountdropdown(int index) {
	      Select drop = new Select(Accounttype);
	      drop.selectByIndex(index);  
	}
	
	public void entercustid(String custidnum)
	{
		custidtxtbox.sendKeys(custidnum);
	}
	
	
	
		

}
