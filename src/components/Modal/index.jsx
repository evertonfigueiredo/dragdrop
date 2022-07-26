import React from 'react';

import Modal from 'react-modal';

function ModalUser({ data }) {


    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return <>
        <button onClick={openModal}>Mais detalhes...</button>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            style={{
                content: {
                    position: 'absolute',
                    top: '120px',
                }
            }}
        >
            <div>
                <button onClick={closeModal}>close</button>
                <hr />
                <p>{data.content}</p>
            </div>

        </Modal>
    </>
}

export default ModalUser;