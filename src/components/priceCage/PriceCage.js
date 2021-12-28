import React from 'react'

import './PriceCageStyle.css'

const PriceCage = props => {
    return (
        <div className="price-cage">
            <div className="price-cage-top">
                <p>{props.topText}</p>
            </div>
            <div className="price-cage-bottom">
                <p>{props.bottomText}</p>
            </div>
        </div>
    )
}

export default PriceCage

