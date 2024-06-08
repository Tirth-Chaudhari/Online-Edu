import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   
import { jwtDecode } from "jwt-decode";

const GlobalContext=React.createContext();


const BASE_URL = "http://localhost:8000/api/";

export const GlobalProvider=({children})=>
{

    const addUser=async(user)=>
    {
            try{
                await axios.post(`${BASE_URL}add-user`,user).then((response)=>
                {
                    localStorage.setItem('name',response.data.message.name)
                    localStorage.setItem('userid',response.data.message._id)
                })
            }
            catch(err){

            }
    }
    const getUser=async(user)=>
    {
       
        try{
            await axios.post(`${BASE_URL}get-user`,user).then((response)=>
            {
                localStorage.setItem('name',response.data.message.name)
                localStorage.setItem('userid',response.data.message._id)    
            })
        }
        catch(err){

        }    
    }

    return(
        <GlobalContext.Provider value={{addUser,getUser}}>
            {children}
        </GlobalContext.Provider>
    )
}   


export const useGlobalContext=()=>
{
    return useContext(GlobalContext);
}