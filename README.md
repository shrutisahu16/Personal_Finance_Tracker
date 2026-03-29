# 💰 Personal Finance Tracker

A full-stack **Personal Finance Management System** built using modern technologies with a **microservices architecture**.
It helps users track expenses, manage budgets, analyze reports, and get **AI-powered financial suggestions**.

---

## 🚀 Tech Stack
## Demo 🎥🎥

👉 [Live Demo](https://personal-finance-tracker-9oui.vercel.app)

### 🖥️ Frontend

* Next.js (React + TypeScript)
* Tailwind CSS
* Recharts (Data Visualization)

### ⚙️ Backend

* Node.js + Express
* MongoDB (Primary Data)
* PostgreSQL (Analytics & Reports)
* JWT Authentication

### 🤖 Python Microservice

* Flask
* Pandas
* Provides AI-based smart financial suggestions

---

## 🏗️ Architecture

```
                ┌──────────────────────┐
                │   Next.js Frontend   │
                │ (React + TypeScript) │
                └─────────┬────────────┘
                          │ API Calls
                          ▼
                ┌──────────────────────┐
                │   Node.js Backend    │
                │   (Express Server)   │
                └─────────┬────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌────────────────────┐
│  MongoDB     │  │ PostgreSQL   │  │ Python Microservice│
│ (Main Data)  │  │ (Analytics)  │  │ Flask + Pandas     │
└──────────────┘  └──────────────┘  └────────────────────┘
                                              │
                                              ▼
                                     Smart Suggestions
```

---

## ✨ Features

* 🔐 User Authentication (JWT आधारित)
* 💸 Expense Tracking
* 📊 Budget Management
* 📈 Reports & Analytics (PostgreSQL)
* 🤖 AI Financial Suggestions (Python service)
* 📅 Monthly Reports
* 📉 Spending Pattern Analysis

---

## 📁 Project Structure

```
Personal_Finance_Tracker/
│
├── frontend/          # Next.js frontend
├── backend/           # Node.js backend
├── python-service/    # AI microservice (Flask)
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone Repository

```bash
git clone https://github.com/your-username/Personal_Finance_Tracker.git
cd Personal_Finance_Tracker
```

---

## ▶️ Run Project Locally

---

### 🖥️ Frontend

```bash
cd frontend
npm install
npm run dev
```

👉 Runs on: `http://localhost:3000`

---

### ⚙️ Backend

```bash
cd backend
npm install
npm run dev
```

👉 Runs on: `http://localhost:5000`

---

### 🤖 Python Microservice

```bash
cd python-service
pip install -r requirements.txt
python app.py
```

👉 Runs on: `http://localhost:8000`

---

## 🔑 Environment Variables

### Backend (`.env`)

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
DATABASE_URL=your_postgresql_url
```

---

### Frontend (`.env.local`)

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 🌐 Deployment

* Frontend → Vercel
* Backend → Render
* PostgreSQL → Render DB
* MongoDB → MongoDB Atlas
* Python Service → Render

---

## 🧠 AI Suggestions Feature

* Uses **Pandas** for data analysis
* Detects:

  * High spending categories
  * Unusual expenses
  * Spending trends
  * Daily spending patterns

---

## 📊 Database Design

### MongoDB

* Users
* Expenses
* Budgets

### PostgreSQL

* Reports
* Aggregated analytics

---

## 📦 Backend Dependencies

* Express
* Mongoose
* PostgreSQL (pg)
* JWT
* bcrypt

---

## 🛠️ Future Improvements

* 📱 Mobile responsiveness improvements
* 📊 Advanced analytics dashboard
* 🤖 More intelligent AI suggestions
* 🔔 Notifications & alerts

---

## 👩‍💻 Author

**Shruti Sahu**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
