import { Navigate, Outlet } from "react-router-dom";

function PrivateOutlet() {
    const auth = true;
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }

export default PrivateOutlet
export const Login = () => <div>login</div>;









