import React from 'react'
import './style.css'

function Title(props) {

    return (
        <div className={'title-container'}>
            <h4 className={`title-name${props.white ? '-white' : ''}`}>
                {props.name}
            </h4>
            <hr className={'title-underscore'} />
        </div>
    );

}

export default Title
