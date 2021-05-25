import React,  {Fragment} from 'react'
 
import "./styles/FormMessagePage.css"

import ContainerRoot from "../components/ContainerRoot"
import FormMessageV2 from "../components/FormMessageV2"

class FormMessagePage extends React.Component {
    render(){
        return (
            <Fragment>
                <ContainerRoot>
                    <FormMessageV2/>
                    <FormMessageV2/>
                    <FormMessageV2/>
                </ContainerRoot>
            </Fragment>
        );
    }
}

export default FormMessagePage;