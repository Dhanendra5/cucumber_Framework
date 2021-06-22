$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/customers.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Add a new customer",
  "description": "",
  "id": "customers;add-a-new-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launch chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user opens url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter email as \"mngr334130\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter passsword as \"umypasa\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify title page after login \"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on new customer",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter new customer details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.user_launch_chromebrowser()"
});
formatter.result({
  "duration": 4844679279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.guru99.com/V4/",
      "offset": 16
    }
  ],
  "location": "stepdef.user_opens_url(String)"
});
formatter.result({
  "duration": 3968220764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr334130",
      "offset": 21
    }
  ],
  "location": "stepdef.user_enter_email_as(String)"
});
formatter.result({
  "duration": 446591163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "umypasa",
      "offset": 25
    }
  ],
  "location": "stepdef.user_enter_passsword_as(String)"
});
formatter.result({
  "duration": 105397596,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_login()"
});
formatter.result({
  "duration": 1348818486,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_title_page_after_login()"
});
formatter.result({
  "duration": 18317609,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_new_customer()"
});
formatter.result({
  "duration": 794553561,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.enter_new_customer_details()"
});
formatter.result({
  "duration": 7732452221,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add new account with generated new customer",
  "description": "",
  "id": "customers;add-new-account-with-generated-new-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user launch chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user opens url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter email as \"mngr334130\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enter passsword as \"umypasa\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should click on new Account",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user should add the account",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user should validate whether account got created successfully",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.user_launch_chromebrowser()"
});
formatter.result({
  "duration": 2304995777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.guru99.com/V4/",
      "offset": 16
    }
  ],
  "location": "stepdef.user_opens_url(String)"
});
formatter.result({
  "duration": 10561882144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr334130",
      "offset": 21
    }
  ],
  "location": "stepdef.user_enter_email_as(String)"
});
formatter.result({
  "duration": 142353306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "umypasa",
      "offset": 25
    }
  ],
  "location": "stepdef.user_enter_passsword_as(String)"
});
formatter.result({
  "duration": 100683090,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_login()"
});
formatter.result({
  "duration": 1741605011,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_click_on_new_Account()"
});
formatter.result({
  "duration": 808186501,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_should_add_the_account()"
});
formatter.result({
  "duration": 33641073,
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat pageObjects.NewAccount.entercustid(NewAccount.java:69)\r\n\tat stepDefinitions.stepdef.user_should_add_the_account(stepdef.java:131)\r\n\tat ✽.Then user should add the account(./Features/customers.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdef.user_should_validate_whether_account_got_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
});