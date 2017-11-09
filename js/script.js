$(function(){

	$("#form1").submit(function(event) {
		event.preventDefault();
		/* Act on the event */
		var name = $("#name").val();
		var password = $("#password").val();

		if (name == null  ||  name == "") {
			alert("Name cannot be empty.");
			return false;
		}
		else if (password.length<6) {
			alert("Password must be more than 6 characters");
			return false;
		}

		else if (password.length === 6) {
			alert("Password must be greater than 6");
			return false;
		}

		else if (password.length > 6){
			// var userInput = $(".introduction").append('Hello ' + name.text() + ", thanks for visiting our site");
			window.location = "demo/intro.html";
			
		}

	});
});