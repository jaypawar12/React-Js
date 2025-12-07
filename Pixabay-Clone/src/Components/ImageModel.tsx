import type { Wallpaper } from "../Types/Pixabay.Type";
import {
    IoClose,
    IoDownloadOutline,
    IoHeartOutline,
    IoHeart,
    IoEyeOutline,
    IoChatbubbleOutline,
    IoShareSocialOutline,
    IoCopyOutline,
    IoCheckmark,
    IoStarOutline,
    IoAddOutline
} from "react-icons/io5";
import { useState, useEffect } from "react";

interface Props {
    image: Wallpaper;
    onClose: () => void;
    isSaved?: boolean;
    onSaveToggle?: () => void;
    onDownload?: () => void;
}

export default function ImageModal({
    image,
    onClose,
    isSaved = false,
    onSaveToggle,
    onDownload
}: Props) {
    const [copied, setCopied] = useState(false);
    const [selectedSize, setSelectedSize] = useState<"small" | "medium" | "large">("large");

    // Format numbers with commas
    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('en-US').format(num);
    };

    // Copy image URL to clipboard
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(image.largeImageURL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    // Handle download
    const handleDownloadClick = () => {
        if (onDownload) {
            onDownload();
        } else {
            const link = document.createElement('a');
            link.href = image.largeImageURL;
            link.download = `pixabay-${image.id}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    // Get image URL based on selected size
    const getImageUrl = () => {
        switch (selectedSize) {
            case 'small': return image.previewURL || image.webformatURL;
            case 'medium': return image.webformatURL;
            case 'large': return image.largeImageURL;
            default: return image.largeImageURL;
        }
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-[9999] p-2 sm:p-4">
            {/* Main Modal Container */}
            <div className="relative bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl max-w-6xl w-full h-[95vh] overflow-hidden shadow-2xl">

                {/* Header with Close Button */}
                <div className="absolute top-4 right-4 z-50">
                    <button
                        onClick={onClose}
                        className="p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white transition-all duration-200 hover:scale-110"
                    >
                        <IoClose size={24} />
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row h-full">
                    {/* Left: Image Section */}
                    <div className="lg:w-2/3 h-1/2 lg:h-full bg-gray-900 relative overflow-hidden">
                        {/* Main Image */}
                        <img
                            src={getImageUrl()}
                            alt={image.tags}
                            className="w-full h-full object-contain transition-opacity duration-300"
                            loading="eager"
                        />

                        {/* Image Stats Overlay */}
                        <div className="absolute bottom-4 left-0 right-0">
                            <div className="flex justify-center gap-4">
                                <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2">
                                    <IoHeartOutline />
                                    <span className="font-medium">{formatNumber(image.likes)}</span>
                                </div>
                                <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2">
                                    <IoDownloadOutline />
                                    <span className="font-medium">{formatNumber(image.downloads)}</span>
                                </div>
                                <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2">
                                    <IoEyeOutline />
                                    <span className="font-medium">{formatNumber(image.views)}</span>
                                </div>
                                <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2">
                                    <IoChatbubbleOutline />
                                    <span className="font-medium">{formatNumber(image.comments)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div className="absolute top-4 left-4 z-10">
                            <div className="flex gap-2 bg-black/50 backdrop-blur-sm rounded-full p-1">
                                {(['small', 'medium', 'large'] as const).map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-3 py-1.5 text-sm rounded-full transition-all ${selectedSize === size
                                            ? 'bg-white text-black font-medium'
                                            : 'text-white hover:bg-white/20'}`}
                                    >
                                        {size.charAt(0).toUpperCase() + size.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Details Section */}
                    <div className="lg:w-1/3 h-1/2 lg:h-full overflow-y-auto bg-white dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
                        {/* Title and Tags */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {image.tags.split(', ')[0]}
                            </h1>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {image.tags.split(', ').map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mb-8">
                            {/* Download Button */}
                            <button
                                onClick={handleDownloadClick}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                            >
                                <IoDownloadOutline size={20} />
                                Download Free
                            </button>

                            {/* Save Button */}
                            <button
                                onClick={onSaveToggle}
                                className="p-3 border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                                title={isSaved ? "Remove from favorites" : "Add to favorites"}
                            >
                                {isSaved ? (
                                    <IoHeart size={24} className="text-red-500" />
                                ) : (
                                    <IoHeartOutline size={24} className="text-gray-600 dark:text-gray-400" />
                                )}
                            </button>

                            {/* Share Button */}
                            <button
                                onClick={handleCopyLink}
                                className="p-3 border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors relative"
                                title="Copy image link"
                            >
                                {copied ? (
                                    <IoCheckmark size={24} className="text-green-500" />
                                ) : (
                                    <IoShareSocialOutline size={24} className="text-gray-600 dark:text-gray-400" />
                                )}
                            </button>
                        </div>

                        {/* Image Information */}
                        <div className="space-y-6">
                            {/* User Info */}
                            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <img
                                    src={image.userImageURL || 'https://cdn.pixabay.com/user/2023/09/25/07-46-55-304_250x250.jpg'}
                                    alt={image.user}
                                    className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">{image.user}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Contributor</p>
                                </div>
                                <button className="ml-auto px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors">
                                    Follow
                                </button>
                            </div>

                            {/* Image Details */}
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Image Details</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Dimensions</p>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {image.imageWidth} × {image.imageHeight} px
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Size</p>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {Math.round(image.imageSize / 1024)} KB
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Type</p>
                                        <p className="font-medium text-gray-900 dark:text-white">{image.type}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Uploaded</p>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {new Date().toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <div className="text-center px-0.5 py-2 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 rounded-xl">
                                    <IoHeartOutline className="mx-auto text-pink-600 dark:text-pink-400 mb-2" size={24} />
                                    <p className="text-md font-bold text-gray-900 dark:text-white">{formatNumber(image.likes)}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Likes</p>
                                </div>
                                <div className="text-center px-0.5 py-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl">
                                    <IoDownloadOutline className="mx-auto text-blue-600 dark:text-blue-400 mb-2" size={24} />
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">{formatNumber(image.downloads)}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Downloads</p>
                                </div>
                                <div className="text-center px-0.5 py-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl">
                                    <IoEyeOutline className="mx-auto text-green-600 dark:text-green-400 mb-2" size={24} />
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">{formatNumber(image.views)}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Views</p>
                                </div>
                                <div className="text-center px-0.5 py-2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl">
                                    <IoChatbubbleOutline className="mx-auto text-purple-600 dark:text-purple-400 mb-2" size={24} />
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">{formatNumber(image.comments)}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Comments</p>
                                </div>
                            </div>

                            {/* Related Info */}
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">License</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    Free for commercial use • No attribution required
                                </p>
                                <div className="flex items-center gap-2 text-sm">
                                    <IoStarOutline className="text-yellow-500" />
                                    <span className="text-gray-700 dark:text-gray-300">Pixabay License</span>
                                </div>
                            </div>

                            {/* Related Tags */}
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Related Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {image.tags.split(', ').slice(0, 8).map((tag, index) => (
                                        <a
                                            key={index}
                                            href={`/search?q=${encodeURIComponent(tag)}`}
                                            className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
                                        >
                                            {tag}
                                        </a>
                                    ))}
                                    <button className="px-3 py-1.5 border border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm hover:border-gray-400 dark:hover:border-gray-600 transition-colors flex items-center gap-1">
                                        <IoAddOutline /> More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}