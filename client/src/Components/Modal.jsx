import React from 'react';
import Button from './Button';
import { Formik } from "formik";
import * as Yup from "yup";

// Creating Schema for Validation the Form
const schema = Yup.object().shape({
    vr_no: Yup.string()
        .required("vr_no is a required field"),
    vr_date: Yup.string()
        .required("vr_date is a required field"),
    ac_name: Yup.string()
        .required("ac_name is a required field"),
    ac_amt: Yup.string()
        .required("ac_amt is a required field"),
    status: Yup.string()
        .required("status is a required field"),
});


const Modal = (props) => {
    const close = () => {
        props.method(false)
    };

    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{ vr_no: '', vr_date: '', ac_name: '', ac_amt: '', status: '', }}
                onSubmit={(values) => {
                    // Alert the input values of the form that we filled
                    alert(JSON.stringify(values));
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (

                    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                        <div className="p-8 bg-white rounded shadow-md w-96 space-y-4">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="text-2xl font-bold text-center">Header Details Form</div>

                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-gray-600">vr_no:</label>
                                    <input
                                        type="text"
                                        name="vr_no"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.vr_no}
                                        placeholder="vr_no"
                                        className="form-control inp_text"
                                        id="vr_no"
                                    />
                                    {/* If validation is not passed show errors */}
                                    <p className="error text-red-500">
                                        {errors.vr_no && touched.vr_no && errors.vr_no}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-gray-600">vr_date:</label>
                                    <input
                                        type="text"
                                        name="vr_date"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.vr_date}
                                        placeholder="vr_date"
                                        className="form-control inp_text"
                                        id="vr_date"
                                    />
                                    {/* If validation is not passed show errors */}
                                    <p className="error text-red-500">
                                        {errors.vr_date && touched.vr_date && errors.vr_date}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-gray-600">ac_name:</label>
                                    <input
                                        type="text"
                                        name="ac_name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.ac_name}
                                        placeholder="ac_name"
                                        className="form-control inp_text"
                                        id="ac_name"
                                    />
                                    {/* If validation is not passed show errors */}
                                    <p className="error text-red-500">
                                        {errors.ac_name && touched.ac_name && errors.ac_name}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-gray-600"> ac_amt:</label>
                                    <input
                                        type="text"
                                        name="ac_amt"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.ac_amt}
                                        placeholder="ac_amt"
                                        className="form-control inp_text"
                                        id="ac_amt"
                                    />
                                    {/* If validation is not passed show errors */}
                                    <p className="error text-red-500">
                                        {errors.ac_amt && touched.ac_amt && errors.ac_amt}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-gray-600"> status:</label>
                                    <input
                                        type="text"
                                        name="status"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.status}
                                        placeholder="status"
                                        className="form-control inp_text"
                                        id="status"
                                    />
                                    {/* If validation is not passed show errors */}
                                    <p className="error text-red-500">
                                        {errors.status && touched.status && errors.status}
                                    </p>
                                </div>


                                <div className="flex items-center justify-between">

                                    <Button name={'Submit'} type='submit' />
                                    <Button name={'Close'} method={close} className="text-gray-600 hover:text-gray-800 focus:outline-none" />
                                </div>
                            </form>
                        </div>
                    </div>
                )}

            </Formik>
        </>


    );
};

export default Modal;
