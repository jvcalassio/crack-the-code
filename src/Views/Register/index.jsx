import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import './styles.css';

function RegisterPage({ performRegister }) {
    const [ login, setLogin ] = useState();
    const [ pwd, setPwd ] = useState();
    const [ pwdConfirm, setPwdConfirm ] = useState();
    const [ logging, setLogging ] = useState(false);
    const [ error, setError ] = useState();

    const handleClick = async () => {
        setLogging(true);
        setError(false);
        try {
            await performRegister({ login, pwd, pwdConfirm });
        } catch(e) {
            setError(e.message);
            setLogging(false);
        }
    }

    return (
        <main className="login_page">
            <h2 className="mb-5 text-center">Registro</h2>
            {error ? <Alert className="animatedError" variant={"danger"}>Erro: {error}</Alert> : null}
            <Form className="login_form">
                <Form.Group className="mb-3" controlId="usuario">
                    <Form.Label>Usuário*</Form.Label>
                    <Form.Control type="text" onChange={e => setLogin(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="senha">
                    <Form.Label>Senha*</Form.Label>
                    <Form.Control type="password" onChange={e => setPwd(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="senha_confirm">
                    <Form.Label>Confirmação de senha*</Form.Label>
                    <Form.Control type="password" onChange={e => setPwdConfirm(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="button" className="w-100" onClick={handleClick} disabled={logging}>
                    Registrar
                </Button>
            </Form>
        </main>
    );
}

export default RegisterPage;
