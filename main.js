// When the user submits, get the data from the from.
// Save the data to localStorage
// When the user refreshes the browser, repopulate the form with the data.
// Note: you will likely need to find a different way to set the dropdown and the slider...
// Some stretch goals:

// Keep a list of all orders submitted in localStorage
// Draw a list of all orders on the screen.
// Update the list of orders on the screen and in localStorage each time the user submits the form.
// Advice:

// Do break your code up into functions.
// Do try to move "hard-coded" values into variables/constants. (For example, if you keep typing the same selector string over and over, that's a good sign that you should create a global variable.)


$(function() {

		function addOrderToScreen(order) {
		var list = $('listOfOrders'); 
		
		orderElement.append('<p>' + order.coffeeOrder + '</p>');
		orderElement.append('<p>' + order.coffeeOrder + '</p>');
		orderElement.append('<p>' + order.coffeeOrder + '</p>');
		orderElement.append('<p>' + order.coffeeOrder + '</p>');



		}

	//when document is ready, we need to populate the form fields with the values that were saved to local storage
		var coffeeType= $('#coffeeOrder').val();
		var customerEmail = $('#emailInput').val();
		var size = $('input:checked').val(); 
		var shot = $('#flavorShot').val();
		var strengthLevel = $('#strengthLevel').val(); 

		$('#coffeeOrder').val(coffeeType); 
		$('#emailInput').val(customerEmail);
		
		if (size) {
			$("input[name=size]").attr("checked", false); 
			var elementToSelect = "input[value=" + size + "]";
			$(elementToSelect).attr("checked", true);
		}

		// $('input:checked').val();
		$('#flavorShot').val(shot); 
		$('#strengthLevel').val(strengthLevel); 


$("form").submit(function(e) {
		e.preventDefault();

	

		var coffeeOrder= $('#coffeeOrder').val();
		var customerEmail = $('#emailInput').val();
		var size = $('input:checked').val(); //look at every single input but give me one that is checked and take value.
		var shot = $('#flavorShot').val();
		var strengthLevel = $('#strengthLevel').val(); 

		
		localStorage.setItem('coffeeOrder', coffeeOrder);
		localStorage.setItem('customerEmail', customerEmail);
		localStorage.setItem('size', size); 
		localStorage.setItem('shot', shot);
		localStorage.setItem('strengthLevel', strengthLevel);


	});

});

