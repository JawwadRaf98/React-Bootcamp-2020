import React, {useState} from  'react'

function Name() {
    const [value, setVale] = useState(' ')
    const [name, setName] = useState("Jawwad")
    const [gmail, setGmail] = useState("Jawwadrafique@gmail.com")
    return (
        <div>
            <h1>My Name : {name} </h1> 
            <h3>Gmail : {gmail}</h3>
            <input type = "text" onChange = {(e) => setVale(e.target.value)} value = {value}/>
            <button onClick = {() => setName(value)}>Change Name</button>
            <button onClick = {() => setGmail(value)}>Change Email</button>
        
        </div>
    )
}


export default Name;