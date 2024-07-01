import React, {useState} from 'react'
import { useAuth } from '../hooks/AuthContext';

export default function AddSock(props){
    const {user} = useAuth();
    const defaultSock = {
        sockDetails: {
            size: "Small",
            color: "Blue",
            pattern: "Striped",
            material: "Wool",
            condition: "Used",
            forFoot: "Left"
        },
        additionalFeatures: {
            waterResistant: false,
            padded: false,
            antiBacterial: false
        }
    }
    const [sock, setSock] = useState(defaultSock);

    const handleSubmit = (e) => {
        e.preventDefault();
        sock.userId = user.uid;
        sock.addedTimestamp = new Date().toISOString();
        setSock(sock);
        fetch(`${import.meta.env.VITE_SOCKS_API_URL}`, {
            method: "POST",
            body: JSON.stringify(sock),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log(response);
            alert("Sock submitted succesfully!");
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
        });
        
    };

    const handleChange = (e) => {
        const field = e.target.name;
       
        const val =  e.target.value;
        if(field === "userId"){
            sock[field] = val;
        } else {
            sock.sockDetails[field] = val;
        }
       
        setSock(sock);
        console.log(sock);
    }; 

    const handleCheck = (e) => {
        const field = e.target.name;
        const isChecked =  e.target.checked; 
        sock.additionalFeatures[field] =isChecked;
        setSock(sock);
        console.log(sock); 
    }

    return(
    <> 
        <div>
            {user ? <h5>Welcome, {user.username}! Your UID is {user.uid}</h5> : <h1>Please log in.</h1>}
        </div> 
        <form className="p-3" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="userId">User ID</label>
                <input
                    type="text"
                    className="form-control"
                    id="userId"
                    name="userId"
                    value={user.uid}
                    onChange = {handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="size">Size</label>
                <select
                    className="form-control"
                    id="size"
                    name="size"
                    onChange={handleChange}
                >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="color">Color</label>
                <input
                    type="text"
                    className="form-control"
                    id="color"
                    name="color"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="pattern">Pattern</label>
                <input
                    type="text"
                    className="form-control"
                    id="pattern"
                    name="pattern"
                    onChange = {handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="material">Material</label>
                <input
                    type="text"
                    className="form-control"
                    id="material"
                    name="material"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="condition">Condition</label>
                <select
                    className="form-control"
                    id="condition"
                    name="condition"
                    onChange={handleChange}
                >
                    <option>Used</option>
                    <option>New</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="forFoot">For Foot</label>
                <select
                    className="form-control"
                    id="forFoot"
                    name="forFoot"
                    onChange={handleChange}
                >
                    <option>Left</option>
                    <option>Right</option>
                    <option>Both</option>
                </select>
            </div>
            <div className="row">
                <div className="form-check col">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="waterResistant"
                        name="waterResistant"
                        onChange={handleCheck}
                    />
                    <label className="form-check-label" htmlFor="waterResistant">
                        Water Resistant
                    </label>
                </div>
                <div className="form-check col">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="padded"
                        name="padded"
                        onChange={handleCheck}
                    />
                    <label className="form-check-label" htmlFor="padded">
                        Padded
                    </label>
                </div>
                <div className="form-check col">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="antiBacterial"
                        name="antiBacterial"
                        onChange={handleCheck}
                    />
                    <label className="form-check-label" htmlFor="antiBacterial">
                        Anti Bacterial
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    </>

    )
}

