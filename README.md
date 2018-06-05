# SCSS playground.
I use this app to explore the potential of SCSS.


###  User Stories:
* As a user I can see characters from the SWAPI, with information like name, gender, birthyear, species and planet.
* I can load more characters from the API with a button (see below).
* I can use a text field to search for names.
* I can use a dropdown for gender and species to filter down the list. Filters are combined.
* Not achieved: I can filter by planet and birth year.
* Not achieved: I sort by birthyear or name.
* If I click on a table entry (name or link) it brings me to the detailed view of a character.
* Not achieved: I also see other residents of the character's homeworld.
* I can go back to the list by clicking a button.

### Additional goals:
* The app doesn't break if there are no results.
* Not fully achieved: All props are type checked.
* The app is (somewhat) responsive and can be viewed on a mobile device.
* The app mimics the style of the SWAPI.
* No errors / warnings in the console.
* Don't use Codaisseur boilerplate code.



### Goals not achieved in time/ things I would improve:
* Load all characters at startup (as done with planets and species).
* Load resources from the API dynamically via the "next" property instead of hard-coding the urls.
* PropTypes: Non-function props do not have prop types.
* Tests: Add JEST/Enzyme tests.
* UI: Make app responsive, improve styling, highlight interactive elements (name, filter).



###  Technologies used:
* [React](https://reactjs.org/) - The web framework used for frontend
* [Redux](https://redux.js.org) - State manager for React
* SCSS to replace plain CSS. Using prepos6.
* [Yarn](https://yarnpkg.com/lang/en/) - Dependency Management
* [Superagent](https://visionmedia.github.io/superagent/) - For making API requests easier.


### Authors
**Friedrich Striewski**


### License
Feel free to use as you see fit.

