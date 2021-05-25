import React from "react"

import './styles/ItemMenu.css'
import IconCountry from './IconCountry'
import { Link } from "react-router-dom"

class ItemMenu extends React.Component {
    render(){
        let link
        if(this.props.isRouteLink && this.props.isRouteLink !== undefined){
            link = <Link to={this.props.href}>
                <IconCountry iconTheme={this.props.iconTheme} />
                {this.props.text}
            </Link>
        }else{
            link = <a href={this.props.href}>
                <IconCountry iconTheme={this.props.iconTheme} />
                {this.props.text}
            </a>
        }
        return (
            <>
                <li className={"ItemMenu__content"}>
                   {link}
                </li>
            </>
        );
    }
}

export default ItemMenu