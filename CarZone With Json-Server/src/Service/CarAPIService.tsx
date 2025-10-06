class CarAPIService {
  carURL: string = "http://localhost:8000/cars";
  async fetchAllCars() {
    const response = await fetch(this.carURL);
    const data = await response.json();
    console.log(data);

    return data;
  }

  async addNewCar(carData: any) {

    const response = await fetch(this.carURL, {
      method: "POST",
      body: JSON.stringify(carData),
    });
    return response.ok;
  }

  async deleteCar(id: string) {
    const res = await fetch(this.carURL + "/" + id, {
      method: "DELETE"
    });

    return res.ok;
  }


  async fetchCarById(id: string) {
    const res = await fetch(this.carURL + "/" + id);

    const data = await res.json();

    return data;
  }

  async updateCar(id: string, updatedData: any) {
    const res = await fetch(this.carURL + "/" + id, {
      method: "PATCH",
      body: JSON.stringify(updatedData),
    });

    return res.ok;
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