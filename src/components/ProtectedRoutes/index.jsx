import { useContext } from "react";
import { UserAuthContext } from "../../providers/UserAuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const {userData} = useContext(UserAuthContext);

    return userData ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoutes;