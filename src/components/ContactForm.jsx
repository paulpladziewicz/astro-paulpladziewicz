import React from 'react';

const translation = {
    en: {
        title: 'Contact'
    },
    es: {
        title: 'Contacto'
    }
}

const ContactForm = ({lang}) => {
    lang = lang || 'en';
    const { title } = translation[lang];

    return (
        <section className="row">
            <h2 className="display-3 fw-bold text-center mb-4">Reach Out</h2>
            <form className="col-md-6 mx-auto">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Your phone number will remain private.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Your email address will remain private.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;