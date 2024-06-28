import './Signin.scss';
import Logo from '../../components/Icons/Logo';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [isDisable, setIsDisable] = useState(false);
  return (
    <div className="signin">
      <div className="container">
        <Logo className="logo" />
        <div className="form">
          <h1 className="title">Explore 'Chuck Jokes' with us!</h1>
          <TextField
            error={isDisable}
            className="text-input"
            type="email"
            label="E-mail"
            placeholder="Type your email"
            InputLabelProps={{
              shrink: true,
            }}
            
          />
          <TextField
            error={isDisable}
            className="text-input"
            type="password"
            label="Password"
            placeholder="Type your password"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button disabled={isDisable} className="button" variant="contained">
            LOG IN
          </Button>
          <p>
            Don't have an account? <span><Link to="/signup">Sign up here</Link></span>
          </p>
        </div>

        <p className="quote">
          “Chuck Norris can login without signing up, on any website.”
        </p>
      </div>
    </div>
  );
};

export default Signin;
