import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [quotes, setQuotes] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      const res = await axios.get("https://strapi-rygs.onrender.com/api/quotes")
      setQuotes(res.data.data)
    }

    fetchData()

  }, []);

  return (
    <div>
      {quotes?.map((item, index) => (
        
        <div>
          {item.attributes.Quote}
          <br />
          - {item.attributes.Author}
          <br />
        </div>

      ))}


    </div>
  );
}
export default App