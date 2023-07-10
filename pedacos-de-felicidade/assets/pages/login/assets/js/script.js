

document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.querySelector('input[type="text"]');
    var passwordInput = document.querySelector('input[type="password"]');
    var loginButton = document.querySelector('button[type="submit"]');
    var form = document.querySelector('.form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Perform validation
        var email = emailInput.value;
        var password = passwordInput.value;

        if (email === '') {
            alert('Por favor, preencha o campo de e-mail.');
            return;
        }

        if (password === '') {
            alert('Por favor, preencha o campo de senha.');
            return;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return false;
        }


        form.reset();


    });
});
