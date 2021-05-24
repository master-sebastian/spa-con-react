import React from "react"

import ItemMenu from "./ItemMenu"
import './styles/Header.css'

function Header(){
    return (
        <nav className="Header__content Header__border">
            <ul className="Header__none_point_in_list">
                <ItemMenu iconTheme={"green-with-white"} text={"Ir a Google"} href={"https://www.google.com"}/>
                <ItemMenu iconTheme={"brown-with-white"} text={"Ir a Facebook"} href={"https://facabook.com"}/>
                <ItemMenu iconTheme={"slateblue-with-white"} text={"Ir a Twitter"} href={"https://www.twitter.com"}/>
            </ul>
        </nav>
    );
}


export default Header; 