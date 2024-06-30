import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactElement,
} from 'react';

interface UserProps {
  email: string;
}

const useAuthContext = () => {
  const [user, setUser] = useState<UserProps | null>(
    JSON.parse(`${localStorage.getItem('user')}`) || null
  );

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  return { user, setUser };
};

type useAuthContextType = ReturnType<typeof useAuthContext>;

const initAuthContext: useAuthContextType = {
  user: null,
  setUser: () => {},
};

export const AuthContext = createContext<useAuthContextType>(initAuthContext);

type ChildrenType = {
  children: ReactElement | undefined;
};

export const AuthContextProvider = ({ children }: ChildrenType) => {
  return (
    <AuthContext.Provider value={useAuthContext()}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): useAuthContextType => {
  const { user, setUser } = useContext(AuthContext);
  return { user, setUser };
};
