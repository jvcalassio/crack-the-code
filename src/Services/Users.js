function addUser({ login, pwd }) {
    localStorage.setItem('crack-the-code/login', login);
    localStorage.setItem('crack-the-code/pwd', pwd);

    // retorna status de erro ou sucesso. para este caso, sempre verdadeiro.
    return true;
}

function getCurrentUser() {
    return localStorage.getItem('crack-the-code/login');
}

export {
    addUser,
    getCurrentUser
}