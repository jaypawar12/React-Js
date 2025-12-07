import axios from "axios";

class PixabayService {
    private baseUrl = "https://pixabay.com/api/";
    private apiKey = "53505814-9f7527f654d318b1e56d1cf9a";

    fetchWallpapers(query: string, type: string = "photo") {
        return axios.get(
            `${this.baseUrl}?key=${this.apiKey}&q=${query}&image_type=${type}`
        );
    }
}

export default new PixabayService();
