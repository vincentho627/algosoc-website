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
                                    ALGOTHON 2020
                                </h4>
                            </div>
                            <p className={'events-date'}>
                                April 19 - 20
                            </p>
                            <p className={'event-info'}>
                                Algothon Virtual in partnership with Aspect is the third annual Algothon organised by
                                the Imperial College Algorithmic Trading Society. We’re excited to bring you 48 hours of
                                intense hacking, bringing the brightest minds together to produce incredible new
                                financial technology
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
