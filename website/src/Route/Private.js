import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../Components/utils';
import Navbar from "../Components/Menu";
import Side from "../Components/Sidebar";

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            
            isLogin() ?
            <div className="row login">
               <Navbar />
               <Side />
               <Component {...props} />
            </div>
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;