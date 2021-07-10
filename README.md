# Todo List
## Introduction

You are about to create a Todo list app. You will be making it step by step. Start with displaying the list of items and continue moving step by step until you finish adding all the functionality you need. Once the application is ready, the user will be able to display the tasks he or she needs, add or remove them and also mark them as completed.

The application must meet the basic object-oriented pricniples. Think carefully through each solution, following [single responsibility principle][wikipedia srp], [shared responsibility][wikipedia soc] and other design principles.

## Releases
### Release 0: Displaying todo list items

You have a CSV file that contains descriptions of some of the todo list tasks. (see `todo-list-data.csv`). Start the application by displaying a todo list (see Figure 1).

Before you start coding, be sure to think through the process required to render the list. After you have defined the functions that you will be using for your application, decide what objects you will need to create while still making sure to apply object-oriented design principles. Then write the necessary classes, and do not forget about the tests.

```
$ node todo-list-runner.js
- Walk the cat.
- Go to the gym.
- Buy groceries for the week.
- Call Penelope.
```
*Figure 1*. Example of displaying the todo list.


### Release 1: Adding new items to the list

Add a new feature to your app: users should able to add new items to the list. When they open the application, users will now need to specify what it is that they wanna do; users will pass command line parameters to display an existing todo list or add a new item (see Figure 2).

You will need to parse the command line arguments and if there is the word `add`, followed by text, then you will need to write this text to a file. To do this, use `process.argv.slice (2)`.

```
$ node todo-list-runner.js list
- Walk the cat.
- Go to the gym.

$ node todo-list-runner.js add "Finish code challenge."
Appended "Finish code challenge." to the list.

$ node todo-list-runner.js list
- Walk the cat.
- Go to the gym.
- Finish code challenge.
```
*Figure 2*. Using command line parameters to display a list of tasks or add a new task.


### Release 2: Removing items from the list

Sometimes we add a task to the list but in a while we do not want to do it anymore. Add a function which will allow the users to remove items from the todo list (see Figure 3).

```
$ node todo-list-runner.js list
- Walk the cat.
- Go to the gym.

$ node todo-list-runner.js remove "gym"
Removed "Go to the gym." from the list.

$ node todo-list-runner.js list
- Walk the cat.
```
*Figure 3*. Removing items from the todo list.


### Release 3: Doing the task

What should happen when something on your list is completed? Given the current feature set, you would have to remove it from the list. But then you will not be able to rejoice at your productivity, enjoying the number of tasks completed in a day. Add a function that allows you to mark completed tasks in the application (see Figure 4).

The creation of this feature will entail a number of changes. You will need to modify your data file to store information about the status of each task. You will also need to change the way elements are represented in Javascript; it will be necessary to reflect the option of the task's completion possibility. Do not forget to update your tests.


```
$ node todo-list-runner.js list
[ ] Walk the cat.
[ ] Go to the gym.

$ node todo-list-runner.js complete "walk the cat"
Marked "Walk the cat." as complete.

$ node todo-list-runner.js list
[X] Walk the cat.
[ ] Go to the gym.
```
*Figure 4*. Marking an assignment as completed

## Conclusion

Your application can be divided into 3 main components: 

1. `Model`. Objects, Javascript classes that model a real todo list. And also their methods which most likely include reading and writing data from a file.
2. `View`. Formatting information and displaying it to the user.
3. `Controller`. Interpret user input and then take appropriate action.


Model-View-Controller - this is a design pattern that you will use to design almost all of your applications in Elbrus Coding Bootcamp. You will learn more about this design pattern later.

[wikipedia soc]: http://en.wikipedia.org/wiki/Separation_of_concerns
[wikipedia srp]: http://en.wikipedia.org/wiki/Single_responsibility_principle
