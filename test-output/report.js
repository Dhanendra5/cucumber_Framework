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
formatter.step({
  "line": 12,
  "name": "click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should view confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.user_launch_chromebrowser()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.verify_title_page_after_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.click_on_new_customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.enter_new_customer_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.click_on_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.user_should_view_confirmation_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Add new account with generated new customer",
  "description": "",
  "id": "customers;add-new-account-with-generated-new-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user launch chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user opens url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enter email as \"mngr334130\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enter passsword as \"umypasa\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user should click on new Account",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user should add the account",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user should validate whether account got created successfully",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.user_launch_chromebrowser()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepdef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});