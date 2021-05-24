import React,  {Fragment} from 'react'
 
import "./styles/Index.css"
import ContainerRoot from "./../components/ContainerRoot"

class Index extends React.Component {
    render(){
        return (
            <Fragment>
                <ContainerRoot>
                    Hola mundo
                </ContainerRoot>
            </Fragment>
        );
    }
}

export default Index;