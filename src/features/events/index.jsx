import React from 'react'
import './style.css'
import {Container, Row, Col} from "react-bootstrap";
import Title from "../../components/title";
import Button from "../../components/button";

function Events() {

    return (
        <div>
            <img className={'events-wave'} src={process.env.PUBLIC_URL + '/img/wave-02.svg'} alt={'wave-header'}/>
            <div id={'events'}>
                <Title name={'EVENTS'} white={'true'}/>
                <Container className={'events-container'}>
                    <Row md={2} xs={1}>
                        <Col className={'events-image-container'}>
                            <img className={'events-image'} src={process.env.PUBLIC_URL + '/img/events-image.png'}
                                 alt={'events'}/>
                        </Col>
                        <Col className={'events-info'}>
                            <div>
                                <h4 className={'events-title'}>
                                    Introduction to Algorithmic Trading
                                </h4>
                            </div>
                            <p className={'events-date'}>
                                Oct 2022 - Dec 2022
                            </p>
                            <p className={'event-info'}>
                                This course, delivered by our Head of Trading introduces you to algorithmic trading by covering various topics including
                                Time Series Analysis using momentum and mean reversion strategies, Machine Learning Techniques and Portfolio Construction
                                and Optimisation. 
                            </p>
                            <br/>
                            <Button onClick={() => {}} name={'MORE INFO'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )

}

export default Events
