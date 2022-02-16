document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;



    const passwordField = document.getElementById('password-field');
    const userpassword = passwordField.value;


    if (userEmail == 'sontan@baap.com' && userpassword == 'secret') {
        window.location.href = 'banking.html';

    }
});






