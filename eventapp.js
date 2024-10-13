// Define the event details

const event1 = {
	name: "debate_apr30",
	date: "April 30, 2023 - 10:00 am to 1:00pm",
	location: "Mini Hall 1, TP Ganesan Auditorium"
};
const event2 = {
	name: "embroidery_may2",
	date: "May 2, 2023 - 9:00am to 12:00pm",
	location: "Virtual - Google Meet"
};
const event3 = {
	name: "conf_may12",
	date: "May 12, 2023",
	location: "Mini Hall II, TP Ganesan Auditorium"
};
const event4 = {
	name: "solmar_may21",
	date: "May 21, 2023",
	location: "Main Campus to Tech Park, starts at Main Campus at 9:00 am"
};

// Initialize the current event name

let currentEventName = "";

// Update the card with the event details

document.getElementById("event1-date").innerHTML = `Date: ${event1.date}`;
document.getElementById("event1-location").innerHTML = `Location: ${event1.location}`;

document.getElementById("event2-date").innerHTML = `Date: ${event2.date}`;
document.getElementById("event2-location").innerHTML = `Location: ${event2.location}`;

document.getElementById("event3-date").innerHTML = `Date: ${event3.date}`;
document.getElementById("event3-location").innerHTML = `Location: ${event3.location}`;

document.getElementById("event4-date").innerHTML = `Date: ${event4.date}`;
document.getElementById("event4-location").innerHTML = `Location: ${event4.location}`;

// Handle the click event on the registration button for each event

// Handle the click event on the registration button for each event
document.getElementById("register-button1").addEventListener("click", function() {
	// Update the current event name based on the button that was clicked
	currentEventName = event1.name;
  
	// Display the registration form in a modal
	document.querySelector(".modal").style.display = "block";
	document.getElementById("registration-form").reset();
  });
  
  document.getElementById("register-button2").addEventListener("click", function() {
	// Update the current event name based on the button that was clicked
	currentEventName = event2.name;
  
	// Display the registration form in a modal
	document.querySelector(".modal").style.display = "block";
	document.getElementById("registration-form").reset();
  });
  
  document.getElementById("register-button3").addEventListener("click", function() {
	// Update the current event name based on the button that was clicked
	currentEventName = event3.name;
  
	// Display the registration form in a modal
	document.querySelector(".modal").style.display = "block";
	document.getElementById("registration-form").reset();
  });
  
  document.getElementById("register-button4").addEventListener("click", function() {
	// Update the current event name based on the button that was clicked
	currentEventName = event4.name;
  
	// Display the registration form in a modal
	document.querySelector(".modal").style.display = "block";
	document.getElementById("registration-form").reset();
  });
  

// Handle the submit event on the registration form
// select the close button element
var closeButton = document.querySelector('.close');

// add a click event listener to the close button element
closeButton.addEventListener('click', function() {
    // hide the modal window
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
});


document.getElementById("registration-form").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent the form from submitting in the traditional way

	// Send the registration data and current event name to a PHP script that will store it in a MySQL database

	const xhr = new XMLHttpRequest();
	const url = "register.php";
	const formData = new FormData(document.getElementById("registration-form"));

	// Add the current event name to the form data
	formData.append("eventName", currentEventName);

	xhr.open("POST", url, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// Display a success message and hide the modal
			alert("Registration successful!");
			document.querySelector(".modal").style.display = "none";
		}
	};

	xhr.send(formData);
});
