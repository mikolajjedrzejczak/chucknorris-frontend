import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './AddJoke.scss';

const AddJoke = () => {
  const [joke, setJoke] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJoke(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Joke submitted:', joke);
    // Add your submit logic here
  };
  return (
    <div className="add-joke">
      <div className="container">
        <h1 className="title">Add joke</h1>
        <form className="form" noValidate autoComplete="off">
          <TextField
            id="joke-input"
            className="joke-input"
            label="Joke"
            variant="outlined"
            defaultValue="No statement can catch the ChuckNorrisException."
            size="700px"
            InputLabelProps={{
              shrink: true,
            }}
            value={joke}
            onChange={handleInputChange}
            margin="normal"
          />
          <Button variant="contained" className="button" onClick={handleSubmit}>
            ADD JOKE
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddJoke;
