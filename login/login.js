document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Collect form data
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Send data to backend
    fetch("../back/loginuser.java", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        // Handle response from backend
        if (response.ok) {
          console.log("Login successful!");
          // Redirect or show success message
        } else {
          console.error("Invalid credentials");
          // Handle error response
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  });
