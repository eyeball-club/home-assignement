# Eyeball Home Assignement

## The Task

### Assignement

[UI Mockup](https://www.figma.com/file/19u0uVDez4SVYbW95MyihP/Test-Ui?node-id=0%3A1)

The task is to create an app that uses the provided data about football competitions. User can select a competition from a list, then a page with a list of matches is shown. Also a list of teams in the competition is shown. User is able to see players belonging to a team. 

Use the data anyway you want to create an API that will provide this data to frontend. The frontend app can either be built using ajax from twig view or full React SPA. The choice it up to you.

The choice of styling methods and visual style is also up to you. 

To share your changes with us, create a fork of this repo, and when you are finished create a merge request to our main branch. We will then walk through your code, make code review and maybe have a chat about it in an online interview.

### Data

Data to use for this assignement is in data folder. It has 2 subfolders: competitions and teams
competitions have subresources /matches and /teams with data corresponding to each competition from competitions.json which contains 4 european competitions.
and /data/teams contains details about each team in dataset

```bash
├── /data
   ├── /competitions
   │   ├── /teams
   │   │   └──{competitionId}.json
   │   ├── /matches
   │   │   └──{competitionId}.json
   │   └── competitions.json
   └── /teams
       └── {teamId}.json
```
## The Tech Stack 

At Eyeball we use PHP8.1, Symfony6, plain Javascript and React. Database is MySql8 A fresh installation of Symfony 6 starter app is provided. You can use the docker configuration provided in this repo or run the app your way.

## Docker Environment

To use the provided docker environment, please run ./setup first, then you can use ./compose up to run the stack. If you are on Windows using WSL2 is recommended.
Feel free to add any services or configuration you need. 
