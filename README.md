# Doctor Appointment Website 🥼

A **Doctor Appointment Website** built using **MongoDB, Express, React, and Node.js (MERN stack)**.

## 💡 About This Project

This project provides a **fully functional doctor appointment booking system**. It consists of three main parts:

- **Frontend:** User-friendly interface for patients to browse doctors, book appointments, and manage their profiles.
- **Backend:** Handles authentication, doctor management, and appointment scheduling.
- **Admin Panel:** Allows admins to manage doctor profiles, specializations, and appointments.

### Key Features 🚀

- **User Authentication** (Sign Up / Sign In)
- **Doctor Listings with Specializations**
- **Appointment Scheduling & Cancellation**
- **Admin Dashboard for Doctor Management**
- **Responsive Design with TailwindCSS**

## ⚡ Technologies Used

- **Frontend:** React.js, TailwindCSS, React Router, React Toastify
- **Backend:** Node.js, Express.js, MongoDB
- **Other Tools:** Axios, Vite

## 🛠 Dependencies

- `axios`
- `react-router`
- `react-toastify`

## 🚦 Running the Project

Follow these steps to set up and run the project locally. ⬇️

### **1️⃣ Prerequisites**

- Install **Node.js** and **Vite Tool**
- Set up a **MongoDB Free Cluster**

### **2️⃣ Create a ****`.env`**** File**

Create a `.env` file in the backend directory and add the following credentials:

```
MONGODB_URI=mongodb+srv://<username>:<password>@clusterName.xxxxxxx.mongodb.net/doctor-appointment
```

### **3️⃣ Install Dependencies and Run the Project**

#### **Backend Setup**

```sh
cd backend
npm install
npm run server
```

- Open [http://localhost:4000](http://localhost:4000) to check the backend is running.

#### **Frontend Setup**

```sh
cd frontend
npm install
npm run dev
```

- Open [http://localhost:5173](http://localhost:5173) in your web browser.

#### **Admin Panel Setup**

```sh
cd admin
npm install
npm run dev
```

- Open [http://localhost:5174](http://localhost:5174) in your web browser.
