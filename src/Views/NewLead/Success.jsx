import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Success({ shown, closeModal }) {
    return (
        <Modal show={shown} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Sucesso</Modal.Title>
            </Modal.Header>
            <Modal.Body>Lead incluído com sucesso!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Success;