import axios from 'axios';

useEffect(() => {
  const fetchData = async () => {
    const result = await axios.get('http://localhost:5000/api/users');
    console.log(result.data);
  };
  fetchData();
}, []);
