import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/Auth/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" replace={true} />;
  }

  return children;
};
