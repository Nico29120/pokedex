import { useState, useEffect } from "react";

export default function Counter (){
    const [count , setCount ] = useState(0);
    

     useEffect(() =>{
        console.log("Hello")
     }, []);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                Click me
            </button>
        </div>
    )
}