import React,  {Fragment} from 'react'
 
import "./styles/ContainerRoot.css"

class ContainerRoot extends React.Component {
    render(){
        const message = "Bienvenido al componente  ContainerRoot";
        return (
            <Fragment>
                <h1>Primer componente en react : {message}</h1>
            </Fragment>
        );
    }
}

export default ContainerRoot;