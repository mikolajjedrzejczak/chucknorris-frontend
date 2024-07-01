import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './AddJoke.scss';

const AddJoke = () => {
  const [joke, setJoke] = useState('');

  const handleAddJoke = async () => {};

  return (
    <div className="add-joke">
      <div className="container">
        <h1 className="title">Add joke</h1>
        <form onSubmit={handleAddJoke} className="form">
          <TextField
            label="Joke"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            defaultValue="No statement can catch the ChuckNorrisException."
            sx={{ maxWidth: 433, margin: 'auto', mt: 2 }}
            onChange={(e) => setJoke(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            className="button"
          >
            ADD JOKE
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddJoke;
