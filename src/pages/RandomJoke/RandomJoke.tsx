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
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/Auth/AuthContext';

const RandomJoke = () => {
  const { user } = useAuth();
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState<string>('None');
  const [joke, setJoke] = useState<string>('');
  const [drawJoke, setDrawJoke] = useState<boolean>(true);
  const [impersatonate, setImpersatonate] = useState<string>('');

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(
        'https://api.chucknorris.io/jokes/categories'
      );
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const getRandomJoke = async () => {
      try {
        let res;
        if (category !== 'None') {
          res = await axios.get(
            `https://api.chucknorris.io/jokes/random?category=${category}`
          );
        } else {
          res = await axios.get('https://api.chucknorris.io/jokes/random');
        }

        let fetchedJoke = res.data.value;
        if (impersatonate !== '') {
          const regex = new RegExp('Chuck Norris', 'g');
          fetchedJoke = fetchedJoke.replace(regex, impersatonate);
        }
        setJoke(fetchedJoke);
      } catch (error) {
        console.error('Error fetching the joke:', error);
      }
    };

    getRandomJoke();
  }, [drawJoke]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  const handleDrawJoke = () => {
    setDrawJoke((prevState) => !prevState);
  };

  const handleSaveJoke = async () => {
    try {
      const res = await axios.post('https://chucknorris-backend.onrender.com/joke/save', {
        joke: joke,
        email: user?.email,
      });

      if (res.data.newJoke.status === parseInt('409')) {
        console.log(res.data.newJoke.response);
      }
    } catch (err: any) {
      console.log(err.response);
    }
  };

  return (
    <div className="randomjoke">
      <div className="banner">
        <img src="./chucknorris.png" alt="" />
      </div>
      <div className="container">
        <h1 className="title">Get your random joke</h1>
        <p className="quote">{joke}</p>
        <div className="draw-joke">
          <div className="inputs">
            <TextField
              className="text-input"
              type="text"
              label="impersonate"
              placeholder={`Impersatonate ${
                impersatonate !== '' ? impersatonate : 'chuck norris'
              }`}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setImpersatonate(e.target.value)}
            />
            <FormControl className="categories-select" variant="outlined">
              <InputLabel id="categories-select-label">Categories</InputLabel>
              <Select
                labelId="categories-select-label"
                id="categories-select"
                value={category}
                onChange={handleChange}
                label="categories"
              >
                <MenuItem value={'None'}>None</MenuItem>
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="buttons">
            <Button
              className="draw-btn"
              variant="contained"
              onClick={handleDrawJoke}
            >
              DRAW A RANDOM{' '}
              {impersatonate !== '' ? impersatonate : 'CHUCK NORRIS'} JOKE
            </Button>
            <Button
              className="save-btn"
              variant="contained"
              onClick={handleSaveJoke}
            >
              SAVE THIS JOKE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomJoke;
