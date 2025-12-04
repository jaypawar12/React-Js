import { BiSearch, BiImage, BiVideo, BiMusic, BiCube } from "react-icons/bi";
import { FaVectorSquare } from "react-icons/fa";
import { MdGif } from "react-icons/md";
import { useState, useEffect } from 'react';
import Header from "./Header";

export default function HeroBanner() {
    const [activeCategory, setActiveCategory] = useState('photos');
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    const backgroundImages = [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    ];

    const categories = [
        { id: 'photos', name: 'Photos', icon: <BiImage className="mr-2" /> },
        { id: 'illustrations', name: 'Illustrations', icon: <BiImage className="mr-2" /> },
        { id: 'vectors', name: 'Vectors', icon: <FaVectorSquare className="mr-2" /> },
        { id: 'videos', name: 'Videos', icon: <BiVideo className="mr-2" /> },
        { id: 'music', name: 'Music', icon: <BiMusic className="mr-2" /> },
        { id: 'sound-effects', name: 'Sound Effects', icon: <BiMusic className="mr-2" /> },
        { id: '3d-models', name: '3D Models', icon: <BiCube className="mr-2" /> },
        { id: 'gifs', name: 'GIFs', icon: <MdGif className="mr-2" /> },
    ];

    const trendingSearches = [
        "wallpaper", "flowers", "background", "nature", "sky", "cat", "dog",
        "office", "camera", "festive", "forest", "sunset", "car", "phone"
    ];

    // Auto change background every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    return (
        <div className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
            <Header />
            {/* Multiple Background Images with Fade Effect */}
            <div className="absolute inset-0 z-0">
                {backgroundImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ease-linear ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-green-500/20"></div>
                        <img
                            src={img}
                            alt={`Background ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
                {/* Main Heading */}
                <div className="text-center mb-8 animate-fade-in-up">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-2xl">
                        Stunning royalty-free images & royalty-free stock
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
                        Over 4 million+ high quality stock images, videos and music shared by our talented community.
                    </p>
                </div>

                {/* Categories Navigation */}
                <div className="mb-10 animate-fade-in-up">
                    <div className="flex items-center justify-center flex-wrap gap-2 mb-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-xl border-2 border-white/30'
                                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
                                    }`}
                            >
                                {category.icon}
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Search */}
                <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
                    <div className="relative bg-white/10 backdrop-blur-md rounded-full shadow-2xl p-1 border border-white/20">
                        <div className="flex items-center">
                            <div className="flex-1">
                                <div className="flex items-center px-6">
                                    <BiSearch className="text-white text-xl mr-3" />
                                    <input
                                        type="text"
                                        placeholder="Search for free images, videos, music & more"
                                        className="w-full py-2 text-white placeholder-white/70 bg-transparent outline-none text-lg"
                                    />
                                </div>
                            </div>
                            <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Trending Searches */}
                    <div className="mt-6 text-center">
                        <p className="text-white/90 text-sm mb-2 drop-shadow">Trending searches:</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {trendingSearches.map((search, index) => (
                                <a
                                    key={index}
                                    href={`/search/${search}`}
                                    className="text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-md text-sm transition-all duration-300 hover:scale-105"
                                >
                                    {search}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background Image Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-8">
                    {backgroundImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentBgIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentBgIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/80'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}