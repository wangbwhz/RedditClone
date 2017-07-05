Description:
A website is developed which allows users to contribute topics and upvote or downvote these topics. 
 
Language of application:
Frontend of application is developed by AngularJs
Backend of application is developed by Nodejs

Assumptions:
User only can see the count which is subtraction of count of the upvote and count of the downvote
Once user click on the upvote/downvote arrow, user only see the change of the count locally. The page will not be reloaded.
Minimum count(upvote count-downvote count) displayed on the screen is 0
When user submits the new topic, the page will redirect to the home page
Empty topic is not allowed to submit

Function of the application:
Add Topic: Fill in the form and click on the submit button
Upvote Topic: Upvote the topic by clicking on the up arrow
Downvote Topic: Downvote the topic by clicking on the down arrow
Next page: Click on the next button
Previous Page: Click on the previous button

Installation Tutorial:
Option 1 - Backend and frontend files are located on the same server
1.Upload all the files to the server
2.Edit index.js, update the port
3.Edit FrontEnd/js/env.js, updatethe base link 
Option 2 - Backend and frontend files are located on the different server
1.Upload the Frontend files to one server
2.Upload the Backend files, index.js to another server
3.Edit index.js, remove the code of frontend part
4.Edit index.js, update the port
5.Edit FrontEnd/js/env.js, updatethe base link 