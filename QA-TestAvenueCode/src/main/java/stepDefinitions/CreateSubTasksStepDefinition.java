package stepDefinitions;

import java.io.FileInputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateSubTasksStepDefinition {

	WebDriver driver;
	Properties prop;

	// Function to read configurations file which contains application url and
	// user - Username and Password
	public void readConfigFile() {
		try{
		// Read configuration file for Login
		prop = new Properties();
		FileInputStream stream = new FileInputStream("config.properties");
		prop.load(stream);
		}
		catch (Exception e) {
			System.out.println("Error while reading file:" + e);
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

	// Utility function to validate date format
	public static boolean validateJavaDate(String strDate) {
		// Check if date is 'null'
		if (strDate.trim().equals("")) {
			return true;
		}
		// Date is not 'null'
		else {
			SimpleDateFormat sdfrmt = new SimpleDateFormat("MM/dd/yyyy");
			sdfrmt.setLenient(false);
			try {
				Date date = sdfrmt.parse(strDate);
				System.out.println(strDate + " is valid date format" + date);
			}
			// Date format is invalid
			catch (ParseException e) {
				System.out.println(strDate + " is Invalid Date format");
				return false;
			}
			return true;
		}
	}

	// Function to Login user
	public void userLogIn() {
		try {
			driver.findElement(By.id("sign_in")).click();
			Thread.sleep(3000);

			String username = prop.getProperty("username");
			String password = prop.getProperty("password");
			driver.findElement(By.id("user_email")).sendKeys(username);
			driver.findElement(By.id("user_password")).sendKeys(password);
			driver.findElement(By.xpath("//*[@id='new_user']/input")).click();
		} catch (InterruptedException e) {
			System.out.println("Exception caught while using sleep" + e);
		}

	}

	@Given("^user is on default page$")
	public void already_on_main_page() {
		try {
			// Setup browser
			setUp();
			// Login user
			userLogIn();
			Thread.sleep(3000);
		} catch (Exception e) {
			System.out.println("Exception caught " + e);
		}
	}

	@When("^clicks my tasks button$")
	public void click_mytasks() {

		driver.findElement(By.id("my_task")).click();
	}

	@Then("^user creates a task (.*)$")
	public void createTask(String task) {

		driver.findElement(By.id("new_task")).sendKeys(task);
		driver.findElement(By.xpath("//span[@class='input-group-addon glyphicon glyphicon-plus']")).click();

	}

	@Then("^user clicks subtask button to create subtask$")
	public void createSubTask() {
		try {
			Thread.sleep(5000);
			driver.findElement(By.xpath("//tbody/tr[1]/td[4]/button[1]")).click();
		} catch (Exception e) {
			System.out.println("Exception caught " + e);
		}

	}

	@And("^verify Task ID and Task Description is read only$")
	public void verifyTaskDescription() {

		// Verify Task ID readonly
		boolean taskid = driver.findElement(By.xpath("/html/body/div[4]/div/div/div[1]/h3")).isEnabled();
		Assert.assertEquals("Task ID is editable - NOT READONLY", false, taskid);

		// verify Description Readonly
		boolean desc = driver.findElement(By.id("edit_task")).isEnabled();
		Assert.assertEquals("Task Description is editable - NOT READONLY", false, desc);

		tearDown();
	}

	@Then("^user clicks subtask button to create a new subtask -(.*) of length of (.*) characters in length$")
	public void subtaskAddition(String subtask, String length) {

		try {
			Thread.sleep(5000);
			driver.findElement(By.xpath("//tbody/tr[1]/td[4]/button[1]")).click();
			Thread.sleep(5000);
			System.out.println("Validating Text length :" + length);
			System.out.println("Validating Text  :" + subtask);
			int len = Integer.parseInt(length);
			Thread.sleep(5000);
			driver.findElement(By.id("new_sub_task")).sendKeys(subtask);
			driver.findElement(By.xpath("//button[normalize-space()='Add']")).click();
			Thread.sleep(5000);
			String xpath = "//a[contains(text(),'" + subtask + "'" + ")]";
			System.out.println("xpath =" + xpath);
			boolean subtaskadded = driver.findElement(By.xpath(xpath)).isDisplayed();

			if (len <= 0 && subtaskadded == true) {
				System.out.println("Text is empty =" + subtask);
				Assert.assertFalse("Task length is 0 characters, but added !!", len <= 0);

			} else if (len > 250 && subtaskadded == true) {
				System.out.println("Text greater than 250 =" + subtask);
				Assert.assertFalse("Task length is greater than 250 characters, but added !!", len > 250);
			}

			Assert.assertTrue("Task not added !!", subtaskadded);
			driver.findElement(By.xpath("(//button[normalize-space()='Close'])[1]")).click();

			tearDown();
		} catch (Exception e) {
			System.out.println("Exception caught " + e);
		}

	}

	@And("^validate Due Date field with (.*) and subtask as (.*)$")
	public void validateDueDateField(String date, String subtask) {
		try {
			System.out.println("Input Date =" + date);
			System.out.println("Input subtask =" + subtask);
			boolean validDate = validateJavaDate(date);
			driver.findElement(By.id("new_sub_task")).sendKeys(subtask);
			driver.findElement(By.id("dueDate")).sendKeys(date);
			driver.findElement(By.xpath("//button[normalize-space()='Add']")).click();
			Thread.sleep(3000);
			String xpath = "//a[contains(text(),'" + subtask + "'" + ")]";
			System.out.println("xpath =" + xpath);
			boolean subtaskadded = driver.findElement(By.xpath(xpath)).isDisplayed();
			System.out.println("Subtask Added =" + subtaskadded);
			System.out.println("Date Valid =" + validDate);
			if (!validDate && subtaskadded) {
				Assert.assertTrue("Invalid DueDate Format !!", validDate);
			}

			tearDown();
		} catch (Exception e) {
			System.out.println("Exception caught " + e);
		}

	}
}
