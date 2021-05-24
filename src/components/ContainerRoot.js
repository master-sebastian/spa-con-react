import React,  {Fragment} from 'react'
 
import "./styles/ContainerRoot.css"
import Header from "./Header"

class ContainerRoot extends React.Component {
    render(){
        return (
            <Fragment>
                <main className="ContainerRoot__content">
                    <Header />
                    { this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default ContainerRoot;