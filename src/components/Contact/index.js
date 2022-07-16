import clsx from "clsx";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import styles from './Contact.module.css';
function Contact() {
    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [alert, setAlert] = useState(false)
    const form = useRef();
    const handleChange = e => {
        setDataForm(dataForm => ({
            ...dataForm,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('service_idccuf8', 'template_47wmhzl', form.current, 'LzFa2c18BHo_AtfEU')
            .then(response => {
                console.log('Success', response);
                setAlert(true)
            }, error => {
                console.log('Fail', error);
                setAlert(false)
            }
            )
    }
    console.log(dataForm);
    return <div className={clsx(styles.contact)} id="Contact">
        <div className={clsx(styles.title)}>
            <p>Contact</p>
        </div>
        <div className={clsx(styles.contactBox, 'd-flex')}>
            <form ref={form} onSubmit={handleSubmit} className={clsx(styles.form, "d-flex")}>
                <input onChange={handleChange} type="text" name="fullname" placeholder="Name" required />
                <input onChange={handleChange} type="email" name="email" placeholder="Email" required />
                <textarea onChange={handleChange} name="message" placeholder="Message" required />
                <button type="submit">{alert ? (<i class="far fa-check-circle"></i>) : ('Send')}</button>

            </form>
            <div className={clsx(styles.map)}>
                <iframe src="https://my.atlistmaps.com/map/67d15659-09d7-4a6f-a3ba-fa43c27ba48a?share=true" allow="geolocation" width="100%" height="410px" scrolling="no" ></iframe>
            </div>
        </div>
    </div>;
}

export default Contact;