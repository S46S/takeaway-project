
var isDelivery;

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

  $('#collection').on('click', () => {
    isDelivery = false;
  });

  $('#delivery').on('click', () => {
      isDelivery = true;
  });

  $('#Address').attr('disabled','disabled');

  $('#Name').hide();

  $('#Address').hide();

  $('#delivery').on('click', () => {
    $('#Address').prop('disabled', false);
  });

  $('#collection').on('click', () => {
    $('#Address').prop('disabled', true);
  });

  $('#collection').on('click', () => {
    $('#Address').hide();
  });

  $('#generateNumberButton').on('click', () => {
    $('#collection').prop('disabled', true);
  });

  $('#generateNumberButton').on('click', () => {
    $('#delivery').prop('disabled', true);
  });

  $('#collection').on('click', () => {
    $('#Name').show();
  });

  $('#delivery').on('click', () => {
    $('#Name').show();
  });

  $('#delivery').on('click', () => {
    $('#Address').show();
  });

  $('#generateNumberButton').attr('disabled','disabled');

  $('#generateNumberButton').click(function(){
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    $('#numberTextbox').val(randomNumber);
  });

  $('#order').attr('disabled','disabled');

  $('#generateNumberButton').on('click', () => {
    $('#order').prop('disabled', false);
  });

  $("#generateNumberButton").on('click', () => {
    $('#generateNumberButton').prop('disabled', true);
  });

  $("#generateNumberButton").on('click', () => {
    $('#nameBox').prop('disabled', true);
  });

  $("#generateNumberButton").on('click', () => {
    $('#addressBox').prop('disabled', true);
  });

  function EnableGen(){

    var isValid = false;

    if (isDelivery) {
      // Check if the text box has any value
      if ($("#nameBox").val().trim() !== '' && $("#addressBox").val().trim() !== '') {
        isValid = true
      } 
    }else {
      if ($("#nameBox").val().trim() !== '') {
        isValid = true
      } 
    }

    $('#generateNumberButton').prop('disabled', !isValid);
  }

  $('#nameBox').on('input', function() {
    EnableGen();
  });

  $('#addressBox').on('input', function() {

    EnableGen();
  });

});

$("#order").click(function(){
  if(!isDelivery){

    window.location.href = "orderPage.html?text=" + $("#numberTextbox").val() + "&name=" + $("#nameBox").val() ;
  }else{

    window.location.href = "orderPage.html?text=" + $("#numberTextbox").val() + "&name=" + $("#nameBox").val() + "&address="  + $("#addressBox").val();
  }
});



