import { useEffect, useState } from "react";

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
  const [students, setStudents] = useState<StudentObject[]>((
        JSON.parse(localStorage.getItem("students") || "[]")
    ));
  const [editId, setEditId] = useState<number>();

  useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

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
    if (checked) {
      setActivities(data => [...data, value]);
    } else {
      setActivities(data => data.filter(item => item !== value));
    }
    setError(Element => ({ ...Element, activities: "" }));
  };

  const validation = () => {
    const newError: any = {};
    if (!fName.trim()) newError.fname = "First Name is required...";
    if (!lName.trim()) newError.lname = "Last Name is required...";
    if (!userEmail.trim()) newError.userEmail = "Email is required...";
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail))
      newError.userEmail = "Invalid email format";
    if (!userPass.trim()) newError.userPass = "Password is required...";
    else if (userPass.length < 6)
      newError.userPass = "Password must be at least 6 characters";
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

    if (editId === undefined) {
      setStudents(prev => [...prev, newStudent]);
    }else {
      setStudents(prev => prev.map((student, index) => index === editId ? newStudent : student));
    }

    // Reset form
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

  const editStudent = (i: number) => {
    setEditId(i);

    setFName(students[i].fname);
    setLName(students[i].lname);
    setUserEmail(students[i].userEmail);
    setContactNo(students[i].contactNo);
    setUserPass(students[i].userPass);
    setUserGender(students[i].userGender);
    setGrade(students[i].grade);
    setActivities(students[i].activities);
  };


  return (
    <div className={`flex flex-col items-center justify-center ${theme === 'light' ? 'bg-indigo-50' : 'bg-gray-900'} py-10 px-4`}>

      <form onSubmit={studForm} className={`w-full max-w-lg p-8 rounded-xl shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} space-y-6`}>
        <h2 className={`text-2xl font-bold text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{editId !== undefined ? "Update Student" : "Student Registration"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>First Name</label>
            <input type="text" value={fName} onChange={e => {
              setFName(e.target.value);
              setError(prev => ({ ...prev, fname: "" }));
            }}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light'
                ? `bg-gray-100 text-gray-900 ${error.fname ? 'border-red-500' : 'border-gray-300'}`
                : `bg-gray-700 text-white ${error.fname ? 'border-red-500' : 'border-gray-600'}`
                }`} placeholder="John" />
            {error.fname && <p className="text-red-500 text-xs mt-1">{error.fname}</p>}
          </div>

          <div>
            <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Last Name</label>
            <input type="text" value={lName} onChange={e => {
              setLName(e.target.value);
              setError(prev => ({ ...prev, lname: "" }));
            }}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light'
                ? `bg-gray-100 text-gray-900 ${error.lname ? 'border-red-500' : 'border-gray-300'}`
                : `bg-gray-700 text-white ${error.lname ? 'border-red-500' : 'border-gray-600'}`
                }`} placeholder="Doe" />
            {error.lname && <p className="text-red-500 text-xs mt-1">{error.lname}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Grade</label>
            <select value={grade} onChange={e => {
              setGrade(e.target.value);
              setError(prev => ({ ...prev, grade: "" }));
            }}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light'
                ? `bg-gray-100 text-gray-900 ${error.grade ? 'border-red-500' : 'border-gray-300'}`
                : `bg-gray-700 text-white ${error.grade ? 'border-red-500' : 'border-gray-600'}`
                }`}>
              <option value="">Select Grade</option>
              {gradeOptions.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
            {error.grade && <p className="text-red-500 text-xs mt-1">{error.grade}</p>}
          </div>

          <div>
            <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Phone</label>
            <input type="tel" value={contactNo} onChange={e => {
              setContactNo(e.target.value);
              setError(prev => ({ ...prev, contactNo: "" }));
            }}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light'
                ? `bg-gray-100 text-gray-900 ${error.contactNo ? 'border-red-500' : 'border-gray-300'}`
                : `bg-gray-700 text-white ${error.contactNo ? 'border-red-500' : 'border-gray-600'}`
                }`} placeholder="1234567890" />
            {error.contactNo && <p className="text-red-500 text-xs mt-1">{error.contactNo}</p>}
          </div>
        </div>

        <div>
          <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Email</label>
          <input type="email" value={userEmail} onChange={e => {
            setUserEmail(e.target.value);
            setError(prev => ({ ...prev, userEmail: "" }));
          }}
            className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light'
              ? `bg-gray-100 text-gray-900 ${error.userEmail ? 'border-red-500' : 'border-gray-300'}`
              : `bg-gray-700 text-white ${error.userEmail ? 'border-red-500' : 'border-gray-600'}`
              }`} placeholder="john.doe@example.com" />
          {error.userEmail && <p className="text-red-500 text-xs mt-1">{error.userEmail}</p>}
        </div>

        <div>
          <label className={`block mb-1 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Password</label>
          <input type="password" value={userPass} onChange={e => {
            setUserPass(e.target.value);
            setError(prev => ({ ...prev, userPass: "" }));
          }}
            className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light'
              ? `bg-gray-100 text-gray-900 ${error.userPass ? 'border-red-500' : 'border-gray-300'}`
              : `bg-gray-700 text-white ${error.userPass ? 'border-red-500' : 'border-gray-600'}`
              }`} placeholder="••••••••" />
          {error.userPass && <p className="text-red-500 text-xs mt-1">{error.userPass}</p>}
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
                <input type="radio" name="gender" value={g} checked={userGender === g} onChange={e => {
                  setUserGender(e.target.value);
                  setError(prev => ({ ...prev, userGender: "" }));
                }}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400 border-gray-600 bg-gray-700" /> {g}
              </label>
            ))}
          </div>
          {error.userGender && <p className="text-red-500 text-xs mt-1">{error.userGender}</p>}
        </div>

        <button type="submit" className={`w-full py-2 mt-4 font-semibold rounded-md ${theme === 'light' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition`}>
          {(editId === undefined) ? "Add Student" : "Update Student"}
        </button>
      </form>

      <div className={`w-full max-w-7xl mt-10 overflow-x-auto rounded-xl shadow-lg ${theme === 'light' ? 'bg-white border border-gray-500' : 'bg-gray-800 border border-gray-500'}`}>
        <table className="w-full border-collapse">
          <thead className={`${theme === 'light' ? 'bg-blue-600 text-white' : 'bg-blue-700 text-white' }`}>
            <tr>
              {["No", "Name", "Phone", "Email", "Password", "Activities", "Gender", "Action"].map((h, index) => (
                <th key={h} className={`px-4 py-2 text-center text-sm uppercase border-b ${index !== 0 ? ' border-l' : ''}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className={`${theme === 'light' ? 'divide-y divide-gray-300' : 'divide-y divide-gray-600 text-indigo-50'}`}>
            {students.length > 0 ? (
              students.map((s, i) => (
                <tr key={i} className="text-center">
                  <td className="px-4 py-2">{i + 1}.</td>
                  <td className="px-4 py-2 border-l">{s.fname} {s.lname}</td>
                  <td className="px-4 py-2 border-l">{s.contactNo}</td>
                  <td className="px-4 py-2 border-l">{s.userEmail}</td>
                  <td className="px-4 py-2 border-l">{s.userPass}</td>
                  <td className="px-4 py-2 border-l">{s.activities.join(", ")}</td>
                  <td className="px-4 py-2 border-l">{s.userGender}</td>
                  <td className="px-4 py-2 border-l flex gap-3 justify-center">
                    <button onClick={() => editStudent(i)} className="text-blue-500 hover:underline">Edit</button>
                    <button onClick={() => deleteStudent(i)} className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4">
                  <span className={`text-md font-bold ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>No students found.</span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LearnerForm;
