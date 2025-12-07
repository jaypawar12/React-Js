import { useEffect, useState } from "react";
import HeroBanner from "../Components/Banner";
import PixabayService from "../Services/Pixabay.Service";
import type { Wallpaper } from "../Types/Pixabay.Type";
import ImageModal from "../Components/ImageModel";

export default function Home() {
    const [images, setImages] = useState<Wallpaper[]>([]);
    const [loading, setLoading] = useState(false);

    const [sortBy, setSortBy] = useState("popular");
    const [category, setCategory] = useState("photo");

    const [selectedImage, setSelectedImage] = useState<Wallpaper | null>(null);

    const getImages = (query: string = "nature", type: string = category) => {
        setLoading(true);

        const mappedType =
            type === "photo" ? "photo" :
                type === "illustration" ? "illustration" :
                    type === "vector/svg" ? "vector" :
                        type === "video" ? "video" :
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

            {/* Sorting Control */}
            <div className="container mx-auto px-4 mt-8 flex justify-between items-center">
                <h2 className="text-xl font-bold">
                    Results ({category.toUpperCase()})
                </h2>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full max-w-xs px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm 
                    hover:border-blue-400 hover:shadow-md focus:ring-2 focus:ring-blue-500 transition-all"
                >
                    <option value="popular">Most Popular</option>
                    <option value="latest">Latest</option>
                    <option value="downloads">Most Downloads</option>
                    <option value="likes">Most Likes</option>
                </select>
            </div>

            <div className="container mx-auto px-4 py-10">

                {/* LOADING UI */}
                {loading && <p className="text-center text-gray-500 text-lg"><div className="flex justify-center items-center gap-2 py-20">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
                </p>}

                {/* NO IMAGES FOUND */}
                {!loading && images.length === 0 && (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-gray-700">No Images Found</h2>
                        <p className="text-gray-500 mt-2">
                            Try searching with another keyword or category.
                        </p>
                    </div>
                )}

                {/* IMAGE GRID */}
                {!loading && images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((img) => (
                            <div
                                key={img.id}
                                className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img.webformatURL}
                                    alt={img.tags}
                                    className="w-full h-56 object-cover hover:scale-110 transition-all"
                                />
                            </div>
                        ))}
                    </div>
                )}

            </div>


            {/* Modal */}
            {selectedImage && (
                <ImageModal
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </>
    );
}
