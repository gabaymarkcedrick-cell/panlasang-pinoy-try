$(document).ready(function() {
    $('#Login form').submit(function(e) {
        e.preventDefault(); 

        var username = $('#Username').val().trim();
        var password = $('#Password').val().trim();

        if(username !== "" && password !== "") {
            alert("Login Accepted");
        } else {
            alert("Login Declined - Please enter username and password");
        }
    });
});

