$(document).ready(function() {
    $("#login-form").submit(function(event) {
        event.preventDefault();
        
        const username = $("#username").val();
        const password = $("#password").val();

        if (username === "Eridania" && password === "12345") {
            window.location.href = "principal.html";
        } else {
            $("#error-message").show();
        }
    });
});