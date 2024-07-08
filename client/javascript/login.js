document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(username === "wasadmin@test.com" && password === "red"){
        document.getElementById("feedback").innerHTML = "Logged in."
    } else {
        document.getElementById("feedback").innerHTML = "Not Authorized."
    }
});