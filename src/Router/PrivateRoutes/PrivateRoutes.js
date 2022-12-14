import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/Shared/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <button className="btn loading m-10">loading</button>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRoutes;