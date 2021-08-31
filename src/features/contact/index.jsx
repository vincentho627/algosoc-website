import React from 'react'
import './style.css'
import Title from "../../components/title";
import Button from "../../components/button";
import {Container, Row, Col} from "react-bootstrap";
import ContactFooter from "../../components/contact-footer";

function Contact() {

    return (
        <section id={'contact'}>
            <Title name={'CONTACT US'}/>
            <Container className={'contacts-container'}>
                <Row md={2} xs={1}>
                    <Col className={'contact-container'}>
                        <ContactFooter href={'mailto: algo.trade@imperial.ac.uk'} name={'EMAIL'}
                                       link={'algo.trade@imperial.ac.uk'}
                                       src={process.env.PUBLIC_URL + '/img/email.svg'}/>
                    </Col>
                    <Col className={'contact-container'}>
                        <ContactFooter href={'https://fb.me/ICAlgorithmicTrading/'} name={'FACEBOOK'}
                                       link={'https://fb.me/ICAlgorithmicTrading/'}
                                       src={process.env.PUBLIC_URL + '/img/facebook.svg'}/>
                    </Col>
                </Row>
            </Container>
            <div className={'contact-button'}>
                <Button name={'JOIN US'}
                        onClick={() => window.location.href = 'https://www.imperialcollegeunion.org/activities/a-to-z/algorithmic-trading'}/>
            </div>
        </section>
    )

}

export default Contact
