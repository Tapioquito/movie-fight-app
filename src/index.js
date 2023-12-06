const apiKey = "269dfe5c";
const fetchData = async (searchTerm) => {
  const response = await axios.get(`http://www.omdbapi.com/`, {
    params: {
      apikey: apiKey,
      s: searchTerm,
    },
  });
  console.log(response.data);
};

const input = document.getElementsByTagName("input");

input.addEventListener("input", (e) => {
  fetchData(e.target.value);
});
