import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import NewLead from '../../Views/NewLead';
import Success from '../../Views/NewLead/Success';

import { addLead } from '../../Services/Leads';
import { getCurrentUser } from '../../Services/Users';

function NewLeadController() {
    const [ created, setCreated ] = useState(false);

    const history = useHistory();

    // redireciona para o painel caso cadastre com sucesso
    const closeModal = () => {
        setCreated(false);
        history.push("/");
    }

    const performSave = async ({ name, phone, email, options }) => {
        if(name === undefined)
            throw new Error("Insira um nome");
        
        if(phone === undefined)
            throw new Error("Insira um telefone");

        if(email === undefined)
            throw new Error("Insira um email");

        if(addLead({ name, phone, email, options })) {
            setCreated(true);
        } else {
            throw new Error("Ocorreu um erro ao criar o lead.");
        }

    }

    // sem usuário criado
    if(getCurrentUser() === null){
        history.push("/register");
        return null;
    }
    
    return (
        <>
            <NewLead performSave={performSave}/>
            <Success shown={created} closeModal={closeModal} />
        </>
    );
}

export default NewLeadController;