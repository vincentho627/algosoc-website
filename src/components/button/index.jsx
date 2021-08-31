import React from 'react'
import './style.css'

function Button(props) {
    return (
        <button className={'button-container'} onClick={props.onClick}>
            <h4 className={'button-name'}>
                {props.name}
            </h4>
        </button>
    );
}

export default Button
