# 📝 To-Do Management Dashboard

A modern, interactive To-Do Management Dashboard built with **React**, **Tailwind CSS**, and **React Toastify**.  
Manage your tasks efficiently with features like task addition, editing, completion toggling, deletion, and dynamic theme customization.

## 🚀 Features

✅ Add new tasks  
✏️ Edit existing tasks  
🎯 Mark tasks as complete or incomplete  
🗑️ Delete tasks  
🌈 Dynamic theme color switcher  
⚡ Responsive design  
📢 Toast notifications for actions  

## 🛠️ Tech Stack

- Frontend: React, Tailwind CSS  
- Notifications: React Toastify  
- State Management: React `useState`, `useEffect`  
- Dynamic theme color switching  

## 🎯 Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/todo-dashboard.git
   ```

2. Navigate to the project directory:  
   ```bash
   cd todo-dashboard
   ```

3. Install dependencies:  
   ```bash
   npm install
   ```

4. Start the development server:  
   ```bash
   npm start
   ```

5. Open the app in the browser at:  
   [http://localhost:3000](http://localhost:3000)

## ⚡ Usage

- Use the input field to add a new task or edit an existing one.  
- Toggle tasks between "Pending" and "Completed" by clicking the checkbox.  
- Delete tasks using the delete button.  
- Click the theme button (bottom-right) to open the theme panel and select a color.  

## 🎨 Theme Customization

- Open the theme panel using the floating button.  
- Choose from multiple predefined color themes.  
- The selected theme updates the entire dashboard background color instantly.  

## 📢 Notifications

Powered by **React Toastify**:  
✅ Task added successfully  
✏️ Task updated successfully  
🗑️ Task deleted successfully  
✅ Task marked as complete  
📝 Task marked as incomplete  

## 📁 Project Structure

```
├── public
├── src
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── SideBar.tsx
│   │   ├── TaskForm.tsx
│   │   ├── TaskPending.tsx
│   │   ├── TaskComplete.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
```

## ✅ License

This project is open-source and available under the **MIT License**.

## 🤝 Contribution

Feel free to fork the project, submit issues, and open pull requests!  
Your contributions are always welcome ❤️
