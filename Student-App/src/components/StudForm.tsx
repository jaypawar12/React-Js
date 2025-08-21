function StudForm() {
    

    return (
        <form className="max-w-screen-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/* First Name */}
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        First name
                    </label>
                    <input
                        type="text"
                        id="first_name"
                        placeholder="John"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Last name
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        placeholder="Doe"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                {/* Std Dropdown */}
                <div>
                    <label htmlFor="std" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Select Std
                    </label>
                    <select
                        id="std"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Choose...</option>
                        <option value="1">Std 1</option>
                        <option value="2">Std 2</option>
                        <option value="3">Std 3</option>
                    </select>
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Phone number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="1234567890"
                        pattern="[0-9]{10}"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email address
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="john.doe@company.com"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            {/* Password */}
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="•••••••••"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            {/* Hobby (Checkbox) */}
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Hobby
                </label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" value="Cricket" className="w-4 h-4 rounded border-gray-300" /> Cricket
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" value="Music" className="w-4 h-4 rounded border-gray-300" /> Music
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" value="Reading" className="w-4 h-4 rounded border-gray-300" /> Reading
                    </label>
                </div>
            </div>

            {/* Gender (Radio) */}
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Gender
                </label>
                <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="gender" value="Male" className="w-4 h-4 border-gray-300" /> Male
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="gender" value="Female" className="w-4 h-4 border-gray-300" /> Female
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="gender" value="Other" className="w-4 h-4 border-gray-300" /> Other
                    </label>
                </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        required
                        className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 
                         focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                         dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.
                </label>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                     focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto 
                     px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                     dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    )
}

export default StudForm;