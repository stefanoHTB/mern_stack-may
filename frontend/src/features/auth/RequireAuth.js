import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken, selectCurrentUser, selectCurrentRole} from "./authSlice"

const RequireAuth = ({ allowedRoles }) => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()
    const user = useSelector(selectCurrentUser)
    const roles = useSelector(selectCurrentRole)

return (
    token && roles?.find(role => allowedRoles?.includes(role))
        ? <Outlet />
        : user
            ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/login" state={{ from: location }} replace />
);
}


export default RequireAuth