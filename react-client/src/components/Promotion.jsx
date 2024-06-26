import React from 'react'

export default function Promotion(props){
    const promo = props.data;
    return (
        <div className="card" style={{ flex: '1', minWidth: '100px', maxWidth: '25%' }}>
            <div className="card-body">
                <div className="card-text">{promo.feature}</div>
                <a className="card-text" href="#">Click to buy!</a>
            </div>
        </div>
    );
}