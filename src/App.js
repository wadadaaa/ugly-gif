import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import fetchGifs from "./services/giphy";
import UglyInput from "./components/UglyInput";

function App() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("cat");

  useEffect(() => {
    const fetchAndSetGifs = async () => {
      try {
        const fetchedGifs = await fetchGifs(searchTerm);
        setGifs(fetchedGifs);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchAndSetGifs();
  }, [searchTerm]);

  return (
    <>
      <Header />
      <div className="container">
        <UglyInput onSubmit={(value) => setSearchTerm(value)} />
        <div className="flex-container">
          {gifs.map((gif) => (
            <div key={gif.id} className="flex-item">
              <h3>{gif.title}</h3>
              <img src={gif.images.fixed_height.url} alt={gif.title} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
