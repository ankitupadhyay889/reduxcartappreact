import React, { useState, useEffect } from 'react';

const Use = () => {

    const[name , setName] = useState("ankit");
    const[age , setAge] = useState(21);
    
    useEffect(() => {
        console.warn("heeloo from hooks");
    },[age])
// jb dono update ho rha tb dono call ho rha hai but agar hum nhi chate ki dono p ho tb hume bs ye add krna hoga ,[age] useeffect me....

    return (
        <div>
            <h2> Name : {name} </h2>
            <h2> Age : {age} </h2>
            <button onClick={()=>setAge(22)} > Update age </button>
            <button onClick={()=>setName("Ankit upadhyay")} > Update name </button>
        </div>
    );
};

export default Use;