Feature: Create and manage subtasks

#Scenario to check Task ID and Task Description as Read only
Scenario:
Given user is on default page
When clicks my tasks button
Then user creates a task - New Task for SubTask
Then user clicks subtask button to create subtask
And verify Task ID and Task Description is read only

#Positive Scenario for the subtask length validation
Scenario:
Given user is on default page
When clicks my tasks button
Then user creates a task - New Task for SubTask-Postive scenario
Then user clicks subtask button to create a new subtask -New Subtask 1 of length of 14 characters in length

#Negative Scenario for the subtask length validation , task length of 251 chars
Scenario:
Given user is on default page
When clicks my tasks button
Then user creates a task - New Task for SubTask-Negative scenario
Then user clicks subtask button to create a new subtask -1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112 of length of 251 characters in length

#Negative Scenario for the subtask length validation , task length of 0 chars - empty
Scenario:
Given user is on default page
When clicks my tasks button
Then user creates a task - New Task for SubTask-Negative scenario
Then user clicks subtask button to create a new subtask - of length of 0 characters in length


#Postive Scenario for the Due Date format Validation
Scenario:
Given user is on default page
When clicks my tasks button
Then user creates a task - New Task for SubTask - positive scenario
Then user clicks subtask button to create subtask
And validate Due Date field with 09/10/2022 and subtask as New Subtask-1

#Negative Scenario for the Due Date format Validation
Scenario:
Given user is on default page
When clicks my tasks button
Then user creates a task - New Task for SubTask - Negative scenario
Then user clicks subtask button to create subtask
And validate Due Date field with 20/100/2022 and subtask as New Subtask-2