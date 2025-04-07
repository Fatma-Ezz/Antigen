import axios from 'axios';

export const fetchExercises = async () => {
  const response = await axios.get('https://wger.de/api/v2/exercise/');
  return response.data.results;
};
