const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "cb2f6f1914abfb1ab3c938fc7ca72859",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
