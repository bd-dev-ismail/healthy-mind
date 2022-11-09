import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading){
        return (
          <div className="w-16 container mx-auto flex justify-center items-center h-16 border-4 border-dashed rounded-full animate-spin border-secondary"></div>
        );
    }
      if (user?.email && user?.uid) {
        return children;
      }
    return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;