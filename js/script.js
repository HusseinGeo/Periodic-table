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
			window.location = "demo/intro.html";
		}
	});

	var delay=10, setTimeoutConst;
    $('.key .group-base').on('hover', function() {
         setTimeoutConst = setTimeout(function(){
                //do something
		$(".element)").css("opacity", "0.2");
         }, delay);
    }, function(){
        clearTimeout(setTimeoutConst );
    });

	

	$(".key .group-sectioning").mouseover(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".element").not(".group-sectioning").css("opacity", "0.2");
	});
		
		

	});
// $(document).ready(function(){
//   alert("rdfgvhb");
// });