import React from 'react'
import './style.css'
import Title from "../../components/title";
import {Container, Row, Col} from "react-bootstrap";
import Profile from "../../components/profile";

function Committee() {

    const committeeList = [
        {
            src: process.env.PUBLIC_URL + '/img/archie.png',
            name: 'Archibald Crichton',
            position: 'PRESIDENT'
        },
        {
            src: process.env.PUBLIC_URL + '/img/vincent.png',
            name: 'Vincent Ho',
            position: 'TECHNOLOGY'
        },
        {
            src: process.env.PUBLIC_URL + '/img/tser.png',
            name: 'Tser Siew',
            position: 'HEAD OF EVENTS'
        },
        {
            src: process.env.PUBLIC_URL + '/img/hubert.png',
            name: 'Hubert Sumarno',
            position: 'SECRETARY'
        },
        {
            src: process.env.PUBLIC_URL + '/img/thomas.png',
            name: 'Thomas Wong',
            position: 'HEAD OF TRADING'
        },
    ]

    function generateRows() {

        const firstRow = []
        const secondRow = []

        for (let i = 0; i < committeeList.length; i++) {
            const curr = committeeList[i]
            if (i < Math.ceil(committeeList.length / 2)) {
                firstRow.push(
                    <Col key={i}>
                        <Profile src={curr.src} position={curr.position}
                                 name={curr.name}/>
                    </Col>
                )
            } else {
                secondRow.push(
                    <Col key={i}>
                        <Profile src={curr.src} position={curr.position}
                                 name={curr.name}/>
                    </Col>
                )
            }
        }

        return <>
            <Container className={'first-row'}>
                <Row>
                    {firstRow}
                </Row>
            </Container>
            <Container className={'second-row'}>
                <Row>
                    {secondRow}
                </Row>
            </Container>
        </>

    }

    return (
        <>
            <section id={'committee'}>
                <Title name={'COMMITTEE'} white={true}/>
                <div className={'committee-container'}>
                    {generateRows()}
                </div>
            </section>
            <img className={'committee-wave'} src={process.env.PUBLIC_URL + '/img/wave-03.svg'} alt={'committee-wave'}/>
        </>

    )

}

export default Committee
