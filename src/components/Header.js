import React from "react"

import ItemMenu from "./ItemMenu"
import './styles/Header.css'

function Header(){
    return (
        <nav className="Header__content Header__border">
            <ul className="Header__none_point_in_list">
                <ItemMenu iconTheme={"teal-with-white"} text={"Home"} href={"/"} isRouteLink={true}/>
                <ItemMenu iconTheme={"teal-with-white"} text={"Formulario"} href={"/form"} isRouteLink={true}/>
                <ItemMenu iconTheme={"teal-with-white"} text={"Not found"} href={"/url_prueba"} isRouteLink={true}/>
                <ItemMenu iconTheme={"slateblue-with-white"} text={"Ir a Twitter"} href={"https://www.twitter.com"}/>
                <ItemMenu iconTheme={"green-with-white"} text={"Ir a Google"} href={"https://www.google.com"}/>
                <ItemMenu iconTheme={"brown-with-white"} text={"Ir a Facebook"} href={"https://facabook.com"}/>
            </ul>
        </nav>
    );
}


export default Header; 