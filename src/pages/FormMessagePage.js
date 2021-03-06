import React,  {Fragment} from 'react'
 
import "./styles/FormMessagePage.css"

import ContainerRoot from "../components/ContainerRoot"
import FormMessageV2 from "../components/FormMessageV2"

class FormMessagePage extends React.Component {

    state = {
        form: {}
    }

    constructor(props){
        super(props)
        this.notifyMessage = this.notifyMessage.bind(this)
        this.addChildren = this.addChildren.bind(this)
        this.listComponentsChildren = []
    }

    componentDidMount(){

    }
    
    render(){
        let title = <></>;
        let titleMessage = <></>;
        if(this.state.form.title !== undefined){
            title = <b>Texto del ultimo hijo que escribio: </b>
            titleMessage = this.state.form.title
        }

        return (
            <Fragment>
                <ContainerRoot>
                    <h1> {title} {titleMessage} </h1>
                    <hr></hr>
                    {[//Array de elementos que reconoce jsx
                        <FormMessageV2 dataForm={this} key="1"/>
                    ]}
                </ContainerRoot>
            </Fragment>
        );
    }

    componentDidUpdate(prevProps, prevState){
        console.log({prevProps:prevProps, prevState:prevState})    
        console.log({props:this.props, state:this.state})
        this.timeoutId = setTimeout(()=>{
            console.log("async")
        },4000)
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutId)
    }

    addChildren(i){
        this.listComponentsChildren.push(i)
    }

    notifyMessage(message, itObj){
        for (let index = 0; index < this.listComponentsChildren.length; index++) {
            if(this.listComponentsChildren[index].myMessageParent.current !== null){
                this.listComponentsChildren[index].myMessageParent.current.innerHTML = "El ultimo hermano escribio dijo: "+message
            }
        }
        itObj.myMessageParent.current.innerHTML = message
    }
}

export default FormMessagePage;