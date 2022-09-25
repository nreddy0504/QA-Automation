Feature: Test task creation and manage tasks

#Scenario to validate the message text - Hey <Username>, this is your todo list for today - which displays after user login
Scenario:
Given user is on logged in page
When clicks my tasks button link
Then user should see a message on the top part saying that list belongs to the logged user

#Positive Scenario for the task length validation , task length of 15 chars in length
Scenario:
Given user is on logged in page
When clicks my tasks button link
Then user should able to create task -New Tasks Added of length of 15 characters in length

#Negative Scenario for the task length validation , task length of 2 chars in length
Scenario:
Given user is on logged in page
When clicks my tasks button link
Then user should able to create task -ab of length of 2 characters in length

#Negative Scenario for the task length validation , task length of 251 chars in length
Scenario:
Given user is on logged in page
When clicks my tasks button link
Then user should able to create task -1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112 of length of 251 characters in length
