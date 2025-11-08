# EZ Labs Contact App

A simple **React + Vite** based contact form that sends data to a live API (`https://vernanbackend.ezlab.in/api/contact-us/`).  
This project was created for the **EZ Labs Front-End Intern Test**.

---

## 📘 Table of Contents
- About Project  
- Features  
- Project Structure  
- How to Run  
- API Details  
- Postman Testing  
- Screenshots  
- Notes  
- Developer  

---

## 🧾 About Project
This is a front-end web application built using **React + Vite**.  
It contains a simple contact form with the following fields:

- Name  
- Email  
- Phone Number  
- Message  

When submitted, the form validates inputs and sends data to the **EZ Labs live backend API**.  
If the request is successful, it displays a success message and clears the form.

---

## 🚀 Features
- ✅ Simple and clean user interface  
- ✅ Front-end validation (required fields + email format check)  
- ✅ Live API integration with success message  
- ✅ Fully responsive design (mobile, tablet, laptop)  
- ✅ Tested with Postman (collection included)  
- ✅ Easy to run locally using Vite  

---

## 🧱 Project Structure

ezlabs-contact-starter/
│
├── index.html # HTML entry file with favicon link
├── package.json # Dependencies and npm scripts
├── postman_collection.json # Postman collection for API testing
├── favicon.svg # Custom app icon
├── vite.config.js # Vite configuration
│
├── src/
│ ├── main.jsx # React root entry point
│ ├── App.jsx # Main App component
│ ├── index.css # Global + responsive styles
│ ├── lib/
│ │ └── api.js # API helper for contact submission
│ └── components/
│ └── ContactForm.jsx # Contact form component with validation & API call
│
└── README.md # This documentation


---

## 🧩 How to Run

### 1️⃣ Clone the repository
```bash
git clone https://github.com/aman3611/ezlabs-contact-starter.git
cd ezlabs-contact-starter
2️⃣ Install dependencies
npm install
3️⃣ Start the development server
npm run dev

4️⃣ Open in browser

Visit → http://localhost:5173

🌐 API Details
Endpoint
POST https://vernanbackend.ezlab.in/api/contact-us/

Request Body Example
{
  "name": "Aman",
  "email": "aman@example.com",
  "phone": "9876543210",
  "message": "Hello!"
}

Success Response Example
{
  "message": "Contact request submitted and email sent successfully",
  "data": {
    "id": 2474,
    "name": "Aman",
    "email": "aman@example.com",
    "phone": "9876543210",
    "message": "Hello!",
    "created_at": "2025-11-08T09:40:51.403Z",
    "updated_at": "2025-11-08T09:40:51.403Z"
  }
}

🧪 Postman Testing

Open Postman

Set method → POST

URL → https://vernanbackend.ezlab.in/api/contact-us/

Go to Headers tab → add

Key: Content-Type

Value: application/json

Go to Body → raw → JSON, and enter:

{
  "name": "Aman",
  "email": "aman@example.com",
  "phone": "9876543210",
  "message": "Hello!"
}


Click Send

Response will be:

"Contact request submitted and email sent successfully"

🖼️ Screenshots

(You can add screenshots in a folder named /screenshots and reference them below.)

![Postman Request](./images/postman1.png)
![Postman Response](./screenshots/postman-response.png)
![App UI](./screenshots/app-ui.png)

📝 Notes

Made as part of EZ Labs Front-End Intern Assessment (2025).

Uses React hooks (useState) for form handling.

Directly connects with live API — no backend setup required locally.

Includes a Postman collection for easy API verification.

Responsive and mobile-friendly interface.
