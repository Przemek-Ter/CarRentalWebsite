import React from 'react'

import './ButtonStyle.css'

const Button = props => {
    return (
        <div className="button-box" >
            <p className="button-text">{props.text}</p>
        </div>
    )
}

export default Button
