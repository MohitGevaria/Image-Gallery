import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const PrivateRoute = ({state}) => {
    const { currentUser } = useAuth()

    if(state === "login" || state==="forgot-password")
    {
        return currentUser ? <Navigate to="/upload" /> : <Outlet/>;
    }
    else{
        return currentUser ? <Outlet/> : <Navigate to="/login" />;
    }
    
}

 
export default PrivateRoute;