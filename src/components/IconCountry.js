import React from 'react'

import "./styles/IconCountry.css"

export default function IconCountry({iconTheme}){
    console.log(iconTheme)
    if(iconTheme === undefined){
        iconTheme = ""
    }
    // ` Alt + 96
    const iconThemeText = `IconCountry__background-${iconTheme}`
    const borderRadius = "IconCountry__border_radius"
    return (
        <>
            <div className={[iconThemeText, borderRadius].join(" ")}></div>
        </>
    );
}