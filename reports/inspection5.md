# Inspection - Team *T17* 

The goal of an Inspection is to find defects.
We first identify the code we wish to inspect, determine the time we wish to meet, and determine the checklist we will use to find faults in our code during the preparation before the meeting.

|  | Details |
| ----- | ----- |
| Subject | *Optimize.java* |
| Meeting | *12/1/21, 5:30pm, Biology 356* |
| Checklist | [*t17/reports/checklist.md*](https://github.com/CSU-CS-314-Fall-2021/t17/blob/main/reports/checklist.md) |

### Roles

We note the amount of time each person spent reviewing the code in preparation for the meeting.

| Name | Preparation Time |
| ---- | ---- |
| Ethan Myers | 20 minutes |
| Dylan Armstrong | 22 minutes |
| Christian Carnahan | 15 minutes |
| Evan Ide | 25 minutes |



### Problems found

We list each potential defect we found in the code during our preparation so we can discuss them in the meeting.
We add a GitHub issue for each defect that requires a modification to the system.

| file:line | problem | hi/med/low | who found | github#  |
| --- | --- | :---: | :---: | --- |
| Optimize.java:24-41| Code complexity is to high in distaceMatrix(). Split into two functions | med | Ethan Myers | #849 | 
| Optimize.java:76-78 | "distance[findIndexOfPlace(StartingCity)]" is used 3 seperate times, create a variable for this to improve readibility. | low | Dylan | N/A |
| Optimize.java:1-141| Code complexity is too high and the algorithm is extremely inefficient. When implementing the timer, the code has a tough time with getting through a request in under a second so we always end up with optimizations over a second when they NEED to be under a second. Likely need to rework the entire file starting from scratch. | HIGH | Christian Carnahan | N/A |
| Optimize.java:118-141| When we update the tour int array and places arraylist we are chaining fucntions. Reformat functions or functions calls to reduce chaining. | low | Ethan Myers | #859 | 
| Optimize.java:118-125| shift final arraylist or places so starting place is the same as the orignal trip. | med | Ethan Myers | #860 |
| Optimize.java:1-141 | There are arraylist operations like indexOf that could be done with arrays for better efficiency | high | Evan |
| Optimize.java:58-60 | This function is not necessary, it's just a wrapper for indexOf() | med | Evan |
| Optimize.java:93-95 | This function is also unnecessary and decreases readability | med | Evan |
| Optimize.java:127-129 | This function is also unnecessary and makes the code harder to read | med | Evan |

