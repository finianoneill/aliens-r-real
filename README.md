# Aliens-R-Real! | JavaScript and DOM Manipulation

## Background

The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

That's why we have created a dynamic table based upon a [starter data](Resources/js/data.js). The user is able to filter the table data for specific values. The only technologies used are pure JavaScript, HTML, and CSS, and D3.js on our web pages. 

### Level 1: Automatic Table and Date Search

* Created a basic HTML web page to display the data.

* Used the UFO dataset provided to form an array of JavaScript objects, then appended a table to the web page that adds new rows of data for each UFO sighting.

  * There is a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment`.

* A date form is used in the HTML document and while JavaScript code listens for events and searches through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories

* Uses multiple `input` tags and/or select dropdowns, so that the user can set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](Resources/js/data.js)
