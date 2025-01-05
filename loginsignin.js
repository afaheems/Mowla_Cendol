const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const goToSignup = document.getElementById('go-to-signup');
const goToLogin = document.getElementById('go-to-login');

let userCredentials = null; // Store user credentials

goToSignup.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

goToLogin.addEventListener('click', () => {
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Form validation for login
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!userCredentials) {
        alert("You must sign up first.");
        return;
    }

    if (email !== userCredentials.email || password !== userCredentials.password) {
        alert("Incorrect email or password.");
        return;
    }

    alert("Login successful!");
    window.location = "/Projek/homepage/HomePageMowlaCendol.html";
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Form validation for signup
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Save user credentials
    userCredentials = { email: email, password: password };

    alert("Account created successfully! You can now log in.");
    // Switch to login container after successful signup
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});
