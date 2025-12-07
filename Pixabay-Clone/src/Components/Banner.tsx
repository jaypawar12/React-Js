import { BiSearch, BiImage, BiVideo, BiMusic, BiCube } from "react-icons/bi";
import { FaVectorSquare } from "react-icons/fa";
import { MdGif } from "react-icons/md";
import { useState, useEffect } from "react";
import Header from "./Header";

interface HeroBannerProps {
    onSearch: (query: string, category: string) => void;
}

export default function HeroBanner({ onSearch }: HeroBannerProps) {
    const [activeCategory, setActiveCategory] = useState("photos");
    const [searchText, setSearchText] = useState("");
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    const categories = [
        { id: "photos", name: "Photos", icon: <BiImage /> },
        { id: "illustration", name: "Illustrations", icon: <BiImage /> },
        { id: "vector/svg", name: "Vectors", icon: <FaVectorSquare /> },
        { id: "video", name: "Videos", icon: <BiVideo /> },
        { id: "music", name: "Music", icon: <BiMusic /> },
        { id: "gifs", name: "GIFs", icon: <MdGif /> }
    ];

    const backgroundImages = [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format",
    ];

    // auto background rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) =>
                prev === backgroundImages.length - 1 ? 0 : prev + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleSearch = () => {
        if (searchText.trim().length === 0) return;
        onSearch(searchText, activeCategory);
    };

    return (
        <div className="relative min-h-[650px] overflow-hidden">
            <Header />

            {/* Background Transition */}
            <div className="absolute inset-0">
                {backgroundImages.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 
                        ${i === currentBgIndex ? "opacity-100" : "opacity-0"}`}
                    />
                ))}
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white pt-28 px-4 container mx-auto">
                <h1 className="text-4xl font-bold drop-shadow-lg">
                    Find Stunning Free Images & Videos
                </h1>

                {/* Category Buttons */}
                <div className="flex justify-center mt-6 flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all 
                            ${activeCategory === cat.id
                                    ? "bg-white text-black"
                                    : "bg-white/20 backdrop-blur-md"
                                }`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.icon} {cat.name}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mt-8 flex bg-white/20 backdrop-blur-md rounded-full p-1">
                    <input
                        className="flex-1 bg-transparent px-6 py-3 outline-none text-white placeholder-white/70"
                        placeholder="Search images..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
