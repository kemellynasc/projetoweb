// Função para validar o CPF
function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais (ex: 11111111111)
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Validação do CPF (algoritmo de validação)
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

// Manipulador de eventos para o formulário de login
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos CPF e senha
    const cpf = document.getElementById('cpf').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    // Valida o CPF e verifica se a senha não está vazia
    if (!validarCPF(cpf)) {
        message.textContent = 'CPF inválido. Por favor, insira um CPF válido.';
        message.style.color = 'red';
        return;
    }

    if (password.length < 6) {
        message.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        message.style.color = 'red';
        return;
    }

    // Exemplo de verificação simples (aqui você poderia adicionar lógica de autenticação com backend)
    if (cpf === '12345678909' && password === 'senha123') {
        message.textContent = 'Login bem-sucedido!';
        message.style.color = 'green';
    } else {
        message.textContent = 'CPF ou senha incorretos.';
        message.style.color = 'red';
    }
});