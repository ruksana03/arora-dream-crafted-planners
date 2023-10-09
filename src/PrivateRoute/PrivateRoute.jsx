import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    
    const {user} = useAuth();
    if(!user?.email){
        return <Navigate to='/login'></Navigate>
    }
    
    
    return children;
};

export default PrivateRoute;