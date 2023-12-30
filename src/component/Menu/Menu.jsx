import React from "react";
import Botonera from "../Botonera/Botonera";

const Menu = (props) => {
    return (
        <div>
            {props.options.map((nombresBtn) => {
                return <Botonera option={nombresBtn.nombre} />                
            })}
        </div>
    );
};

export default Menu;