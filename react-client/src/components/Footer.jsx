import React from 'react'

export default function Footer({environment}){
    let color = "yellow";
    environment = environment.toUpperCase();
    if(environment === "PRODUCTION"){
        color = "green";
    }
    return(
        <footer className="text-muted">
            <div style={{backgroundColor: color, textAlign : "center"}}>
                <strong>{environment}</strong>
            </div>
        </footer>
    );
}
