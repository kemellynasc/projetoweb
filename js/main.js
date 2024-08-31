document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitLogin').addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validação simples dos campos
        if (email === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            // Se os campos estiverem preenchidos, exibe o alerta de login concluído
            alert('Login concluído');
            
            // Aqui você pode enviar os dados para o servidor ou realizar outra ação
            console.log('Email:', email);
            console.log('Senha:', password);

            // Fechar o modal após o login (se necessário)
            var myModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            myModal.hide();
        }
    });
});
