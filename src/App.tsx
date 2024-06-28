import './App.scss';
import Signin from './pages/Signin/Signin';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { ProtectedRoute } from './utils/utils';
import RandomJoke from './pages/RandomJoke/RandomJoke';
import AddJoke from './pages/AddJoke/AddJoke';
import MyJokes from './pages/MyJokes/MyJokes';
import Signup from './pages/Signup/Signup';
import Layout from './Layout/Layout';

const App = () => {
  const user = true;
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: '/', element: <RandomJoke /> },
        { path: '/add-joke', element: <AddJoke /> },
        { path: '/my-jokes', element: <MyJokes /> },
      ],
    },
    {
      path: '/signin',
      element: user ? <Navigate to={'/'} replace /> : <Signin />,
    },
    {
      path: '/signup',
      element: user ? <Navigate to={'/'} replace /> : <Signup />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
