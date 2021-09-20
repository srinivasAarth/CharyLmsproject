import React from "react";

const Button = ({className,background}) => {
    

    return (
        <button className={className} style={{background:background}}>New</button>
    )

}

export default Button