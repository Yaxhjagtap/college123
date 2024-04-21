function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "anita1234" && password === "12345678") {
        alert("Login successful!");
        window.location.href = "http://localhost/School_Fees_Payment_Management_System/School_Fees_Payment_Management_System/index.php?page=home";
        return false; // Prevent form submission
    } else {
        alert("Invalid credentials, please try again.");
        return false; // Stay on the page
    }
}
