import React from 'react'
import './style.css'
import Title from "../../components/title";
import CompanyProfile from "../../components/company-profile";
import {Container, Row, Col} from "react-bootstrap";

function Sponsors() {

    return (
        <section id={'sponsors'}>
            <Title name={'SPONSORS'} />
            <Container className={'sponsors-container'}>
                <Row md={4} xs={1}>
                    <Col>
                        <CompanyProfile src={process.env.PUBLIC_URL + '/img/imc.jpg'} name={'IMC TRADING'}/>
                    </Col>
                    <Col>
                        <CompanyProfile src={process.env.PUBLIC_URL + '/img/imc.jpg'} name={'IMC TRADING'}/>
                    </Col>
                    <Col>
                        <CompanyProfile src={process.env.PUBLIC_URL + '/img/imc.jpg'} name={'IMC TRADING'}/>
                    </Col>
                    <Col>
                        <CompanyProfile src={process.env.PUBLIC_URL + '/img/imc.jpg'} name={'IMC TRADING'}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Sponsors
