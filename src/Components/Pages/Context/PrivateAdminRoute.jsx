import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "./AuthProvider";



const PrivateAdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);

    if (loading) {
        return <span className="flex place-content-center justify-center justify-items-center items-center loading loading-spinner loading-lg"></span>
        
    }


    if (user && user.email === "admin@gmail.com") {
        return children;
    }

    return <Navigate to='/' replace></Navigate>


};

export default PrivateAdminRoute;

PrivateAdminRoute.propTypes = {
    children: PropTypes.node
}