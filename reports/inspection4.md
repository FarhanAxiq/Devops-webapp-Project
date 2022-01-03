# Inspection - Team *T17* 

The goal of an Inspection is to find defects.
We first identify the code we wish to inspect, determine the time we wish to meet, and determine the checklist we will use to find faults in our code during the preparation before the meeting.

|  | Details |
| ----- | ----- |
| Subject | [*Shorter.js*](https://github.com/CSU-CS-314-Fall-2021/t17/blob/main/client/src/components/Shorter/Shorter.js) |
| Meeting | *11/2, 7:00pm, Biology Building Study Group* |
| Checklist | [*t17/reports/checklist.md*](https://github.com/CSU-CS-314-Fall-2021/t17/blob/main/reports/checklist.md) |

### Roles

We note the amount of time each person spent reviewing the code in preparation for the meeting.

| Name | Preparation Time |
| ---- | ---- |
| Dylan Armstrong | 28 |
| Evan Ide | 30 |
| Farhan Haziq | 25 |
| Christian Carnahan | 20 |
| Ethan | 22 |

### Problems found

We list each potential defect we found in the code during our preparation so we can discuss them in the meeting.
We add a GitHub issue for each defect that requires a modification to the system.

| file:line | problem | hi/med/low | who found | github#  |
| --- | --- | :---: | :---: | --- |
| Shorter.js:21,38 | don't need Container, can be removed | low | Dylan |  |
| Shorter.js:10,18 | These functions can be moved into their own functions for more modularity | medium | Evan |
| Shorter.js:35 | The tooltip can be made into its own component for better reuseability | medium | Evan |
| [Shorter.js:35](https://github.com/CSU-CS-314-Fall-2021/t17/blob/e5e7744b686cf2d83a22a3604b28d5c10d47363c/client/src/components/Shorter/Shorter.js#L35) | Similar as mentioned above, the tooltip can be made function so it can be reuse again and improve redability of the code | medium | Farhan |
| Shorter.js:25-32 | ButtonGroup could be put in its own File | low | Christian |
| Shorter.js:10-32 | Break things up to reduce cognitive complexity | low | Ethan | #*696*

