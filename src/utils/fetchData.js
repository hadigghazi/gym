export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2f76047b0amsh57b07d2c350f901p148e32jsn6252f4f33789",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2f76047b0amsh57b07d2c350f901p148e32jsn6252f4f33789",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
