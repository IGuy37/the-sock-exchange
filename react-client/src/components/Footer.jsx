import React from 'react'

export default function Footer({environment}){
    let color = "green";
    environment = environment.toUpperCase();
    if(environment === "DEVELOPMENT"){
        color = "yellow";
    }
    return(
        <footer className="text-muted">
            <div style={{backgroundColor: color, textAlign : "center"}}>
                <strong>{environment}</strong>
            </div>
        </footer>
    );
}
