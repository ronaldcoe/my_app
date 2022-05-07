# Overview
I built this app with the intneiton of learning Node.js, JavaScript, and MongoDB. This was the first time using these tools.
This application allows the user to keep track of his or her tasks. I wanted to make a simple app that would be easy to use and very intuitive.

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages
1. Dashboard/Index:

In here, all the tasks are displayed, completed and incompleted. The frontend sends a request to the backend to get the infromation using Emebeded Javascript.

2. Create new Task.

In the Dasboard, the user have a button that will take her to this page. Here the user will be prompt for a name, due date, task type (important, not important), and substasks. This information is retrieved from the user using a form.

3. Display task information

The user can click on any task to display its information. This is done through a query using the task id as the filter. 


# Development Environment

 - HTML/CSS: Front-end. 
 - JavaScript: Front-end and Backend.
 - Node.js: Allows the used of JavaScript for the backend.
 - Express: Lightweight and fast web framework for Nodejs.
 - MongoDB: NoSQL database to store our data.

# Useful Websites


* [Zwell.com (Building a Simple CRUD app with Node, Express, and MongoDB)](https://zellwk.com/blog/crud-express-mongodb/)
* [W3 Scools (Node.js Introduction)](https://www.w3schools.com/nodejs/nodejs_intro.asp)

# Future Work
* Fix the mark completed/incompleted button
* Add a calendar view for the tasks
* Fix the add subtask button to not refresh the page when adding a new subtask afterward.
* Add the option to edit the task.