import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import './RandomJoke.scss';
import { useState } from 'react';

const RandomJoke = () => {
  const [category, setCategory] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };
  return (
    <div className="randomjoke">
      <div className="banner">
        <img src="./chucknorris.png" alt="" />
      </div>
      <div className="container">
        <h1 className="title">Get your random joke</h1>
        <p className="quote">
          “If Michael were to travel to an alternate dimension in which there
          was another Michael and they both fight, they would both win”
        </p>
        <div className="draw-joke">
          <div className="inputs">
            <TextField
              className="text-input"
              type="text"
              label="impersonate"
              placeholder="Impersatonate Chuck Norris"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl className="category-select" variant="outlined">
              <InputLabel id="category-select-label">Categories</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                value={category}
                onChange={handleChange}
                label="Categories"
              >
                <MenuItem value={10}>Explicit</MenuItem>
                <MenuItem value={20}>Travel</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="buttons">
            <Button className="draw-btn" variant="contained">
              DRAW A RANDOM CHUCK NORRIS JOKE
            </Button>
            <Button className="save-btn" variant="contained">
              SAVE THIS JOKE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomJoke;
