import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactElement;
  }
  
  export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const user = true;
  
    if (!user) {
      return <Navigate to="/signin" replace={true} />;
    }
  
    return children;
  };