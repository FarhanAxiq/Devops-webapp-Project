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
5. Change Trip Name
6. Go to any place in the itinerary of your choosing. 

### Demographics

Age, nationality, and other background information can sometimes be helpful understanding the problems a user encountered.

| Pseudonym | Demographics |
| :--- | :--- |
| Carnhy's Father | Software Engineer, 50 Years Old, Does Android App Development |
| Zane Ethan's Friend | Mechanic, 21 years old |
| Jake - Farhan's Friend | Musician, 29 years old |
| Kush - Farhan's Friend | Software Engineer, 31 years old |
| Dylan's Dad | Saleseman, 56 years old |
| Evan's Wife - Amy | Biologist, 28 years old |



### Observations

Note the users interactions with the system for each of the tasks.
Record the success, failures, and problems the user encountered for each task.
Note any aid that was given along with anything you notice from their use of the application.
Add issues to GitHub for any changes necessary to the system.

| Task | problem, aid, observation | hi/med/low | github#  |
| :--- | :--- | :---: | :---: | 
| 1 | Had trouble with knowing that a place was added to the itinerary in our find page. I had to tell them to stop clicking the place and that it had been added to the itinerary. They ended up adding the place of their choosing over 10 times because they were not able to understand a place had been added | med | N/A |
| 5 | Had trouble finding the edit trip name button, they first tried to just click on the text to edit it, after that did not work they were at a loss. I had to tell them they were very close the first time after roughly 20 seconds of looking elsewehere. They felt dumb for not seeing the pencil icon and said it was obvious, however it still took them time to find the feature. | low | N/A |
| N/A | Issue finding features such as find, home, or others features located in the hamburger menu on the main page. Potential solutions include using popups to describe button use cases. | med | N/A |
| N/A | Formatting such as 'sacromento, california' was used which had 0 results becuase of how the match string has been implemented/database contents. We could start with describing the search format in the find search bar.  | low | N/A |
| N/A | The trip's name wasn't clear and was hard to find. There was also little indication it could be edited. The trip name could first be loaded with a default name such as 'Default Trip Name' and some way to make it clear it can be edited such as a edit button.  | low | N/A |
| N/A | The coordinate button is a bit cryptic and wondering why its not integrated into one single unified search. - Jake | low | N/A |
| N/A | Pressing the button after looking up for location will insert the location multiple time which resulted in duplicate location, not sure if that's intended - Kush | low | N/A |
| N/A | It was hard to tell what exactly some of the buttons do, a solution would be to add small text under buttons, or add tooltips | low | N/A |
| N/A | After clicking on something in the trip to highlight it, having to scroll back up to see it on the map was not ideal, make the page go back to the top | low | N/A |
| N/A | Amy didn't have trouble doing any of the tasks, but she though that having tooltips on every icon would make the site much more intuitive.  She also thought that the home icon for adding your current location isn't the best choice, and suggested changing it to the gps pin icon. | low | N/A |
| N/A | Amy also said that the find coordinate feature should be in the same location as the find location search bar | low | N/A |
| N/A | Amy thinks that it's a little strange how some of the icons are in the hamburger menu, and some are on the main page.  | low | N/A |
| N/A | Amy also thinks that the random button seems like an enter button due to its placement.  She said it would be more clear if it was in a different location on the same page | low | N/A |
