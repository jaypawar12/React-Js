export default function TaskForm() {
    return (
        <form className="relative mb-6">
            <input
                type="text"
                placeholder="Enter a task"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
            />

            <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 pb-1 rounded-full hover:bg-blue-600 transition text-2xl"
            >
                +
            </button>
        </form>
    );
}
