import React from "react";

const Button = (props) => {
    return (
        <button
            className={`bg-blue-rgba text-white py-2 px-6 rounded hover:bg-indigo-400 duration-500 ${
                props.className ? props.className : ""
            }`}
            onClick={props.onClick}
            type={props.type}
        >
            {props.children}
        </button>
    );
};

export default Button;
