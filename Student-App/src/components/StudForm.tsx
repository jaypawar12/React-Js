import { useState } from "react";

function LearnerForm() {
    const [fName, setFName] = useState<string>("");
    const [lName, setLName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [contactNo, setContactNo] = useState<string>("");
    const [userPass, setUserPass] = useState<string>("");
    const [userGender, setUserGender] = useState<string>("");
    const [grade, setGrade] = useState<string>("");
    const [activities, setActivities] = useState<string[]>([]);

    const gradeOptions: string[] = [
        "1st", "2nd", "3rd", "4th", "5th",
        "6th", "7th", "8th", "9th", "10th",
        "11th", "12th"
    ];

    const getHobby = (event: any) => {
        const { value, checked } = event.target;
        if (checked) {
            setActivities(prevList => [...prevList, value]);
        } else {
            setActivities(prevList => prevList.filter(item => item !== value));
        }
    };

    const studForm = (event: any) => {
        event.preventDefault();

        console.log("First Name:", fName);
        console.log("Last Name:", lName);
        console.log("Email:", userEmail);
        console.log("Phone:", contactNo);
        console.log("Password:", userPass);
        console.log("Gender:", userGender);
        console.log("Grade:", grade);
        console.log("Activities:", activities);

        // Reset form fields
        setFName("");
        setLName("");
        setUserEmail("");
        setContactNo("");
        setUserPass("");
        setUserGender("");
        setGrade("");
        setActivities([]);
    };

    return (
  <div className="flex flex-col md:flex-row min-h-screen">

    {/* Right Dark Form Panel */}
    <div className="md:w-full flex items-center justify-center p-8 bg-gray-900">
      <form onSubmit={studForm} className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl text-white font-semibold text-center mb-6">Registration</h2>
        
        {/* Name Fields */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="fname" className="block mb-1 text-sm text-gray-300">First Name</label>
            <input
              id="fname"
              type="text"
              placeholder="John"
              required
              value={fName}
              onChange={e => setFName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          {/* Last Name */}
          <div>
            <label htmlFor="lname" className="block mb-1 text-sm text-gray-300">Last Name</label>
            <input
              id="lname"
              type="text"
              placeholder="Doe"
              required
              value={lName}
              onChange={e => setLName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {/* Grade & Phone */}
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          {/* Grade */}
          <div>
            <label htmlFor="grade" className="block mb-1 text-sm text-gray-300">Grade</label>
            <select
              id="grade"
              required
              value={grade}
              onChange={e => setGrade(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Choose...</option>
              {gradeOptions.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </select>
          </div>
          {/* Contact No */}
          <div>
            <label htmlFor="contactNo" className="block mb-1 text-sm text-gray-300">Phone Number</label>
            <input
              id="contactNo"
              type="tel"
              placeholder="1234567890"
              pattern="[0-9]{10}"
              required
              value={contactNo}
              onChange={e => setContactNo(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {/* Email & Password */}
        <div className="mt-4">
          <label htmlFor="userEmail" className="block mb-1 text-sm text-gray-300">Email</label>
          <input
            id="userEmail"
            type="email"
            placeholder="john.doe@example.com"
            required
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="userPass" className="block mb-1 text-sm text-gray-300">Password</label>
          <input
            id="userPass"
            type="password"
            placeholder="••••••••"
            required
            value={userPass}
            onChange={e => setUserPass(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Activities & Gender */}
        <div className="mt-4 space-y-4">
          {/* Activities */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Activities</label>
            <div className="flex gap-4">
              {["Cricket","Music","Reading"].map(act => (
                <label key={act} className="flex items-center gap-2 text-gray-200">
                  <input
                    type="checkbox"
                    value={act}
                    checked={activities.includes(act)}
                    onChange={getHobby}
                    className="w-4 h-4 text-green-400 focus:ring-green-400 border-gray-600 bg-gray-700"
                  /> {act}
                </label>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Gender</label>
            <div className="flex gap-4">
              {["Male","Female","Other"].map(type => (
                <label key={type} className="flex items-center gap-2 text-gray-200">
                  <input
                    type="radio"
                    name="gender"
                    value={type}
                    checked={userGender === type}
                    onChange={e => setUserGender(e.target.value)}
                    className="w-4 h-4 text-green-400 focus:ring-green-400 border-gray-600 bg-gray-700"
                  /> {type}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
);



}

export default LearnerForm;
