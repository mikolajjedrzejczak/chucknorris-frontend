import './Signup.scss';
import Logo from '../../components/Icons/Logo';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(false);


  const inputs = { email, password };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post('http://127.0.0.1:3000/auth/signup', inputs);
      navigate('/signin?success=true');
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
    <div className="signup">
      <div className="container">
        <Logo className="logo" />
        <form onSubmit={handleSignUp} className="form">
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
            CREATE ACCOUNT
          </Button>
          <p>
            Already have an account?{' '}
            <span>
              <Link to="/signin">Log in here</Link>
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

export default Signup;
