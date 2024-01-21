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
        alert('hai')
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
            <div className="p-8 bg-white rounded shadow-md w-96 space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="text-2xl font-bold text-center">Contact Form</div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600">Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                      
                        <Button name={'Submit'} type='submit'/>
                        <Button name={'Close'} method={close} className="text-gray-600 hover:text-gray-800 focus:outline-none" />
                    </div>
                </form>
            </div>
        </div>


    );
};

export default Modal;
