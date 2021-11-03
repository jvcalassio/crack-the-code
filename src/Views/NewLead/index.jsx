import React, { useState } from 'react';
import { Form, Button, Table, Alert } from 'react-bootstrap';

import './styles.css';

function NewLead({ performSave }) {
    const [ name, setName ] = useState();
    const [ phone, setPhone ] = useState();
    const [ email, setEmail ] = useState();
    const [ options, setOptions ] = useState([false,false,false,false]);
    const [ error, setError ] = useState(false);

    const changeOptions = (value, i = undefined) => {
        let opts = Array.from(options);
        if(i !== undefined) {
            opts[i] = value;
        } else {
            // caso um indice nao seja recebido, muda todas as checkboxes
            // para o valor desejado
            opts = Array(opts.length).fill(value);
        }
        setOptions(opts);
    };

    const handleClick = async () => {
        setError(false);

        try {
            await performSave({ name, phone, email, options});
        } catch(e) {
            setError(e.message);
        }
    };

    return (
        <div className="new_page">
            <h2 className="mb-5 text-center">Novo Lead</h2>
            {error ? <Alert className="animatedError" variant={"danger"}>Erro: {error}</Alert> : null}
            <Form className="new_form">
                <div className="new_column">
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nome*</Form.Label>
                        <Form.Control type="text" onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Telefone*</Form.Label>
                        <Form.Control type="tel" onChange={e => setPhone(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="email" onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                </div>
                <div className="new_column">
                    <span className="d-block mb-2">Oportunidades*</span>
                    <Table striped className="checklist">
                        <thead>
                            <tr>
                                <th className="text-center">
                                    <Form.Check 
                                        type="checkbox" 
                                        id="all" 
                                        onChange={(e) => changeOptions(e.target.checked)}
                                    />
                                </th>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="text-center">
                                    <Form.Check 
                                        type="checkbox" 
                                        id="rpa" 
                                        onChange={(e) => changeOptions(e.target.checked, 0)}
                                        checked={options[0]}
                                    />
                                </th>
                                <td><label className="d-block" htmlFor="rpa">RPA</label></td>
                            </tr>
                            <tr>
                                <th className="text-center">
                                    <Form.Check 
                                        type="checkbox" 
                                        id="prd" 
                                        onChange={(e) => changeOptions(e.target.checked, 1)}
                                        checked={options[1]}
                                    />
                                </th>
                                <td><label className="d-block" htmlFor="prd">Produto digital</label></td>
                            </tr>
                            <tr>
                                <th className="text-center">
                                    <Form.Check 
                                        type="checkbox" 
                                        id="anl" 
                                        onChange={(e) => changeOptions(e.target.checked, 2)}
                                        checked={options[2]}
                                    />
                                </th>
                                <td><label className="d-block" htmlFor="anl">Analytics</label></td>
                            </tr>
                            <tr>
                                <th className="text-center">
                                    <Form.Check 
                                        type="checkbox" 
                                        id="bpm"
                                        onChange={(e) => changeOptions(e.target.checked, 3)}
                                        checked={options[3]}
                                    />
                                </th>
                                <td><label className="d-block" htmlFor="bpm">BPM</label></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <Button variant="primary" type="button" className="w-100" onClick={handleClick}>
                    Salvar
                </Button>
            </Form>
        </div>
    );
}

export default NewLead;