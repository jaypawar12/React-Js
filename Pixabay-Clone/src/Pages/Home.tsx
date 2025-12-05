import { useEffect, useState } from "react";
import HeroBanner from "../Components/Banner";
import PixabayService from "../Services/Pixabay.Service";
import type { Wallpaper } from "../Types/Pixabay.Type";

export default function Home() {
    const [images, setImages] = useState<Wallpaper>([]);

    useEffect(() => {
        PixabayService.fetchAllImages()
            .then(res => {
                setImages(res.data.hits);
            })
            .catch(err => {
                console.error("Error fetching images:", err);
            });
    }, []);

    return (
        <>
            <HeroBanner />

            {/* Images Section */}
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-6">Latest Images</h2>

                {images.length === 0 ? (
                    <p>Loading images...</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((img) => (
                            <div key={img} className="rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={img.webformatURL}
                                    alt={img}
                                    className="w-full h-48 object-cover hover:scale-105 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
