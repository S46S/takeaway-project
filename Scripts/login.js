

    function login() {
        if ($("#username").val() == "admin" && $("#password").val() == "password") {
        sessionStorage.setItem("loggedInUser", $("#username").val());
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href='customer.html';
        } else {
          alert("You are not a valid user");
        }
      }
