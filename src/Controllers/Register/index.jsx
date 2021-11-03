import React from 'react';
import { useHistory } from 'react-router-dom';

import RegisterPage from '../../Views/Register';

import { addUser } from '../../Services/Users';

function RegisterController() {
    const history = useHistory();

    const performRegister = async ({ login, pwd, pwdConfirm }) => {
        if(login === undefined || login === "")
            throw new Error("Insira um usuário")
            
        if(pwd === undefined || !pwd.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/))
            throw new Error("Sua senha precisa ter pelo menos 8 caracteres, \
                                um caracter especial, um caracter numérico e \
                                um caracter alfanumérico.");

        if(pwd !== pwdConfirm)
            throw new Error("As senhas não coincidem.");

        if(addUser({ login, pwd })) {
            history.push("/");
        } else {
            throw new Error("Ocorreu um erro ao realizar o cadastro.");
        }
    }
    
    return <RegisterPage performRegister={performRegister} />
}

export default RegisterController;