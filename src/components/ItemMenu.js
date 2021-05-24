import React from "react"

import './styles/ItemMenu.css'
import IconCountry from './IconCountry'

class ItemMenu extends React.Component {
    render(){
        return (
            <>
                <li className={"ItemMenu__content"}>
                    <a href={this.props.href}>
                        <IconCountry iconTheme={this.props.iconTheme} />
                        {this.props.text}
                    </a>
                </li>
            </>
        );
    }
}

export default ItemMenu