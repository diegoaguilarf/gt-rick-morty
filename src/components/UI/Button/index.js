import React from "react";
import "./button.scss";

const Button = ({ className, background, color, title, children, ...props }) => {
    return <button className={`button ${className}`} style={{ backgroundColor: background, color }} {...props}>{ title || children }</button>;
};

export default Button;
