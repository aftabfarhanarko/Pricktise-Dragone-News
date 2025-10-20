import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PriverRouter = ({children}) => {
    const {user} = useContext(AuthContext);
    const locations = useLocation();
    if(user){
        return(children)
    }
    return <Navigate state={locations.pathname} to="/formet/login"></Navigate>
};

export default PriverRouter;