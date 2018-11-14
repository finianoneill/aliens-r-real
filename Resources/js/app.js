// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Get a reference to the input element on the page with the id property set to 'input-field'
var filterButton = d3.select("#filter-btn");

// Include event handler for when date filter button is clicked
filterButton.on("click", function() {

	// First clear out previous table 
	d3.selectAll("td").remove();

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Select the input element and get the raw HTML node
	var inputDate = d3.select("#datetime");
	var inputCity = d3.select("#city");
	var inputState = d3.select("#state");
	var inputCountry = d3.select("#country");
	var inputShape = d3.select("#shape");

	// Get the value property of the input element
	var inputDateValue = inputDate.property("value");
	var inputCityValue = inputCity.property("value");
	var inputStateValue = inputState.property("value");
	var inputCountryValue = inputCountry.property("value");
	var inputShapeValue = inputShape.property("value");

	var objectStore = [];

	// Use the form input to filter the data by date of ufo sighting
	data.forEach(function(ufoSighting){
		if (ufoSighting.datetime === inputDateValue && 
			ufoSighting.city === inputCityValue &&
			ufoSighting.state === inputStateValue &&
			ufoSighting.country === inputCountryValue &&
			ufoSighting.shape === inputShapeValue) {objectStore.push(ufoSighting)};
	});

	// then append each data element as separate cells in the table body within the ufo reportings data set
	objectStore.forEach((ufoSighting) => {
  		var row = tbody.append("tr");
	  	Object.entries(ufoSighting).forEach(([key, value]) => {
	    	var cell = tbody.append("td");
	    	cell.text(value);
	  	});
	});
});