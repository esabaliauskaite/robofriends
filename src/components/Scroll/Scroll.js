import React from "react";
import "./Scroll.scss"

const Scroll = (props) => {
    return (
        <div class="scroll">
            {props.children}
        </div>
    );
}

export default Scroll;