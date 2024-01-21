import React, { useState } from 'react'
import Modal from './Modal';
import Button from './Button'


function Aside() {
    const [showModal, toggleModal] = useState(false);

    const hello = () => {
        toggleModal(true)
    }


    return (
        <div>
            {showModal && <Modal method={toggleModal} />}
            <Button name={"New"} method={hello} />
            <Button name={"Insert"} />
            <Button name={"Save"} />
            <Button name={"Print"} />
        </div>
    )
}

export default Aside
