# RedditClone
Description:<br />
A website is developed which allows users to contribute topics and upvote or downvote these topics. <br />
 
Language of application:<br />
Frontend of application is developed by AngularJs<br />
Backend of application is developed by Nodejs<br />

Assumptions:<br />
User only can see the count which is subtraction of count of the upvote and count of the downvote<br />
Once user click on the upvote/downvote arrow, user only see the change of the count locally. The page will not be reloaded.<br />
Minimum count(upvote count-downvote count) displayed on the screen is 0<br />
When user submits the new topic, the page will redirect to the home page<br />
Empty topic is not allowed to submit<br />

Function of the application:<br />
Add Topic: Fill in the form and click on the submit button<br />
Upvote Topic: Upvote the topic by clicking on the up arrow<br />
Downvote Topic: Downvote the topic by clicking on the down arrow<br />
Next page: Click on the next button<br />
Previous Page: Click on the previous button<br />

Installation Tutorial:<br />
Option 1 - Backend and frontend files are located on the same server<br />
1.Upload all the files to the server<br />
2.Edit index.js, update the port<br />
3.Edit FrontEnd/js/env.js, updatethe base link <br />
Option 2 - Backend and frontend files are located on the different server<br />
1.Upload the Frontend files to one server<br />
2.Upload the Backend files, index.js to another server<br />
3.Edit index.js, remove the code of frontend part<br />
4.Edit index.js, update the port<br />
5.Edit FrontEnd/js/env.js, updatethe base link <br />

After that:
1. Install the nodejs modules
2. Run node index.js
