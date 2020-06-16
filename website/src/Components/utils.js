import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const isLogin = () => {
    
    if(localStorage.getItem("sessionApp") == "true"){
        return true;
    }

    return false;
}
