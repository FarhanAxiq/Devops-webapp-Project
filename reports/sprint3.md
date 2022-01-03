# Sprint 3 - t17 - We Push To Main

## Goal
### *How far is it?*

## Sprint Leader: 
### Evan Ide

## Definition of Done

* The Increment release for `v3.x` created as a GitHub Release and deployed on black-bottle under SPRINT.
* The design document (`design.md`) is updated.
* The sprint document (`sprint.md`) is updated with scrums, completed metrics, review, and retrospective.

## Policies

### Mobile First Design
* Design for mobile, tablet, laptop, desktop in that order.
* Use ReactStrap for a consistent user experience (no HTML, CSS, style, etc.).

### Clean Code
* Code Climate technical debt ratio less than 3.
* Minimize code smells and duplication.

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

The first epic that we have planned is more of a half epic.  We need to finish the Interoperability epic from Sprint 2.  This shouldn't take too long, because we got a lot of it done in Sprint 2.  All we have left to do is implement the functionality for the Save button in the Server Settings Modal.  It should be unclickable when the provided server does not support the features necessary to run our website, and it should be clickable when the provided server does support the necessary features.  We also need to update our tests to ensure that the new features work as they should.  

The next epic that we intend to complete is the Distances epic.  This involves implementing a new protocol for our website.  The main focus of this epic will be to allow the user to find distances between places on their trip.  The user will also be able to see the total distance for their entire trip.  This epic will consist of both client side changes as well as server side changes, so it should be a relatively involved epic.  We will follow the provided protocol in order to maintain interoperability with all of the servers in the class.  

The third epic that we plan on completing is the load trip epic.  This epic has one main focus: to allow the user to bring up a previously made trip.  This epic will tie in closely with the next epic (save trip), and will be relatively useless without that epic.

The fourth epic that we want to complete is the save trip epic.  As stated in the previous paragraph, this epic will tie in very closely with the load trip epic.  This will allow the user to create a trip and save it to be added to or viewed at a later time.  The user will be able to save their trip in multiple formats that allow it to be opened in other applications as well. They will be able to choose a default format as well, instead of having to specify the type every time they wish to save a trip.  Files will be saved in the local filesystem.

The last epic that we plan to complete will be the Trip name epic.  This will allow the user to set a name for each trip that they create.  We plan to implement this as a small button to enable a text box that the user can enter a name into.  

## Metrics

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | *5* | *4* |
| Tasks |  *140*   | *131* | 
| Story Points |  *172*  | *166* | 

We completed 4 epics in Sprint 2, and almost completed one more.  We also completed 74 story points.  We had to spend a lot of time in Sprint 2 learning Javascript and React, so we couldn't finish as much as we had hoped.  We hopefully won't have to do as much learning this sprint, so we will be able to more productive.  On top of that, one of the planned epics is left over from last sprint and is mostly complete already.  Because of that, we are confident that we can do more tasks and story points in Sprint 3 than we did in Sprint 2.

## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| *10/5/21* | *#331, #336, #337, #338, #345, #347, #348, #350, #354, #356, #382, #383, #386* | *#335, #355, #363, #389, #393, #396, #397, #401, #403, #404, #405* |  We are waiting on more information for file IO in order to start the save and load epics| 
| 10/12/21 | *#332, #333, #335, #355, #358, #363, #379, #389, #393, #396, #397, #401, #403, #404, #405, #409, #410, #118, #406, #407, #408, #412, #413, #414, #415, #416*| *#434, #435, #436, #437, #440, #444, #448, #450* | Our test coverage is falling a little bit, and Dylan's computer always breaks.|
| 10/14/21| *#434, #435, #436, #437, #440, #444, #448, #450, #451, #461, #465, #466, #467, #468, #469, #470*, #475| *#380, #476, #477, #478, #479, #481, #484, #486*| Our test coverage is still going down, and our maintainability needs to get better.|
| 10/19/21 | *#380, #439, #471, #476, #477, #478, #479, #481, #484, #486, #488, #490, #491, #493, #508, #526, #520, #526, #527, #528* | *#349, #366, #368, #534, #536, #537, #538, #540* | None |
| 10/20/21 | *#349, #366, #368, #428, #522, #534, #536, #537, #538, #540, #541, #542, #545, #548, #550, #552, #557, #560, #561, #562, #565, #567, #569, #570, #571, #572, #573, #574, #578, #580*| *#559* | None |

## Review

### Epics completed  
We were able to totally complete 4 out of the 5 epics that we planned for Sprint 3: Interoperability, Distances, Load Trip, and Trip Name.  For Interoperability, we ensured that our client and server work with other team's clients and servers that support the same features as us.  The Distances epic entailed implementing a protocol to get the distances between places in the Itinerary on the server side, and rendering the distance on the client. To complete the Load Trip epic, we implemented the ability for the user to upload a json or csv file that populates the Itinerary on our client.  Finally, completing the Trip Name epic allowed a user to change the name of the trip that they are planning.  

### Epics not completed 
The one epic that we planned but failed to complete was the Save Trip epic.  We implemented the ability for the user to save a trip in the .json file format, but the specifications of the epic say that the user should be able to pick the file format.  Unfortunately, we weren't able to complete that portion of the Save Trip epic. 

## Retrospective

### Things that went well
We feel that our team did very well for this sprint.  We implemented a lot of new functionality while keeping our user interface sleek, intuitive, and clean.  We also improved our Find API to execute database queries much faster than in the last sprint.  We were able to complete almost all of the epics that we planned, and we feel that we have gotten proficient at planning and breaking tasks down into smaller tasks.

### Things we need to improve
The biggest improvement that we need to make is ensuring that our test coverage stays high throughout the sprint.  Ours dipped down below a point that we were happy with, so we had to focus solely on testing for a little bit.  Thankfully we had already completed most of the planned epics, but we need to do a better job of keeping test coverage high during the whole sprint.


### One thing we will change next time
We plan to write tests as we implement new functionality rather than after we add features.