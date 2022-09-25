$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateSubTasks.feature");
formatter.feature({
  "line": 1,
  "name": "Create and manage subtasks",
  "description": "",
  "id": "create-and-manage-subtasks",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario to check Task ID and Task Description as Read only"
    }
  ],
  "line": 4,
  "name": "",
  "description": "",
  "id": "create-and-manage-subtasks;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on default page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "clicks my tasks button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user creates a task - New Task for SubTask",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks subtask button to create subtask",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify Task ID and Task Description is read only",
  "keyword": "And "
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.already_on_main_page()"
});
formatter.result({
  "duration": 28659055500,
  "status": "passed"
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.click_mytasks()"
});
formatter.result({
  "duration": 4593417900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "- New Task for SubTask",
      "offset": 20
    }
  ],
  "location": "CreateSubTasksStepDefinition.createTask(String)"
});
formatter.result({
  "duration": 206562300,
  "status": "passed"
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.createSubTask()"
});
formatter.result({
  "duration": 5122359400,
  "status": "passed"
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.verifyTaskDescription()"
});
formatter.result({
  "duration": 33749400,
  "error_message": "java.lang.AssertionError: Task ID is editable - NOT READONLY expected:\u003cfalse\u003e but was:\u003ctrue\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat stepDefinitions.CreateSubTasksStepDefinition.verifyTaskDescription(CreateSubTasksStepDefinition.java:145)\r\n\tat ✽.And verify Task ID and Task Description is read only(CreateSubTasks.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#Positive Scenario for the subtask length validation"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "id": "create-and-manage-subtasks;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user is on default page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "clicks my tasks button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user creates a task - New Task for SubTask-Postive scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks subtask button to create a new subtask -New Subtask 1 of length of 14 characters in length",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.already_on_main_page()"
});
formatter.result({
  "duration": 31573154200,
  "status": "passed"
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.click_mytasks()"
});
formatter.result({
  "duration": 4540808400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "- New Task for SubTask-Postive scenario",
      "offset": 20
    }
  ],
  "location": "CreateSubTasksStepDefinition.createTask(String)"
});
formatter.result({
  "duration": 332135100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Subtask 1",
      "offset": 52
    },
    {
      "val": "14",
      "offset": 79
    }
  ],
  "location": "CreateSubTasksStepDefinition.subtaskAddition(String,String)"
});
formatter.result({
  "duration": 22021837400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 18,
      "value": "#Negative Scenario for the subtask length validation , task length of 251 chars"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "create-and-manage-subtasks;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "user is on default page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "clicks my tasks button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user creates a task - New Task for SubTask-Negative scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks subtask button to create a new subtask -1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112 of length of 251 characters in length",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.already_on_main_page()"
});
formatter.result({
  "duration": 32504721100,
  "status": "passed"
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.click_mytasks()"
});
formatter.result({
  "duration": 6823087200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "- New Task for SubTask-Negative scenario",
      "offset": 20
    }
  ],
  "location": "CreateSubTasksStepDefinition.createTask(String)"
});
formatter.result({
  "duration": 319962200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112",
      "offset": 52
    },
    {
      "val": "251",
      "offset": 316
    }
  ],
  "location": "CreateSubTasksStepDefinition.subtaskAddition(String,String)"
});
formatter.result({
  "duration": 21188866400,
  "error_message": "java.lang.AssertionError: Task length is greater than 250 characters, but added !!\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat stepDefinitions.CreateSubTasksStepDefinition.subtaskAddition(CreateSubTasksStepDefinition.java:178)\r\n\tat ✽.Then user clicks subtask button to create a new subtask -1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112 of length of 251 characters in length(CreateSubTasks.feature:23)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "#Negative Scenario for the subtask length validation , task length of 0 chars - empty"
    }
  ],
  "line": 26,
  "name": "",
  "description": "",
  "id": "create-and-manage-subtasks;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "user is on default page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "clicks my tasks button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user creates a task - New Task for SubTask-Negative scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user clicks subtask button to create a new subtask - of length of 0 characters in length",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.already_on_main_page()"
});
formatter.result({
  "duration": 33641803000,
  "status": "passed"
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.click_mytasks()"
});
formatter.result({
  "duration": 9192688300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "- New Task for SubTask-Negative scenario",
      "offset": 20
    }
  ],
  "location": "CreateSubTasksStepDefinition.createTask(String)"
});
formatter.result({
  "duration": 467449300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 52
    },
    {
      "val": "0",
      "offset": 66
    }
  ],
  "location": "CreateSubTasksStepDefinition.subtaskAddition(String,String)"
});
formatter.result({
  "duration": 20564503900,
  "error_message": "java.lang.AssertionError: Task length is 0 characters, but added !!\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat stepDefinitions.CreateSubTasksStepDefinition.subtaskAddition(CreateSubTasksStepDefinition.java:174)\r\n\tat ✽.Then user clicks subtask button to create a new subtask - of length of 0 characters in length(CreateSubTasks.feature:30)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 33,
      "value": "#Postive Scenario for the Due Date format Validation"
    }
  ],
  "line": 34,
  "name": "",
  "description": "",
  "id": "create-and-manage-subtasks;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "user is on default page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "clicks my tasks button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user creates a task - New Task for SubTask - positive scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user clicks subtask button to create subtask",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "validate Due Date field with 09/10/2022 and subtask as New Subtask-1",
  "keyword": "And "
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.already_on_main_page()"
});
formatter.result({
  "duration": 39484511500,
  "status": "passed"
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.click_mytasks()"
});
formatter.result({
  "duration": 4560048500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "- New Task for SubTask - positive scenario",
      "offset": 20
    }
  ],
  "location": "CreateSubTasksStepDefinition.createTask(String)"
});
formatter.result({
  "duration": 371364500,
  "status": "passed"
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.createSubTask()"
});
formatter.result({
  "duration": 5179575500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/10/2022",
      "offset": 29
    },
    {
      "val": "New Subtask-1",
      "offset": 55
    }
  ],
  "location": "CreateSubTasksStepDefinition.validateDueDateField(String,String)"
});
formatter.result({
  "duration": 4351692100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 41,
      "value": "#Negative Scenario for the Due Date format Validation"
    }
  ],
  "line": 42,
  "name": "",
  "description": "",
  "id": "create-and-manage-subtasks;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "user is on default page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "clicks my tasks button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user creates a task - New Task for SubTask - Negative scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user clicks subtask button to create subtask",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "validate Due Date field with 20/100/2022 and subtask as New Subtask-2",
  "keyword": "And "
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.already_on_main_page()"
});
formatter.result({
  "duration": 36080488800,
  "status": "passed"
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.click_mytasks()"
});
formatter.result({
  "duration": 7767044300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "- New Task for SubTask - Negative scenario",
      "offset": 20
    }
  ],
  "location": "CreateSubTasksStepDefinition.createTask(String)"
});
formatter.result({
  "duration": 376451500,
  "status": "passed"
});
formatter.match({
  "location": "CreateSubTasksStepDefinition.createSubTask()"
});
formatter.result({
  "duration": 5157849900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/100/2022",
      "offset": 29
    },
    {
      "val": "New Subtask-2",
      "offset": 56
    }
  ],
  "location": "CreateSubTasksStepDefinition.validateDueDateField(String,String)"
});
formatter.result({
  "duration": 3547231100,
  "error_message": "java.lang.AssertionError: Invalid DueDate Format !!\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat stepDefinitions.CreateSubTasksStepDefinition.validateDueDateField(CreateSubTasksStepDefinition.java:207)\r\n\tat ✽.And validate Due Date field with 20/100/2022 and subtask as New Subtask-2(CreateSubTasks.feature:47)\r\n",
  "status": "failed"
});
formatter.uri("CreateTasks.feature");
formatter.feature({
  "line": 1,
  "name": "Test task creation and manage tasks",
  "description": "",
  "id": "test-task-creation-and-manage-tasks",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario to validate the message text - Hey \u003cUsername\u003e, this is your todo list for today - which displays after user login"
    }
  ],
  "line": 4,
  "name": "",
  "description": "",
  "id": "test-task-creation-and-manage-tasks;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on logged in page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "clicks my tasks button link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should see a message on the top part saying that list belongs to the logged user",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatTasksStepDefinition.already_on_main_page()"
});
formatter.result({
  "duration": 30492926300,
  "status": "passed"
});
formatter.match({
  "location": "CreatTasksStepDefinition.click_mytasks()"
});
formatter.result({
  "duration": 6455984800,
  "status": "passed"
});
formatter.match({
  "location": "CreatTasksStepDefinition.verify_message()"
});
formatter.result({
  "duration": 62532600,
  "error_message": "java.lang.AssertionError: Message displayed is not as expected - Hey \u003cusername\u003e this is your todo list for today expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat stepDefinitions.CreatTasksStepDefinition.verify_message(CreatTasksStepDefinition.java:102)\r\n\tat ✽.Then user should see a message on the top part saying that list belongs to the logged user(CreateTasks.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 9,
      "value": "#Positive Scenario for the task length validation , task length of 15 chars in length"
    }
  ],
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-task-creation-and-manage-tasks;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user is on logged in page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "clicks my tasks button link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user should able to create task -New Tasks Added of length of 15 characters in length",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatTasksStepDefinition.already_on_main_page()"
});
formatter.result({
  "duration": 32631533700,
  "status": "passed"
});
formatter.match({
  "location": "CreatTasksStepDefinition.click_mytasks()"
});
formatter.result({
  "duration": 10547580700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Tasks Added",
      "offset": 33
    },
    {
      "val": "15",
      "offset": 62
    }
  ],
  "location": "CreatTasksStepDefinition.verifyTaskLength(String,String)"
});
formatter.result({
  "duration": 11255182900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#Negative Scenario for the task length validation , task length of 2 chars in length"
    }
  ],
  "line": 16,
  "name": "",
  "description": "",
  "id": "test-task-creation-and-manage-tasks;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user is on logged in page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "clicks my tasks button link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user should able to create task -ab of length of 2 characters in length",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatTasksStepDefinition.already_on_main_page()"
});
formatter.result({
  "duration": 33754255200,
  "status": "passed"
});
formatter.match({
  "location": "CreatTasksStepDefinition.click_mytasks()"
});
formatter.result({
  "duration": 6937474200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab",
      "offset": 33
    },
    {
      "val": "2",
      "offset": 49
    }
  ],
  "location": "CreatTasksStepDefinition.verifyTaskLength(String,String)"
});
formatter.result({
  "duration": 10404249800,
  "error_message": "java.lang.AssertionError: Task length is less than 3 characters, but added !!\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat stepDefinitions.CreatTasksStepDefinition.verifyTaskLength(CreatTasksStepDefinition.java:124)\r\n\tat ✽.Then user should able to create task -ab of length of 2 characters in length(CreateTasks.feature:19)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 21,
      "value": "#Negative Scenario for the task length validation , task length of 251 chars in length"
    }
  ],
  "line": 22,
  "name": "",
  "description": "",
  "id": "test-task-creation-and-manage-tasks;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "user is on logged in page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "clicks my tasks button link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user should able to create task -1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112 of length of 251 characters in length",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatTasksStepDefinition.already_on_main_page()"
});
formatter.result({
  "duration": 30428485500,
  "status": "passed"
});
formatter.match({
  "location": "CreatTasksStepDefinition.click_mytasks()"
});
formatter.result({
  "duration": 9098789200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112",
      "offset": 33
    },
    {
      "val": "251",
      "offset": 297
    }
  ],
  "location": "CreatTasksStepDefinition.verifyTaskLength(String,String)"
});
formatter.result({
  "duration": 10872020300,
  "error_message": "java.lang.AssertionError: Task length is greater than 250 characters, but added !!\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat stepDefinitions.CreatTasksStepDefinition.verifyTaskLength(CreatTasksStepDefinition.java:127)\r\n\tat ✽.Then user should able to create task -1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112 of length of 251 characters in length(CreateTasks.feature:25)\r\n",
  "status": "failed"
});
});