import React, {useState, useRef } from 'react'

import './styles/FormMessage.css'

export default function FormMessage(){
    
    const [controlSubmit, setControlSubmit ] = useState(true)

    const  title = useRef("")
    const  message = useRef("")
    const  file = useRef("")

    const handleSubmit = (event) => {
        if(controlSubmit){
            setControlSubmit(oldControlSubmit => !oldControlSubmit)
            setTimeout(()=>{
                console.log(title.current.value)
                console.log(message.current.value)  
                console.log((file.current.files.length > 0)?file.current.files[0]:"")
                setControlSubmit(oldControlSubmit => !oldControlSubmit)
            }, 3000)
        }
        event.preventDefault();
    }

    return (
        <>
            <form>
                <input ref={title} type="text" disabled={!controlSubmit}/>
                <textarea ref={message} disabled={!controlSubmit}> </textarea>
                <input ref={file} type="file" disabled={!controlSubmit}/>
                <button type="submit" onClick={(event)=>handleSubmit(event)} disabled={!controlSubmit}>Guardar</button>
            </form>
        </>
    )
} 
