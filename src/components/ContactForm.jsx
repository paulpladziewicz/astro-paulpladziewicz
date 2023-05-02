import React from 'react';

const translation = {
    en: {
        title: 'Contact'
    },
    es: {
        title: 'Contacto'
    }
}

const ContactForm = ({lang = 'en'}) => {
    const { title } = translation[lang];

    return (
        <section className="row">
            {title}
            <button>Click</button>
        </section>
    )
}

export default ContactForm;