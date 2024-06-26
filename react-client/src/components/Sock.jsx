

import React from 'react';

function toYesOrNo(bool){
    if(bool) return "Yes";
    return "No";
}

export default function Sock(props){
    const details = props.data.sockDetails;
    const features = props.data.additionalFeatures;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Sock Details</h5>
                <div className="card-text">Size: {details.size}</div>
                <div className="card-text">Color: {details.color}</div>
                <div className="card-text">Pattern: {details.pattern}</div>
                <div className="card-text">Material: {details.material}</div>
                <div className="card-text">Condition: {details.condition}</div>
                <div className="card-text">For Foot: {details.forFoot}</div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Additional Features</h5>
                <div className="card-text">Water Resistant: {toYesOrNo(features.waterResistant)}</div>
                <div className="card-text">Padded: {toYesOrNo(features.padded)}</div>
                <div className="card-text">Anti Bacterial: {toYesOrNo(features.antiBacterial)}</div>
            </div>
            <div className="card-footer" >
                <small className="text-muted">Added: </small>
            </div>
        </div>
    );
};