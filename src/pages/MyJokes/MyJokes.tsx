import { useEffect, useState } from 'react';
import './MyJokes.scss';
import axios from 'axios';
import { useAuth } from '../../context/Auth/AuthContext';
import { RiDeleteBack2Line } from 'react-icons/ri';

const MyJokes = () => {
  const { user } = useAuth();
  const [myJokes, setMyJokes] = useState<any>([]);

  useEffect(() => {
    const getJokes = async () => {
      try {
        const res = await axios.get('https://chucknorris-backend.onrender.com/joke/my-jokes');
        setMyJokes(res.data);
      } catch (err: any) {
        console.log(err.response);
      }
    };
    getJokes();
  }, []);

  const handleDeleteJoke = async (joke: string) => {
    try {
      const newJokes = myJokes.filter((j: string) => j !== joke);
      setMyJokes(newJokes);
      await axios.post('https://chucknorris-backend.onrender.com/joke/delete', joke);
    } catch (err: any) {
      console.log(err.response);
    }
  };

  const userJokes = myJokes.filter((jokes: any) => jokes.email === user?.email);

  return (
    <div className="my-jokes">
      <div className="container">
        <h1 className="title">My jokes list</h1>
        <div className="joke-list">
          {userJokes.map((joke: any, index: any) => (
            <div className="joke" key={index}>
              <span>{index + 1}.</span>
              <p>{joke.joke.substring(0, 80)}...</p>
              <span
                className="delete-btn"
                onClick={() => handleDeleteJoke(joke)}
              >
                <RiDeleteBack2Line />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyJokes;
