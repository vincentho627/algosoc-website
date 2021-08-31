import React from 'react'
import './style.css'
import Title from "../../components/title";
import {Col, Row, Container} from "react-bootstrap";

function About() {

    return (
        <section id={'about-us'}>
            <Title name={'ABOUT US'}/>
            <Container className={'about-container'}>
                <Row md={2} xs={1}>
                    <Col className={'about-content'}>
                        As of March 2018, we became a society for the first time at Imperial College London and have
                        since held a launch event where participants were introduced to the society and the activities
                        we will be planning for the upcoming academic year. Regardless of whether you are a novice to
                        trading or a veteran Quant, all are welcomed to be part of the society. If you want to learn
                        more about simple trading strategies or more complicated statistical arbitrage of stocks, the
                        society hopes to bring students closer to learning and developing their understanding and
                        application of algorithms in a financially driven context.
                    </Col>
                    <Col className={'logo-container'}>
                        <img className={'logo'} src={process.env.PUBLIC_URL + '/img/logo.png'} alt={'Society Logo'}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );

}

export default About
