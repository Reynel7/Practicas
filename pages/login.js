import React from "react";
import Button from 'react-bootstrap/Button'
export default function Login() {
    
  
    return (
        <div style={{ 
           
            backgroundColor: "orange", 
            textAlign : "center",
            
            }} >
        <div   >
        <h1>HOLA MUNDO</h1>
        <h3>Introduzca su correo</h3>
        <input></input>
        <h3>Contraseña</h3>
        <input></input>
        
        </div>
        <div>
        <Button variant="primary">INGRESAR</Button>
        </div>
        </div>
    )
}
