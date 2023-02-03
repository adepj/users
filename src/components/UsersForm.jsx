
import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, userselected}) => {

const {handleSubmit, register, reset} = useForm();

useEffect(() => {
    if(userselected){        
           reset(userselected)
               }
}, [userselected] )

const submit = (data) => {
    console.log(data);
    axios.post('https://users-crud.academlo.tech/users/', data)
    .then(() =>  getUsers()) 
}


    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1> Users Form </h1>
            <div className = "input-container">
                <label htmlFor= "first_name">Name</label>
                <input type ="text" id= "first_name"  {...register("first_name")}/>
            </div>
            <div className = "input-container">
                <label htmlFor="lastname">Last_Name</label>
                <input type ="text" id="lastname" {...register("last_name")} />
            </div>
            <div className="input-container">
                <label htmlFor="email">E-mail</label>
                <input type ="email" id="email" {...register("email")}/>
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type ="password" id="password" {...register("password")}/>
            </div>
            <div className="input-container">
                <label htmlFor="birthday">Birthday</label>
                <input type ="date" id="birthday" {...register("birthday")} />
            </div>
            <button>Uploud</button>
            <button>Clear</button>
        </form>
    )
}

export default UsersForm