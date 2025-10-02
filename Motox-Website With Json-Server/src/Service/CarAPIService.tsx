class CarAPIService {
    carURL: string = "http://localhost:8000/cars";
    async getAllCars() {
        const response = await fetch(this.carURL);
        const data = await response.json();
        console.log(data);

        return data;
    }
}

export interface CarType {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
}

export const carAPIService = new CarAPIService();