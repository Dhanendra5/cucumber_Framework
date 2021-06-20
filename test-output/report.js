$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user launch chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user opens url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter email as \"mngr334130\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter passsword as \"umypasa\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify title page after login \"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.user_launch_chromebrowser()"
});
formatter.result({
  "duration": 4408937881,
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
  "duration": 22372929673,
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
  "duration": 2140351503,
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
  "duration": 106503489,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_login()"
});
formatter.result({
  "duration": 2052222897,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_title_page_after_login()"
});
formatter.result({
  "duration": 19334916,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_clicks_on_logout_link()"
});
formatter.result({
  "duration": 869453825,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 354206387,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Login data drivern with valid credentials and invalid credentials",
  "description": "",
  "id": "login;login-data-drivern-with-valid-credentials-and-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user launch chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user opens url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter email as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter passsword as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify title page after login \"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login;login-data-drivern-with-valid-credentials-and-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 23,
      "id": "login;login-data-drivern-with-valid-credentials-and-invalid-credentials;;1"
    },
    {
      "cells": [
        "mngr334130",
        "umypasa"
      ],
      "line": 24,
      "id": "login;login-data-drivern-with-valid-credentials-and-invalid-credentials;;2"
    },
    {
      "cells": [
        "invalidusername",
        "invalid password"
      ],
      "line": 25,
      "id": "login;login-data-drivern-with-valid-credentials-and-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Login data drivern with valid credentials and invalid credentials",
  "description": "",
  "id": "login;login-data-drivern-with-valid-credentials-and-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user launch chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user opens url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter email as \"mngr334130\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter passsword as \"umypasa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify title page after login \"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.user_launch_chromebrowser()"
});
formatter.result({
  "duration": 3246858840,
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
  "duration": 3244046112,
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
  "duration": 246759228,
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
  "duration": 115582655,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_login()"
});
formatter.result({
  "duration": 1571050126,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_title_page_after_login()"
});
formatter.result({
  "duration": 8961750,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.user_clicks_on_logout_link()"
});
formatter.result({
  "duration": 805293799,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 2264575416,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login data drivern with valid credentials and invalid credentials",
  "description": "",
  "id": "login;login-data-drivern-with-valid-credentials-and-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user launch chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user opens url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter email as \"invalidusername\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter passsword as \"invalid password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify title page after login \"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.user_launch_chromebrowser()"
});
formatter.result({
  "duration": 3647886917,
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
  "duration": 3264732292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalidusername",
      "offset": 21
    }
  ],
  "location": "stepdef.user_enter_email_as(String)"
});
formatter.result({
  "duration": 269108021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid password",
      "offset": 25
    }
  ],
  "location": "stepdef.user_enter_passsword_as(String)"
});
formatter.result({
  "duration": 171089395,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_on_login()"
});
formatter.result({
  "duration": 470631658,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_title_page_after_login()"
});
formatter.result({
  "duration": 249731720,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : User or Password is not valid}\n  (Session info: chrome\u003d90.0.4430.212)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MYPC\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\pc\\AppData\\Local\\T...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:56207}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 90.0.4430.212, webStorageEnabled: true}\nSession ID: d98cb0db94b852afeefa5ee7670d0367\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat stepDefinitions.stepdef.verify_title_page_after_login(stepdef.java:63)\r\n\tat ✽.And verify title page after login \"(./Features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdef.user_clicks_on_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});