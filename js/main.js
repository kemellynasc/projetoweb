document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitLogin');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginModal = document.getElementById('loginModal');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const email = emailInput.value;
        const password = passwordInput.value;

        if (!checkLoginForm(email, password)) {
            return; // Se a validação falhar, interrompe a execução
        }

        // Se a validação passar, você pode enviar os dados para o servidor aqui
        console.log('Login bem-sucedido! Email:', email, 'Senha:', password);

        // Fecha o modal
        bootstrap.Modal.getInstance(loginModal).hide();
    });

    function checkEmail(email) {
        // Expressão regular para validar email
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function checkLoginForm(email, password) {
        let isValid = true;
        let errorMessage = '';

        if (!email) {
            errorMessage += 'O campo de email é obrigatório.\n';
            isValid = false;
        } else if (!checkEmail(email)) {
            errorMessage += 'O email informado não é válido.\n';
            isValid = false;
        }

        if (!password) {
            errorMessage += 'O campo de senha é obrigatório.\n';
            isValid = false;
        }

        if (!isValid) {
            // Exibir a mensagem de erro em um elemento HTML (ex: uma div com a classe "error-message")
            const errorMessageElement = document.getElementById('error-message');
            errorMessageElement.textContent = errorMessage;   

        }

        return isValid;
    }
});

