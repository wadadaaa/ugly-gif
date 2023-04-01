const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
const baseUrl = process.env.REACT_APP_GIPHY_BASE_URL;

const fetchGifs = async (searchTerm) => {
  try {
    const response = await fetch(
      `${baseUrl}/search?api_key=${apiKey}&q=${searchTerm}&limit=20`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    throw error;
  }
};

export default fetchGifs;
