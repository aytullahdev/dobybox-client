import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/firebase.init'
import Progress from '../Header/Progress';

const Requerdauth = ({children}) => {
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <Progress/>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace/>
    }
    
    return children;
};

export default Requerdauth;