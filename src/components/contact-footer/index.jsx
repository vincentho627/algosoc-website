import React from 'react'
import './style.css'

function ContactFooter(props) {

    return (
        <div className={'contact-footer'}>
            <div className={'contact-details'}>
                <img className={'contact-icon'} src={props.src} alt={props.name}/>
                <h3 className={'contact-method'}>{props.name}</h3>
                <hr className={'title-underscore'} />
                <a className={'contact-link'} href={props.href}>{props.link}</a>
            </div>
        </div>
    )

}

export default ContactFooter
