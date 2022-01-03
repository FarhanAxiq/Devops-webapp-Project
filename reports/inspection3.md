# Inspection - Team *T17* 

The goal of an Inspection is to find defects.
We first identify the code we wish to inspect, determine the time we wish to meet, and determine the checklist we will use to find faults in our code during the preparation before the meeting.

|  | Details |
| ----- | ----- |
| Subject | *tripName.js* |
| Meeting | *10/15/21, 5pm, Microsoft Teams* |
| Checklist | *t17/reports/checklist.md* |

### Roles

We note the amount of time each person spent reviewing the code in preparation for the meeting.

| Name | Preparation Time |
| ---- | ---- |
| Christian | 40 min |
| Evan | 35 min |
| Ethan | 30 min |
| Dylan | 30 min |
| Farhan | 25 min |



### Problems found

We list each potential defect we found in the code during our preparation so we can discuss them in the meeting.
We add a GitHub issue for each defect that requires a modification to the system.

| file:line | problem | hi/med/low | who found | github#  |
| --- | --- | :---: | :---: | --- |
| TripName.js:47,48,50 | Boolean operators should be !==/=== instead of !=/== | low | Evan | #513 |
| TripName.js:41 | Move TripInput function to own file | med | Christian (carnhy) | #501 |
| TripName.js:62-78 | Move LoadTripButton to own file | med | Christian (carnhy) | #502 |
| TripNAme.js:21-23 | handleClick should be deleted, all calls to handleClick should be a call to changeCursor | low | Dylan | #516 |
|  TripName.js:41-59 | Move TripInput function to own file | med | Ethan (ethamCS) | #501 |
|  TripName.js:62-78 | Move LoadTripButton to own file | med | Christian (carnhy) | #502 |
|  TripName.js: [5](https://github.com/CSU-CS-314-Fall-2021/t17/blob/9c20ba7b126b6144d6bb03ac8677742dcc47ae6d/client/src/components/Trip/Itinerary/TripName.js#L5) | `const FILE_FORMATS` can be move to `constants.js` so it can be used for load and also for save. | low | Farhan (fargah1) | [522](https://github.com/CSU-CS-314-Fall-2021/t17/issues/522) |
|  TripName.js: [64-66](https://github.com/CSU-CS-314-Fall-2021/t17/blob/9c20ba7b126b6144d6bb03ac8677742dcc47ae6d/client/src/components/Trip/Itinerary/TripName.js#L64) | Try/Catch block is needed in `LoadTripButton` to handle the file as it would throw an error if user upload one file and then open the dialog box and exit it.  | low | Farhan (fargah1) | [521](https://github.com/CSU-CS-314-Fall-2021/t17/issues/521) |

