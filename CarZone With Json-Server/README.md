# 🚗 CarZone Website with JSON Server  

## 📌 Project Overview  
CarZone Website is a modern and responsive car showcase platform built with HTML, CSS, JavaScript, and JSON Server. It allows users to explore car listings, view details, and perform CRUD operations without needing a real backend.  

## 🌟 Features  
- Responsive design with modern UI/UX  
- Car listings with images, brand, price, and description  
- Modal popup for detailed car view  
- CRUD operations (Create, Read, Update, Delete) via JSON Server  
- Sticky header and smooth navigation  
- Toast notifications for actions  
- Search and filtering options  

## 🛠 Tech Stack  
- **Frontend:** HTML5, CSS3, JavaScript, Tailwind CSS  
- **Backend:** JSON Server (mock REST API)  
- **Libraries & Tools:** React (optional), React Icons, Toastify  

## 📂 Folder Structure  
```
Motox-Website-With-Json-Server
├── public/
│   └── img/
├── src/
│   ├── Components/
│   │   ├── Banner/
│   │   │   └── Banner.tsx
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   └── Header/
│   │       └── Header.tsx
│   ├── JSON/
│   │   └── db.json
│   ├── Pages/
│   │   ├── About/
│   │   │   └── AboutPage.tsx
│   │   ├── Add New Car/
│   │   │   └── AddNewCarPage.tsx
│   │   ├── Contact/
│   │   │   └── ContactPage.tsx
│   │   ├── Edit Car/
│   │   │   └── EditCarPage.tsx
│   │   ├── Home/
│   │   │   └── HomePage.tsx
│   │   └── View All Cars/
│   │       └── ViewAllCars.tsx
│   ├── Routes/
│   │   └── routes.ts
│   ├── Service/
│   │   └── CarAPIService.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.node.json
```

## ⚙ Installation Guide  
1. Clone the repository  
```bash
git clone https://github.com/jaypawar12/Motox-Website-With-Json-Server.git
cd Motox-Website-With-Json-Server
```  

2. Install dependencies  
```bash
npm install
```  

## 🚀 Running the Project  

### 1. Start JSON Server  
```bash
npx json-server --watch db.json --port 8000
```  

### 2. Start Frontend  
```bash
npm start
```  

Open in browser: [http://localhost:3000](http://localhost:3000)  

## 📸 Screenshots  

*(Add your screenshots here later — place them in a `Screenshots/` folder or link from your repo)*  

### 🏠 Homepage  
<img src="public/img/Home.png" alt="Homepage" width="full" height="500px"/>

### 🚘 View All Cars  
<img src="public/img/ViewAllCar.png" alt="View All Cars" width="full" />

### ℹ️ About Page  
<img src="public/img/About.png" alt="About" width="full" />

### ➕ Add New Car Page  
<img src="public/img/AddCar.png" alt="Add New Car" width="full" />

### ✅ Form Validation  
<img src="public/img/Validation.png" alt="Validation" width="full" />

### 📞 Contact Page  
<img src="public/img/Contact.png" alt="Contact" width="full" />

## 🤝 Contribution  
Contributions are welcome! Please open an issue or submit a pull request for improvements, bug fixes, or new features.  

## 📄 License  
This project is licensed under the MIT License.  
