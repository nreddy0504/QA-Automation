package stepDefinitions;

import java.io.FileInputStream;
import java.io.IOException;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreatTasksStepDefinition {

	WebDriver driver;
	Properties prop;
	String newtask;

	// Function to read configurations file which contains application url and
	// user - Username and Password
	public void readConfigFile() {

		try {
			// Read configuration file for Login
			prop = new Properties();
			FileInputStream stream = new FileInputStream("config.properties");
			prop.load(stream);
		} catch (IOException e) {
			System.out.println("Exception caught " + e);
		}
	}

	// Function to setup Selenium Webdrivers
	public void setUp() {
		try {
			readConfigFile();
		} catch (Exception e) {
			System.out.println("Error while reading file:" + e);
		}
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "//Drivers//chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		String url = prop.getProperty("url");
		System.out.println("URL=" + url);
		driver.get(url);
	}

	// Function to close down browser
	public void tearDown() {
		driver.quit();
	}

	// Function to Login user
	public void userLogIn(){
		try {
			driver.findElement(By.id("sign_in")).click();
			Thread.sleep(3000);

			String username = prop.getProperty("username");
			String password = prop.getProperty("password");
			driver.findElement(By.id("user_email")).sendKeys(username);
			driver.findElement(By.id("user_password")).sendKeys(password);
			driver.findElement(By.xpath("//*[@id='new_user']/input")).click();
		} catch (InterruptedException e) {
			System.out.println("Exception caught " + e);
		}

	}

	@Given("^user is on logged in page$")
	public void already_on_main_page() {
		try {
			// Setup Browser
			setUp();
			// Log in user
			userLogIn();
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			System.out.println("Exception caught " + e);
		}
	}

	@When("^clicks my tasks button link$")
	public void click_mytasks() {

		driver.findElement(By.id("my_task")).click();

	}

	@Then("^user should see a message on the top part saying that list belongs to the logged user$")
	public void verify_message() {

		String msg = driver.findElement(By.xpath("/html/body/div[1]/h1")).getText();
		Assert.assertEquals("Message displayed is not as expected - Hey <username> this is your todo list for today",
				true, msg.contains("this is your todo list for today"));

		tearDown();
	}

	@Then("^user should able to create task -(.*) of length of (.*) characters in length$")
	public void verifyTaskLength(String task, String length) {

		try {
			System.out.println("Validating Text length :" + length);
			System.out.println("Validating Text  :" + task);
			Thread.sleep(5000);
			int len = Integer.parseInt(length);
			driver.findElement(By.id("new_task")).sendKeys(task);
			driver.findElement(By.xpath("//span[@class='input-group-addon glyphicon glyphicon-plus']")).click();
			Thread.sleep(5000);
			String xpath = "//a[contains(text(),'" + task + "'" + ")]";
			boolean taskadded = driver.findElement(By.xpath(xpath)).isDisplayed();
			System.out.println("Task Added Boolean =" + taskadded);
			if (len <= 3 && taskadded == true) {
				System.out.println("Text less 3=" + task);
				Assert.assertFalse("Task length is less than 3 characters, but added !!", len <= 3);
			} else if (len > 250 && taskadded == true) {
				System.out.println("Text greater than 250 =" + task);
				Assert.assertFalse("Task length is greater than 250 characters, but added !!", len > 250);
			}

			Assert.assertTrue("Task not added !!", taskadded);

			tearDown();
		} catch (InterruptedException e) {
			System.out.println("Exception caught " + e);
		}
	}

}
