import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const CustomModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {props.heading ?
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.heading}
                    </Modal.Title>
                </Modal.Header>
                :
                null
            }
            <Modal.Body>
                {props.children}
            </Modal.Body>
                <Modal.Footer />
          
        </Modal >
    );
};

export default CustomModal;
