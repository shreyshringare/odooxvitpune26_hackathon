# 🚀 XpenseFlow – Expense Management System

## 📌 Overview

XpenseFlow is a full-stack expense management application built to help users efficiently track, manage, and analyze their daily expenses. It provides a clean and intuitive dashboard along with a scalable backend API.

This project was developed during a hackathon with a focus on usability, modular structure, and real-world implementation.

---

## ✨ Features

- Add, edit, and delete expenses  
- Categorize expenses (Food, Travel, etc.)  
- View complete expense history  
- Track expense status (Pending / Approved / Rejected)  
- Dashboard with expense insights  
- RESTful API for backend operations  

---

## 🧱 Tech Stack

**Frontend**
- React.js  
- Tailwind CSS / CSS Modules  
- Axios  

**Backend**
- Node.js  
- Express.js  

**Database**
- MongoDB  

---

## 📂 Folder Structure


odooxvitpune26_hackathon-main/
│
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ │ ├── Expense/
│ │ │ ├── Dashboard/
│ │ │ └── Layout/
│ │ │
│ │ ├── pages/ # Page-level components
│ │ │ ├── Home.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ └── CreateExpense.jsx
│ │ │
│ │ ├── services/ # API calls
│ │ ├── utils/ # Helper functions
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ └── package.json
│
├── server/ # Node.js + Express backend
│ ├── controllers/ # Business logic
│ ├── routes/ # API routes
│ ├── models/ # Database schemas
│ ├── middleware/ # Auth / validation
│ ├── config/ # DB config
│ ├── server.js # Entry point
│ └── package.json
│
├── .env
├── package.json
└── README.md


---

## ⚙️ Setup Instructions

### 1. Clone the Repository


git clone <your-repo-link>
cd odooxvitpune26_hackathon-main


---

### 2. Backend Setup


cd server
npm install


Create `.env` file inside `/server`:


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run backend:


npm start


---

### 3. Frontend Setup


cd client
npm install
npm run dev


---

## 🌐 Run the Application

- Frontend: http://localhost:5173  
- Backend: http://localhost:5000  

---

## 🔗 API Endpoints


GET /api/expenses
POST /api/expenses
PUT /api/expenses/:id
DELETE /api/expenses/:id


---

## 🧪 Testing

Use tools like:
- Postman  
- Thunder Client (VS Code)  

---

## 🚧 Future Improvements

- User authentication (JWT / OAuth)  
- Role-based access control  
- Notifications system  
- Export reports (PDF / CSV)  
- Enhanced UI and mobile responsiveness  

---

## 👨‍💻 Contributors

- Your Team Name / Members  

---

## 📜 License

This project is for educational and hackathon purposes only.

---

## 💡 Notes

- Ensure MongoDB is running before starting the backend  
- Do not commit `.env` file  
- Update API URLs if deploying  
