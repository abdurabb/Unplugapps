import React, { useState } from 'react';
import Button from './Button';

const Modal = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission here
        console.log('Form Data:', formData);
        // Reset the form if needed
        setFormData({
            name: '',
            email: '',
            age: '',
        });
    };

    const close = () => {
        props.method(false)
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className=" p-8">
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </label>
                    <br />

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Submit
                    </button>
                </form>
                <Button name={'Close'} method={close} />
            </div>
        </div>
    );
};

export default Modal;
