import React, { } from 'react'
import md5 from 'md5'
import './styles/FormMessageV2.css'
import ClientHttpPersonal from '../utils/ClientHttpPersonal'

export default class FormMessageV2 extends React.Component {
    
    BASE_URL_REQUEST = 'http://localhost:3001/'
    ICON_URL_REQUEST = 'https://www.gravatar.com/avatar/{$replace_url}?d=identicon'

    unmount = false

    state = {
        controlSubmit: true,
        icon:this.ICON_URL_REQUEST,
        title:"",
        message:"",
    }
    
    componentDidMount(){
        this.unmount = false
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

        if(event.target.name === "username"){
            this.setState({
                "icon": this.ICON_URL_REQUEST.replace("{$replace_url}",md5(event.target.value))
            })
        }
        this.props.dataForm.notifyMessage(event.target.value, this)
    }
    componentWillUnmount(){
        this.unmount = true
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        if(this.state.controlSubmit){
            this.setState({
                controlSubmit: !this.state.controlSubmit
            })

            let it = this
            try{
                await ClientHttpPersonal(this.BASE_URL_REQUEST, 'messages', {
                    method: 'POST',
                    body: JSON.stringify({
                        icon: it.state.icon,
                        username:it.state.username,
                        title:it.state.title,
                        message:it.state.message,
                    })
                }, () => {
                    if(!it.unmount){
                        it.setState({
                            controlSubmit: !it.state.controlSubmit
                        })
                    }
                })
            }catch(error){
                console.log(error)
            }
        }
    }

    render(){
        return (
            <>
                Este viene del padre: <p ref={this.myMessageParent}></p>
                <form onSubmit={this.handleSubmit}>
                    <img src={this.state.icon} alt={this.state.username}/>
                    <input onChange={this.handleChange} type="text" name="username" disabled={!this.state.controlSubmit} value={this.state.username}/>
                    <input onChange={this.handleChange} type="text" name="title" disabled={!this.state.controlSubmit} value={this.state.title}/>
                    <textarea onChange={this.handleChange} name="message" disabled={!this.state.controlSubmit} value={this.state.message}></textarea>
                    <button type="submit" disabled={!this.state.controlSubmit}>Guardar</button>
                </form>
                <hr></hr>
            </>
        )
    }
} 
