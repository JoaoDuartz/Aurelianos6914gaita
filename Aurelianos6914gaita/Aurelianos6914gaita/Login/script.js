function showPassword() {
    const senhaInput = document.getElementById('senha');
    const eye = document.getElementById('eye');
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        eye.src = './Images/eye-not.png'; // Ícone para mostrar senha
    } else {
        senhaInput.type = 'password';
        eye.src = './Images/eye.png'; // Ícone para esconder senha
    }
}

function login() {
    const nome = document.getElementById('nome').value.trim().toLowerCase();
    const senha = document.getElementById('senha').value;
    const errorMsg = document.getElementById('error-msg');

    if (nome === 'joao' && senha === '123') {
        errorMsg.style.display = 'none';
        alert('Login realizado com sucesso!');
        // Exemplo: redirecionar para outra página:
        // window.location.href = 'pagina-principal.html';
    } else {
        errorMsg.style.display = 'block';
    }
}
