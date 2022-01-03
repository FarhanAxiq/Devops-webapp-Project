# Sprint 2 - *t17* - *We Push To Main*

## Goal
### *Find places to go.*

## Sprint Leader: 
### *Christian Carnahan*

## Definition of Done

* The Increment release for `v2.x` created as a GitHub Release and deployed on black-bottle under SPRINT.
* The design document (`design.md`) is updated.
* The sprint document (`sprint.md`) is updated with scrums, completed metrics, review, and retrospective.

## Policies

### Mobile First Design
* Design for mobile, tablet, laptop, desktop in that order.
* Use ReactStrap for a consistent user experience (no HTML, CSS, style, etc.).

### Clean Code
* Code Climate maintainability of A.
* Minimize code smells and duplication.

### Test Driven Development
* Write the tests before the code.
* Unit tests are fully automated.

### Processes
* Main is never broken. 
* All pull request builds and tests for Main are successful.
* All dependencies managed using Maven, npm, and WebPack.
* GitHub etiquette is followed always.


## Planned Epics

The first epic that our team chose to take on is the "Find Places" epic. The purpose of this epic is to allow a user to input a string in order to find a place to add to their trip. Given the string, we are going to produce a list of matching places and the details of those places and allow the user to select one or more of these places to add to their trip. In order to implement this epic, we are going to need to implement the protocol find feature. In order to implement the find protocol we are going to need to break it down into a bunch of smaller tasks. Some of these tasks include adding FindRequest.json and FindResponse.json to the schemas directory, implementing the Find Request Class and creating tests in order to test the find feature.

The second epic that our team chose to take on is the "Interoperability" epic. The purpose of this epic is to allow the client to be able to use different services (other teams servers) in order to plan their trip. This epic is going to allow for a seamless user experience no matter which server they want to use to plan their trip. This epic is going to allow the users to change to a different server and then list the features that are avaliable to the client on that server. Our client also need to verify that the barebones features are avaliable and if they are not, we need to let the users know.

The third epic that our team chose to take on is the "Where Am I?" epic. This epic is very straight forward. This epic is going to allow the client to add their current location to the trip rather than just adding the base home location. 
<p>The fourth epic will be adding highlighting to the user experience. This will allow the user to select a place in the trip list and have it highlighted with a marker on the screen.</p>
<p>
The last epic that we hope to complete is the "Where is?" epic.  The purpose behind this epic is to enhance the user experience and allow them to have more control over their trip planning.  For example, when the user enters a latitude and longitude the map should update to reflect the values that were entered.  The user should also have the option to add that specific location to their trip.  Like with all user input, the inputted values should be validated once entered.  After the map is updated to show the location which the user entered, it should also show more details about the location using reverse geocoding.
</p>

## Metrics

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | *5* | *4* |
| Tasks |  *6*   | *67* | 
| Story Points |  *7*  | *74* | 

<p>We feel confident in getting all of these tasks completed. Based on the last sprint, we were able to get all tasks done within the 2 week period. Judging by the extra week for this sprint, and not having to spend a week setting up VS Code, we should be able to complete all of the tasks we selected.</p>

## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| *9/14/21* | *none, ...* | *#126, #127, 128, #130, #131* | Dylan's Computer Keeps Breaking. |
| *9/21/21* | *#126, #127, #203, #208, #210, #211, #215, #216, #219, #220, #222* | *#117, #118, #128, #130, #131, #167, #172, #174, #175, #189, #202* | Dylan's Computer Keeps Breaking. |
| *9/28/21* | *#171, #172, #173, #174, #175, #177, #181, #183, #185, #188, #189, #192, #195, #197, #198, #201, #202, #204, #209, #212, #213, #216, #217, #219, #221, #227, #228, #231, #233, #237, #238, #241* | *#117, #118, #119, #131, #243, #255, #258* | Dylan's Computer Keeps Breaking. |
| *9/29/21* | *#117, #119, #120, #121, #131, #171, #172, #173, #174, #175, #177, #181, #183, #185, #188, #189, #192, #195, #197, #198, #201, #202, #204, #209, #212, #213, #216, #217, #219, #221, #227, #228, #231, #233, #237, #238, #241, #255, #276, #277, #280, #281, #282, #283, #284, #285, #286, #287, #288, #289, #290, #291, #293, #296, #298, #299,  #300, #301, #302, #303, #304, #305, #306* | *#118, #243* | NONE!!! |


## Review

### Epics completed  
As a team we were able to complete 4 out of our 5 planned epics. The epics completed were the Find Places Epic, Where Am I Epic, Highlight Place Epic, and the Where Is? Epic. For the Find Places Epic, we implemented a live search feature on a drop down page that allows the user to see their results be refined as they search. For the Where Am I epic we ask the user for their location and then add their location as a place on the map and in the itinerary. For the Highlight places epic, we allow the user to click on specific places in their trip and it will send them to that specified location on the map. For the Where Is? epic, we open a modal for user to allow them to input a latitude,longitude string in order to find that place on the map. 

### Epics not completed 
As a team we failed to complete the Interoperability epic.

## Retrospective

### Things that went well
Our team was able to grow a lot clsoer and learn how to work together a lot better during this sprint. At the beginning we were storming but now I think we are in a much better place as a team. Everyone in the team was able to learn about the client side of things and learn a bit of javascript and react. We did a very good job of planning enough work for ourselves, we did not have too much work or too little work. 

### Things we need to improve
As a team we need to be better about communicating what we are working on. We had multiple people in the middle of the sprint working on the same thing which lead to us making less progress than we would have had everyone been working on other things. Another issue we ran into was that not everybody has a grasp on the workings of the server side of the project.  

### One thing we will change next time
Next time we are going to work on making tests before we build things. We are also going to work on doing a better job of getting out of the storming phase earlier in the sprint, we were in that phase for a little bit too long this semester. 
