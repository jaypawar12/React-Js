import { useEffect, useState } from "react";
import HeroBanner from "../Components/Banner";
import PixabayService from "../Services/Pixabay.Service";
import type { Wallpaper } from "../Types/Pixabay.Type";
import ImageModal from "../Components/ImageModel";

export default function Home() {
    const [images, setImages] = useState<Wallpaper[]>([]);
    const [loading, setLoading] = useState(false);

    const [sortBy, setSortBy] = useState("popular");
    const [category, setCategory] = useState("photos");

    // MODAL STATE
    const [selectedImage, setSelectedImage] = useState<Wallpaper | null>(null);

    const getImages = (query: string = "nature", type: string = category) => {
        setLoading(true);

        const mappedType =
            type === "illustration" ? "illustration" :
                type === "vector" ? "vector" :
                    type === "film" ? "film" :
                        "photo";

        PixabayService.fetchWallpapers(query, mappedType)
            .then((res) => {
                let data = [...res.data.hits];

                switch (sortBy) {
                    case "latest":
                        data.sort((a, b) => b.id - a.id);
                        break;
                    case "downloads":
                        data.sort((a, b) => b.downloads - a.downloads);
                        break;
                    case "likes":
                        data.sort((a, b) => b.likes - a.likes);
                        break;
                    default:
                        data.sort((a, b) => b.views - a.views);
                }

                setImages(data);
            })
            .finally(() => setLoading(false));
    };


    useEffect(() => {
        getImages();
    }, [sortBy]);

    const handleSearch = (query: string, newCategory: string) => {
        setCategory(newCategory);
        getImages(query, newCategory);
    };


    return (
        <>
            <HeroBanner onSearch={handleSearch} />

            {/* SORTING + CATEGORY */}
            <div className="container mx-auto px-4 mt-8 flex justify-between items-center">
                <h2 className="text-xl font-bold">
                    Results ({category.toUpperCase()})
                </h2>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full max-w-xs px-4 py-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 
                   rounded-xl shadow-sm hover:border-blue-400 hover:shadow-md focus:outline-none 
                   focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all duration-200"
                >
                    <option value="popular">Most Popular</option>
                    <option value="latest">Latest</option>
                    <option value="downloads">Most Downloads</option>
                    <option value="likes">Most Likes</option>
                </select>
            </div>

            {/* IMAGE GRID */}
            <div className="container mx-auto px-4 py-10">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((img) => (
                            <div
                                key={img.id}
                                className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img.webformatURL}
                                    className="w-full h-56 object-cover hover:scale-110 transition-all"
                                    alt={img.tags}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* MODAL */}
            {selectedImage && (
                <ImageModal
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </>
    );
}
