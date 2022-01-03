# User Experience - Team *T17* 

The report summarizes user experience testing performed on the team's application.

Each developer should ask the user to accomplish one or more simple tasks while monitoring their efforts.  
The user should attempt to complete the tasks without any aid from the developer.
Use a pseudonym to identify the user below. 
Set a time limit and tasks for the user to perform.

 
### Tasks

Each user should complete the following tasks in 10 minutes.
Developers should not guide the user, but the user may ask for help as a last resort.  
Consider this a failure when it happens.  

1. Find a place of your choosing (heliports, airports).
2. Go to your current location.
3. Load a File (provided).
4. Save a File.
5. Change Trip Name.
6. Go to any place in the itinerary of your choosing.
7. Pick a place from the random places.
8. Optimize the trip.

### Demographics

Age, nationality, and other background information can sometimes be helpful understanding the problems a user encountered.

| Pseudonym | Demographics |
| :--- | :--- |
| Christian's Mother | Interior Designer, 46 Years of age, not the best with technology |
| Farhan's friends | Geologist major, he like map but not tech savvy, ~24 y/ old | 
| Evan's Mom | Human Resources, also not the most technologically literate |
| Emily, Ethan's Sister | Nurse and Pre-Med undergraduate, ok with technology, 22 years old |
| Dylan's Girlfriend | Hair Stylyst, 21 |




### Observations

Note the users interactions with the system for each of the tasks.
Record the success, failures, and problems the user encountered for each task.
Note any aid that was given along with anything you notice from their use of the application.
Add issues to GitHub for any changes necessary to the system.

| Task | problem, aid, observation | hi/med/low | github#  |
| :--- | :--- | :--- | :--- |
| 5 | had trouble realizing that the tripname was click to edit, had to tell her to hover the mouse and pointed out that it was clickable. | med | N/A |
| 7 | had trouble realizing that random places was in the find menu, thougght it should be its own thing in the 3 dot menu. Once I pointed out that it was in the find she still had trouble finding the random places button becuase she could not tell that the icon was dice, she just thought it was the search button for out search even though it is progressive disclosure. Once I pointed out that it was in the find menu and the the icon was dice she had no issue. | med/high | N/A |
| 8 | trip was taking an extremely long time to optimize, this lead to her wondering if it was working. Also did not realize that you had to click the check mark to save the trip (this is not much of an issue she just is bad with technology, however the optimization is a big issue), she suggested a spinning mouse icon if possible while the trip is optimizing if it is going to take forever. | HIGH | N/A |
| 8  | The browser locked up when he was doing something | HIGH | N/A |
| 5 | It wasn't immediately apparent to Evan's mom that the trip name was clickable | med | N/A |
| 8 | The icon for optimize could be a little more obvious | low | #625 |
| 1 | The find button was hard to find. Emily didn't look through the hamburger menu at all. There could be a hoverable text over the hamburger to signify there are more features | high | TBD |
| 3 | When Emily was loading the file she didnt understand the purpose or the format. This is due to her not being the best with technology. She doesnt understand how the trips are structed in the file format. However, the load icon/button was clear and easy to use. | low | TBD |
| 8 | When optimizing a large trip it took a long time. Emily thought it was not working and prematuraly exited the optimization. We need to fix our implementation| high | TBD |
| 7 | Emily had issues finding the random button. She first had trouble with find so random was just added to the problem. It seems she didnt know those features were availble beciase they werre located in the hanburger button. Perhaps something to signify more features in the hamburger menu would fix the issue.  | med | TBD |
| 1 | Thought that the dice button was a search button, adding text/tooltip to let them know that it is a random search might help | low | N/A |
| 8 | The trip she made was hard to see when she went back and forth between original and optimized due to the box that re-appears | low | N/A |
| 2 | Emily had a hard time finding the the home button to add her current location. The hamburger menu is not clear and hides many features from the user. There needs to be a pop up to explain addtional features. This has been a common point of issues. | HIGH | TBD |
| 8 | When moving from the optimized trip back to the orginal there were distoration that and she picked places that were less then one mile away so there wasnt a total distance. This is just an effect caused by our units. | low | TBD |
