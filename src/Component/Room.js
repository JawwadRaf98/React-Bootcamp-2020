import React, { useState } from 'react';

function Room() {
    const [isLit, setLit] = useState(true)
    
    return (
        // <div className = {isLit ? 'lightOn roomComponent' : "lightOff roomComponent"}  >
        <div className = {`roomComponent ${isLit ? 'lightOn' : "lightOff "}`}>

            This is Room Component<br />
            <h1>
                Room is {isLit ? "light" : "dark"}
            </h1>
            {isLit ?<button onClick = {() => setLit(false)}>Off </button> 
            : 
             <button onClick = {() => setLit(true)}>On </button>}
            {/* // <button onClick = {() => setLit(false)}>Change </button> */}
        </div>
    )
}
export default Room;