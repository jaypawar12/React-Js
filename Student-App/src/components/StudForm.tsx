import { useState } from "react";

type StudentObject = {
  fname: string;
  lname: string;
  userEmail: string;
  contactNo: string;
  userPass: string;
  userGender: string;
  grade: string;
  activities: string[];
};

function LearnerForm() {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [contactNo, setContactNo] = useState<string>("");
  const [userPass, setUserPass] = useState<string>("");
  const [userGender, setUserGender] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [activities, setActivities] = useState<string[]>([]);
  const [students, setStudents] = useState<StudentObject[]>([]);

  const gradeOptions: string[] = [
    "1st", "2nd", "3rd", "4th", "5th",
    "6th", "7th", "8th", "9th", "10th",
    "11th", "12th"
  ];
  const activitieList: string[] = ["Cricket", "Music", "Reading", "Traveling"];

  const getHobby = (event: any) => {
    const { value, checked } = event.target;
    if (checked) {
      setActivities(prev => [...prev, value]);
    } else {
      setActivities(prev => prev.filter(item => item !== value));
    }
  };

  const studForm = (event: any) => {
    event.preventDefault();

    const newStudent: StudentObject = {
      fname: fName,
      lname: lName,
      userEmail: userEmail,
      contactNo: contactNo,
      userPass: userPass,
      userGender: userGender,
      grade: grade,
      activities: activities
    };

    console.log("Student Data:", newStudent);

    // Add new student to the list
    setStudents(prev => [...prev, newStudent]);

    // Reset form
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
      <div className="md:w-full flex flex-col items-center justify-center p-8 bg-gray-900">
        <form onSubmit={studForm} className="w-full mt-8 max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl text-white font-semibold text-center mb-6">Registration</h2>

          {/* Name Fields */}
          <div className="grid gap-4 md:grid-cols-2">
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
            <div>
              <label className="block mb-1 text-sm text-gray-300">Activities</label>
              <div className="flex flex-wrap gap-4">
                {activitieList.map(act => (
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

            <div>
              <label className="block mb-1 text-sm text-gray-300">Gender</label>
              <div className="flex flex-wrap gap-4">
                {["Male", "Female", "Other"].map(type => (
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
            className="mt-6 w-full py-2 font-medium rounded bg-green-500 hover:bg-green-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            Submit
          </button>
        </form>

        {/* Students Table */}
        {students.length > 0 && (
          <div className="w-3xl mt-10 bg-gray-800 rounded-xl shadow-lg overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-600 text-white text-left text-sm uppercase">
                  <th className="px-4 py-3">No</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Contact No</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Password</th>
                  <th className="px-4 py-3">Activities</th>
                  <th className="px-4 py-3">Gender</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {students.map((data, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-700 transition duration-200"
                  >
                    <td className="px-4 py-3 text-gray-200">{index + 1}</td>
                    <td className="px-4 py-3 text-gray-200">{data.fname} {data.lname}</td>
                    <td className="px-4 py-3 text-gray-200">{data.contactNo}</td>
                    <td className="px-4 py-3 text-gray-200">{data.userEmail}</td>
                    <td className="px-4 py-3 text-gray-200">{data.userPass}</td>
                    <td className="px-4 py-3 text-gray-200">{data.activities.join(", ")}</td>
                    <td className="px-4 py-3 text-gray-200">{data.userGender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}

export default LearnerForm;
