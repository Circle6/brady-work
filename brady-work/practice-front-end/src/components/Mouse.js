import React from 'react';

const Mouse = (props) => {

    return (
        <div style={{ border: '1px solid lime', padding: 4, margin: 4 }}>
            <div>
                Brand: {props.BRAND}
            </div>
            <div>
                Model: {props.MODEL}
            </div>
            <div>
                Dimensions: {props.LENGTH} x {props.WIDTH} x {props.HEIGHT} x {props.WEIGHT}
            </div>
        </div>
    )
}

export default Mouse