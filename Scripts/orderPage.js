$(document).ready(function(){

  var isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
      window.location.href = "login.html";
  } else {
      var loggedInUser = sessionStorage.getItem("loggedInUser");
      $("#user").val(loggedInUser);
  }

    var loggedInUser = sessionStorage.getItem("loggedInUser");

    if (loggedInUser) {
        $("#user").text(loggedInUser);
    }

    let searchParams = new URLSearchParams(window.location.search)

    var userInfo  = ""

    if(searchParams.has('text')){
      userInfo += "Order Number: " + searchParams.get('text') + "\n"
    }

    if(searchParams.has('name')){
      userInfo += "Name: " + searchParams.get('name') + "\n"
    }

    if(searchParams.has('address')){
      userInfo += "Address: " + searchParams.get('address') + "\n"
    }

    $("#recieved").val(userInfo)

});

$('#periButton').on('click', () => {
    $('#friedMenu').hide();
    $('#burgerMenu').hide();
    $('#periMenu').show();
    
  });

  $('#friedButton').on('click', () => {
    $('#periMenu').hide();
    $('#burgerMenu').hide();
    $('#friedMenu').show();
  });
  
  $('#burgerButton').on('click', () => {
    $('#periMenu').hide();
    $('#friedMenu').hide();
    $('#burgerMenu').show();
  });

  $('#friedButton').on('click', () => {
    $('#submitOrder').show();
  });

  $('#burgerButton').on('click', () => {
    $('#submitOrder').show();
  });

  $('#periButton').on('click', () => {
    $('#submitOrder').show();
  });

  $(".food").change(function() {
	  var total = 0;
    var label = "";

    $("#addItem").empty()

	  $( ".div" ).each(function( index ) {
	  
   
		 var id= $(this).attr("id");
	  
		  var price = parseFloat($("#" + id + "Checkbox").attr("data-price"));
		  
		  if($("#" + id + "Checkbox").is(':checked')) {
			var quantity = $("#" + id + "Quantity").val()
      var itemTotal = (price * quantity).toFixed(2);
			total += (price * quantity);

      label = $("#" + id + "Label").text() + " Quantity: " + quantity + " Price: " + (price * quantity) + "</br>"
      $("#addItem").append(label)

		  }

	  });

    $("#total").text(total.toFixed(2));
	
	});
	
	$("#saveOrder").click(function(){
        alert($("#recieved").val()  + "Total: £" + $("#total").text());
    });





