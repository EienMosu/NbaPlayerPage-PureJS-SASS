# NbaPlayerPage-PureJS-SASS
Home Page (page with a form for user name)

One input field for user name
One submit button
After click on Submit button it redirects you to the NBA players page (described below)
Validations & error messages: 
User name is required
Minimum 3 characters

NBA Players Page
	
	This page should list all the players returned from this API url:
	https://www.balldontlie.io/api/v1/players

On top of the page, you should have a nav bar with NBA logo on the left and user name on the right
Until the data is loaded you should have a loading indicator
The players table should have 5 columns in the following order: 
ID
Full name
Position
Team
City
On the top of the players table, you should have a Filter menu which will be used to filter the players (show only the filtered). The filter should contain: 
One input field to filter by full name
Select Dropdown to filter by position C, F or G
Sorting by first name: [ascending, descending]
