import React, { } from 'react'

import './styles/FormMessageV2.css'

export default class FormMessageV2 extends React.Component {
    
    state = {
        controlSubmit: true,
        title:"",
        message:"",
        file:"",
    }
    
    constructor(props){
        super(props)
        props.dataForm.addChildren(this)
        this.myMessageParent = React.createRef()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })

        this.props.dataForm.setState({
            form:{
                ...this.state, 
                [event.target.name] : event.target.value
            }
        })
        this.props.dataForm.notifyMessage(event.target.value, this)
    }

    handleSubmit = (event) => {
        if(this.state.controlSubmit){
            this.setState({
                controlSubmit: !this.state.controlSubmit
            })
            let it = this
            setTimeout(()=>{
                console.log(it.state.title)
                console.log(it.state.message)
                console.log(it.state.file)
                console.log((it.state.file.files !== undefined && it.state.file.files.length > 0)?it.state.file.files[0]:"")
                it.setState({
                    controlSubmit: !it.state.controlSubmit
                })
            }, 3000)
        }
        event.preventDefault()
    }

    render(){
        return (
            <>
                Este viene del padre: <p ref={this.myMessageParent}></p>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="title" disabled={!this.state.controlSubmit} value={this.state.title}/>
                    <textarea onChange={this.handleChange} name="message" disabled={!this.state.controlSubmit} value={this.state.message}></textarea>
                    <input onChange={this.handleChange} name="file" type="file" disabled={!this.state.controlSubmit} value={this.state.file}/>
                    <button type="submit" disabled={!this.state.controlSubmit}>Guardar</button>
                </form>
                <hr></hr>
            </>
        )
    }
} 
