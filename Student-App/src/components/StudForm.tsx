import { useState } from "react";

type LearnerFormProps = {
  theme: string;
};

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

function LearnerForm({ theme }: LearnerFormProps) {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [contactNo, setContactNo] = useState<string>("");
  const [userPass, setUserPass] = useState<string>("");
  const [userGender, setUserGender] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [activities, setActivities] = useState<string[]>([]);
  const [error, setError] = useState<any>({});
  const [students, setStudents] = useState<StudentObject[]>([]);

  const gradeOptions: string[] = [
    "1st", "2nd", "3rd", "4th", "5th",
    "6th", "7th", "8th", "9th", "10th",
    "11th", "12th"
  ];

  type Activity = {
    id: string;
    label: string;
    icon: string;
  };

  const activitieList: Activity[] = [
    { id: "cricket", label: "Cricket", icon: "🏏" },
    { id: "music", label: "Music", icon: "🎵" },
    { id: "reading", label: "Reading", icon: "📚" },
    { id: "traveling", label: "Traveling", icon: "✈️" },
    { id: "art", label: "Art & Design", icon: "🎨" },
    { id: "sports", label: "Sports", icon: "⚽" },
    { id: "coding", label: "Programming", icon: "💻" },
    { id: "dance", label: "Dancing", icon: "💃" }
  ];

  const getHobby = (event: any) => {
    const { value, checked } = event.target;
    if (checked) setActivities(prev => [...prev, value]);
    else setActivities(prev => prev.filter(item => item !== value));
  };

  const validation = () => {
    const newError: any = {};
    if (!fName.trim()) newError.fname = "First Name is required...";
    if (!lName.trim()) newError.lname = "Last Name is required...";
    if (!userEmail.trim()) newError.userEmail = "Email is required...";
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail))
      newError.userEmail = "Invalid email format";
    if (!contactNo.trim()) newError.contactNo = "Phone Number is required...";
    else if (!/^(?:\+?91[-\s]?|0)?[6-9]\d{9}$/.test(contactNo))
      newError.contactNo = "Invalid phone number";
    if (!userGender.trim()) newError.userGender = "Gender is required...";
    if (!grade.trim() || grade === "Select") newError.grade = "Grade is required...";
    if (activities.length === 0) newError.activities = "Please select at least one hobby";

    setError(newError);
    return Object.keys(newError).length;
  };

  const studForm = (event: any) => {
    event.preventDefault();
    if (validation() !== 0) return;

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

    setStudents(prev => [...prev, newStudent]);

    setFName("");
    setLName("");
    setUserEmail("");
    setContactNo("");
    setUserPass("");
    setUserGender("");
    setGrade("");
    setActivities([]);
    setError({});
  };

  const deleteStudent = (index: number) => {
    setStudents(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${theme === 'light' ? 'bg-amber-50' : 'bg-gray-900'} py-10 px-4`}>
      
      <form onSubmit={studForm} className={`w-full max-w-lg p-8 rounded-xl shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} space-y-6`}>
        <h2 className={`text-2xl font-bold text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Student Registration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>First Name</label>
            <input type="text" value={fName} onChange={e => setFName(e.target.value)}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-700 text-white'}`} placeholder="John" />
            {error.fname && <p className="text-red-500 text-xs mt-1">{error.fname}</p>}
          </div>

          <div>
            <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Last Name</label>
            <input type="text" value={lName} onChange={e => setLName(e.target.value)}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-700 text-white'}`} placeholder="Doe" />
            {error.lname && <p className="text-red-500 text-xs mt-1">{error.lname}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Grade</label>
            <select value={grade} onChange={e => setGrade(e.target.value)}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-700 text-white'}`}>
              <option value="">Select Grade</option>
              {gradeOptions.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
            {error.grade && <p className="text-red-500 text-xs mt-1">{error.grade}</p>}
          </div>

          <div>
            <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Phone</label>
            <input type="tel" value={contactNo} onChange={e => setContactNo(e.target.value)}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-700 text-white'}`} placeholder="1234567890" />
            {error.contactNo && <p className="text-red-500 text-xs mt-1">{error.contactNo}</p>}
          </div>
        </div>

        <div>
          <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Email</label>
          <input type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)}
            className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-700 text-white'}`} placeholder="john.doe@example.com" />
          {error.userEmail && <p className="text-red-500 text-xs mt-1">{error.userEmail}</p>}
        </div>

        <div>
          <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Password</label>
          <input type="password" value={userPass} onChange={e => setUserPass(e.target.value)}
            className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-700 text-white'}`} placeholder="••••••••" />
        </div>

        <div>
          <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Activities</label>
          <div className="flex flex-wrap gap-3">
            {activitieList.map(a => (
              <label key={a.id} className={`flex items-center gap-2 ${theme === 'light' ? 'text-gray-900' : 'text-gray-200'}`}>
                <input type="checkbox" value={a.label} checked={activities.includes(a.label)} onChange={getHobby}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400 border-gray-600 bg-gray-700" /> {a.icon} {a.label}
              </label>
            ))}
          </div>
          {error.activities && <p className="text-red-500 text-xs mt-1">{error.activities}</p>}
        </div>

        <div>
          <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Gender</label>
          <div className="flex flex-wrap gap-4">
            {["Male", "Female", "Other"].map(g => (
              <label key={g} className={`flex items-center gap-2 ${theme === 'light' ? 'text-gray-900' : 'text-gray-200'}`}>
                <input type="radio" name="gender" value={g} checked={userGender === g} onChange={e => setUserGender(e.target.value)}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400 border-gray-600 bg-gray-700" /> {g}
              </label>
            ))}
          </div>
          {error.userGender && <p className="text-red-500 text-xs mt-1">{error.userGender}</p>}
        </div>

        <button type="submit" className={`w-full py-2 mt-4 font-semibold rounded-md ${theme === 'light' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition`}>
          Submit
        </button>
      </form>

      <div className={`w-full max-w-7xl mt-10 overflow-x-auto rounded-xl shadow-lg ${theme === 'light' ? 'bg-white border border-gray-300' : 'bg-gray-800 border border-gray-700'}`}>
        <table className="w-full border-collapse">
          <thead className={`${theme === 'light' ? 'bg-blue-500 text-gray-800' : 'bg-blue-700 text-white'}`}>
            <tr>
              {["No", "Name", "Phone", "Email", "Password", "Activities", "Gender", "Action"].map(h => (
                <th key={h} className="px-4 py-2 text-center text-sm uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          {students.length > 0 ? (
            <tbody className={`${theme === 'light' ? 'divide-y divide-gray-300' : 'divide-y divide-gray-600 text-amber-50'}`}>
              {students.map((s, i) => (
                <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition text-center ">
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{s.fname} {s.lname}</td>
                  <td className="px-4 py-2">{s.contactNo}</td>
                  <td className="px-4 py-2">{s.userEmail}</td>
                  <td className="px-4 py-2">{s.userPass}</td>
                  <td className="px-4 py-2">{s.activities.join(", ")}</td>
                  <td className="px-4 py-2">{s.userGender}</td>
                  <td className="px-4 py-2 flex gap-3 text-center ">
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button onClick={() => deleteStudent(i)} className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-950 dark:text-gray-300">
                  No students found.
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default LearnerForm;
