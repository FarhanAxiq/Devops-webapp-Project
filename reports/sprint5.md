# Sprint 5 - *t17* - *We Push To Main*

## Goal
### *Release!*

## Sprint Leader: 
### *Dylan Armstrong*

## Definition of Done

* The Increment release for `v5.x` created as a GitHub Release and deployed on black-bottle under SPRINT.
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
The first epic that we have planned is carrying over from sprint 4, this epic is the shorter trip epic. We finished the KNN algorithm for this epic last sprint however we have a bug that causes our server to chew through our alloted CPU time. The main goal is to find this bug and fix it, if we have left over time in the sprint our focus on this epic is going to shift over to implementing the 2opt algorithm.

The next epic that we have planned is carrying over from sprint 3, this epic is the Save Trip epic. We currently have the Save Trip epic "complete". However, we only can currently save trips as a JSON and CSV file. We plan to implement the ability to save files as an SVG and KML along with the already current options.

The third epic we have planned is Types, this epic was introuced this sprint. This epic will allow users to filter their find results by type of location IE: Heliport, Balloonport, Airport, etc... 

The fourth epic is User Experience epic, carying over from sprint 4. We gathered feedback from users last sprint, and we will be doing the same this sprint with new users. We will be implementing anything that we find valuable from their feedback to make our UI more user friendly.

## Metrics

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | *4* | *4* |
| Tasks |  *45*   | *79* | 
| Story Points |  *91*  | *138* | 


## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| *11/30/21* | *#625-#627, #763, #764, #766, #768, #770-#786, #788-#792, #794-#796, #798, #799, #801, #802, #804-#806, #809, #816-#818, #823, #825, #827, #831, #844, #846, #849 * | *#816, #781, #778, #779, #776* | Dylan And Christian's VS Code were having issues. | 
| *12/7/2021* | *#762, #769, #793, #815, #820, #830, #836-#839, #843, #847, #848, #859, #860, #865-#867, #870, #872, #873, #875, #878, #883, #886, #889* | *#626, #627, #766, #770, #773, #784, #794, #798, #849, #874* | Figuring out how to test |
| *12/9/2021* | *#777, #798, #874, #895, #896, #898, #766, #770, #773, #784, #900, #903, #904* | *none* | None |


## Review

### Epics completed 
With this sprint, we were able to complete all four epics. For `Shorter Trip`, we had to re-make our optimize algorithim since it was using up all 10 minutes of server time, as well as the algorithim itself wasn't optimized. The `Save Trip` epic was mostly done, but we added in `.svg` format as an option. For `User Experience`, we took feedback from multiple sources and implemented it on our application. Things like a Find dropdown, tooltips, and a few other things were added in. And finally `Types`, which now lets find search for things like heliports or airports. All but Types were from previous sprints, but we revisited them to polish them up and added in a few things that were missing.

### Epics not completed 
None

## Retrospective

### Things that went well
We all were working hard throughout the sprint, rather than doing most of the work at either the begining or end of the sprint. Everyone had meaningful progress throughout the sprint.

### Things we need to improve
If there was a next time, we need to get in the habit of putting tests for code we wrote in PRs, rather than cramming in tests in the last week of the sprint.

### One thing we will change next time
Atain if there was a next time, Better communication on tasks in progress to avoid merge conflicts.