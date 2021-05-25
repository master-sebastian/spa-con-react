import React,  {Fragment} from 'react'
 
import "./styles/NotFound.css"
import ContainerRoot from "./../components/ContainerRoot"

class NotFound extends React.Component {
    render(){
        return (
            <Fragment>
                <ContainerRoot>
                    <div className={"NotFound__text_center"}>
                        <h1>Pagina no encontrada</h1>
                    </div>
                </ContainerRoot>
            </Fragment>
        );
    }
}

export default NotFound;