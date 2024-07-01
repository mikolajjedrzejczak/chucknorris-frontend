import './Signin.scss';
import Logo from '../../components/Icons/Logo';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormEvent, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/AuthContext';
import axios from 'axios';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(!email || !password);
  const { setUser } = useAuth();

  const inputs = { email, password };

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:3000/auth/signin', inputs);

      if (res.data.status === parseInt('401')) {
        console.log(res.data.response);
        return;
      } else {
        setTimeout(() => {
          setUser(res.data.user);
          navigate('/');
        }, 250);
      }
    } catch (err: any) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    if (email.length == 0 || password.length == 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [email, password]);

  return (
    <div className="signin">
      <div className="container">
        <Logo className="logo" />
        <form onSubmit={handleSignIn} className="form">
          <h1 className="title">Explore 'Chuck Jokes' with us!</h1>
          <TextField
            error={isDisabled}
            className="text-input"
            type="email"
            label="E-mail"
            placeholder="Type your email"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            error={isDisabled}
            className="text-input"
            type="password"
            label="Password"
            placeholder="Type your password"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            disabled={isDisabled}
            className="button"
            variant="contained"
          >
            LOG IN
          </Button>
          <p>
            Don't have an account?{' '}
            <span>
              <Link to="/signup">Sign up here</Link>
            </span>
          </p>
        </form>
        <p className="quote">
          “Chuck Norris can login without signing up, on any website.”
        </p>
      </div>
    </div>
  );
};

export default Signin;
