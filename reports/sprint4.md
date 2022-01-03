# Sprint 4 - *t17* - *We Push To Main*

## Goal
### *Shorter tours!*

## Sprint Leader: 
### *Farhan Haziq*

## Definition of Done

* The Increment release for `v4.x` created as a GitHub Release and deployed on black-bottle under SPRINT.
* The design document (`design.md`) is updated.
* The sprint document (`sprint.md`) is updated with scrums, completed metrics, review, and retrospective.

## Policies

### Mobile First Design
* Design for mobile, tablet, laptop, desktop in that order.
* Use ReactStrap for a consistent user experience (no HTML, CSS, style, etc.).

### Clean Code
* Code Climate maintainability of A (technical debt ratio==0).
* Minimize code smells and duplication.
* Use Single Responsibility Principle.

### Test Driven Development
* Write the tests before the code.
* Unit tests are fully automated.
* Code coverage is 70%

### Processes
* Incremental development.  No big bangs.
* Main is never broken. 
* All pull request builds and tests for Main are successful.
* All dependencies managed using Maven, npm, and WebPack.
* GitHub etiquette is followed always.


## Planned Epics

In this Sprint, The first epic we are deciding to complete is the `Save Trips` epic from Sprint 3, we still need to add support for `.csv` files, at its current state, we already have `.json` working for both save and load and `.csv` for load, as such, We think that, this should not take us too much time to implement them and it should not detract us from our main goal.

The second epic that we are looking at completing is going to be the `Shorter Trip` epic. This a new epic introducted to us in sprint 4. This epic is going to be biggest obstacle that we are going to face this sprint. This epic requires the implementation of an algorithm that will optimize trips to make them shorter. We believe that this is going to take the majority of our time this sprint.

The third epic that we are looking at completing is going to be the `User Experience` epic. This is also a new epic that was introduced to us in sprint 4. This epic requires us to get real users on our site and to see what they struggle and give us feedback so in order for us to improve the functionality and usabiity of our site. Ths epic hopefully is going to be quite simple for us. The entire time we have been designing our website we have been trying to keep functionality and usability in mind.

Lastly, the fourth epic that we are looking at completing is going to be the `Random Places` epic. This epic was introducted to us in sprint 2 however we did not have the time for it until now. This epic will allow the user to click a button and recieve a list of random places they can add to their trip if they would like to do so.


## Metrics

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | *4* | *4* |
| Tasks |  *43*  | *94* | 
| Story Points |  *79*  | *141* | 


## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| *11/2* | *#632, #634, #635, #636, #646, #492, #601, #610, #612, #665, #667, #669, #670, #671, #678, #679, #620, #628, #644, #647, #649, #650, #651, #652, #653, #654, #663* | *#341, #367, #595, #596, #598, #599, #600, #605-608, #611, #613-619, #621, #623-627, #629, #639, #640, #687* | None  | 
| *11/9* | *#361, #599, #600, #603, #604, #609, #641, #684, #687-690, #698, #698, #606, #700-#702, #607, #704, #706-#711, #341, #367, #598, #608, #611, #615, #618, #619, #621, #713, #714, #716, #720, #724* | *#595, #596, #605, #613, #614, #616, #617, #623-627, #629, #639, #640, #642, #727* | All of us have midterm and impaired our abilities to work this sprint (see: retrospective)  |
| *11/11* | *#341, #598, #596* | -none- | *We done it lads* |


## Review

### Epics completed  
In this epic, we managed to complete all the epics, first one is the `Save Trips` epics, this is, as previously mentioned before, were carry over, last time we weren't able to save `.csv` files but now it is supported, user are now able to support `.csv` files, as for the other task regarding the default, our design of the website conflicted with it as our website just present them the file option and they can choose the file option as they so desired. `Random Places` epic is also done and now the user can decide to plan a random trip if they don't have any specific trips in mind. `User Experience` epics are also completed where we ask an actual user for the feedback on our site, and we get the appropriate feedback and utilise it in our design decision going forward. Finally, the `Shorter Trips` epics, we <> and with this epic being done, user can now optimise the trip and make their trip shorter.

### Epics not completed 
*None*

## Retrospective

### Things that went well
As we predicted before, `Save Trips`, `Random Places` and `User Experiences` are as easy and we managed to get it done rather quickly as we expected, some of the epics are started a little bit late but despite that we managed to get it done.

### Things we need to improve
As per impediment, the Sprint overlap with most of the class midterm and other homework assignment all in date that are very pack close together, this reduce our abilities to work for the sprint. we underestimate the amount of work that this sprint needed and it causes a serious amount of last minute work which is reflected in our burndown chart.

### One thing we will change next time
Better planning and coordination with other classes to ensure it does not interferes with our class and not underestimate the amount of work we need.
