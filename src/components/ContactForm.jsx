import React from 'react';
import { Formik } from 'formik';

const ContactForm = () => {
    return (
        <section className="row">
            <div className="text-center mb-4">
                <h2 className="display-3 fw-bold">Reach Out</h2>
                <p>I would love to hear from you. Please provide your contact information and how I can help.</p>
            </div>

            <Formik
                initialValues={{ name: '', phone: '', email: '', message: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Please provide a full name.';
                    }
                    if (!values.phone) {
                        errors.phone = 'Please provide a phone number.';
                    }
                    if (!values.email) {
                        errors.email = 'Please provide a valid email address.';
                    }
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Email address is invalid.';
                    }
                    if (!values.message) {
                        errors.message = 'Please provide a message.';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,}) => (
                    <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                            <div className="form-text text-danger">{errors.name && touched.name && errors.name}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="phone" aria-describedby="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
                            <div className="form-text text-danger">{errors.phone && touched.phone && errors.phone}</div>
                            <div id="phoneHelp" className="form-text">Your phone number will remain private.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                            <div className="form-text text-danger">{errors.email && touched.email && errors.email}</div>
                            <div id="emailHelp" className="form-text">Your email will remain private.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea rows="5" className="form-control" id="message" aria-describedby="message" onChange={handleChange} onBlur={handleBlur} value={values.message} />
                            <div className="form-text text-danger">{errors.message && touched.message && errors.message}</div>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
                    </form>
                )}
            </Formik>
        </section>
    )
}

export default ContactForm;