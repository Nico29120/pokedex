import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth.js";

const Authform = ()=>{
    const { auth, setUserInfo} = useAuth();
    const schema = yup.object({
        name: yup.string().required(),
        lastname: yup.string().required()
    }).required();
    const navigate = useNavigate();
    const onSubmit = (data)=>{
    
    setUserInfo({
        name: data.name,
        lastname: data.lastname
   });
   navigate('/')
    };

    const {register, handleSubmit, formState:{errors}}= useForm({
        defaultValue: {
            name: 'default',
            lastname: 'default',
        },
        resolver: yupResolver(schema)
    })

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Auth Form</h2>
                {/* <p>{errors.name?.message}</p> */}
                <input {...register("name")} placeholder="Prénom"/>
                
                {/* <p>{errors.lastname?.message}</p> */}
                <input {...register("lastname")} placeholder="Nom"/>

                <input type="submit"/>
            </form>
        </div>
    )
}

export default Authform