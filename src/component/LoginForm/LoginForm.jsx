import React from "react";
import { useState } from "react";
import style from "./LoginForm.module.css"

const validateUser = (form, setErrorsUser, errorsUser) =>{
    if(!form.username) setErrorsUser({...errorsUser, username:"Ingrese los datos"});
    else if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(form.username)) setErrorsUser({...errorsUser, username: ("")});
    else setErrorsUser({...errorsUser, username: "Datos inválidos"});
};

const validatePass = (form, setErrorsPass, errorsPass) =>{
    if(!form.password) setErrorsPass({...errorsPass, password:"Ingrese los datos"});
    else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/.test(form.password)) setErrorsPass({...errorsPass, password: ("")}); 
    else setErrorsPass({...errorsPass, password: "Datos inválidos"});

}

const Form = () => {
    
    const [form, setForm] = useState({
        username:"",
        password:"",
    });
    
    const [errorsUser, setErrorsUser] = useState({
        username: (null),
    });
    const [errorsPass, setErrorsPass] = useState({
        password: (null),
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        setForm({...form, [property]: value});
        validateUser({...form, [property]: value}, setErrorsUser, errorsUser);
        validatePass({...form, [property]: value}, setErrorsPass, errorsPass);
        
    };

    const styleErrors = (errors, proper) =>{
        if(errors[proper] === "") return style.inputOk;
        else if(errors[proper] === "Datos inválidos") return style.inputErr;
        else {return style.input};
    };
    const styleErrorsMsg = (errors, proper) =>{
        if(errors[proper] === "") return proper;
        else if(errors[proper] === "Datos inválidos") return style.errorsMsg;
        else {return style.blankMsg};
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Login exitoso');
    };
    return(
        <div className={style.formContainer}>
            <div></div>
            <form 
                onSubmit={handleSubmit} 
                className={style.gridForm}>
                <div>
                    <label className={style.formLbl} htmLform="username">Usuario</label>
                </div>
                <div>
                    <input 
                        className={styleErrors(errorsUser, "username")}
                        type="text" 
                        name="username" 
                        value={form.username} 
                        onChange={handleChange}>
                    </input>
                </div>    
                <div >
                    <p className={styleErrorsMsg(errorsUser, "username")}>{errorsUser.username}</p>
                </div>
                <div>
                    <label className={style.formLbl} htmLform="password">Contraseña</label>
                </div>
                <div>
                    <input 
                        className={styleErrors(errorsPass, "password")} 
                        type="password" 
                        name="password" 
                        value={form.password} 
                        onChange={handleChange}>
                    </input>
                </div>
                <div >
                    <p className={styleErrorsMsg(errorsPass, "password")}>{errorsPass.password}</p>
                </div>
                <div>
                    <button className={style.formBtn} type="submit" name="btnSubmit">Ingresar</button>
                </div>
            </form>
            <div></div>
        </div>
    );
}

export default Form;