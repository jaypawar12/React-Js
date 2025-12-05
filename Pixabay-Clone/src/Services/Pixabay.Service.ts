import axios from "axios";

class PixabayService {
    baseUrl = "https://pixabay.com/api/";
    myApiKey = "53505814-9f7527f654d318b1e56d1cf9a";

    fetchAllImages(query = "nature") {
        return axios.get(`${this.baseUrl}?key=${this.myApiKey}&q=${query}&image_type=photo`);
    }
}

export default new PixabayService();