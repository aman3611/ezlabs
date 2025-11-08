EZ Labs Contact App

A simple React + Vite based contact form that sends data to a live API (https://vernanbackend.ezlab.in/api/contact-us/).
This project was made for the EZ Labs Front-End Intern Test.

Table of Contents

About Project

Features

Project Structure

How to Run

API Details

Postman Testing

Screenshots

Notes

About Project

This is a small front-end web application built using React + Vite.
It has a single contact form where a user can enter:

Name

Email

Phone Number

Message

When the user submits the form, the data is validated and sent to the EZ Labs live backend.
If successful, a success message is shown and the form resets.

Features

✅ Simple and clean user interface

✅ Front-end validation (required fields & valid email check)

✅ Live API integration with real-time success message

✅ Fully responsive design (mobile, tablet, laptop)

✅ Tested and verified using Postman

✅ Easy to run locally using Vite

Project Structure
ezlabs-contact-starter/
│
├── index.html                 # HTML entry file
├── package.json               # Project dependencies and scripts
├── postman_collection.json    # Postman collection for API testing
├── favicon.svg                # App icon
├── vite.config.js             # Vite config
│
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Main App component
│   ├── index.css              # Global styles
│   ├── lib/
│   │   └── api.js             # API call helper function
│   └── components/
│       └── ContactForm.jsx    # Main contact form
│
└── README.md                  # Project documentation

How to Run
1️⃣ Clone the repository
git clone https://github.com/aman3611/ezlabs-contact-starter.git
cd ezlabs-contact-starter

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev

4️⃣ Open the app

Go to your browser → http://localhost:5173

API Details
Endpoint
POST https://vernanbackend.ezlab.in/api/contact-us/

Request Body Example
{
  "name": "Aman",
  "email": "aman2505@gmail.com",
  "phone": "9876543210",
  "message": "Hello!"
}

Success Response
{
  "message": "Contact request submitted and email sent successfully",
  "data": {
    "id": 2474,
    "name": "Aman",
    "email": "aman2505@gmail.com",
    "phone": "9876543210",
    "message": "Hello!",
    "created_at": "2025-11-08T09:40:51.403Z",
    "updated_at": "2025-11-08T09:40:51.403Z"
  }
}

Postman Testing

Open Postman

Set method: POST

URL: https://vernanbackend.ezlab.in/api/contact-us/

Add header:

Content-Type: application/json

Add body (raw JSON):

{
  "name": "Aman",
  "email": "aman@example.com",
  "phone": "9876543210",
  "message": "Hello!"
}


Click Send

If everything is fine, response message will be:
"Contact request submitted and email sent successfully"

Screenshots

(You can add these in a /screenshots folder and link them here)

Postman Request Screenshot

Postman Response Screenshot

Application UI Screenshot

Example (if you add them):

![Postman Request](./screenshots/postman-request.png)
![Postman Response](./screenshots/postman-response.png)
![App UI](./screenshots/app-ui.png)

Notes

Project made for EZ Labs Front-End Intern Assessment (2025).

Uses React hooks (useState) and fetch API for network requests.

Backend link is common for all candidates.

Includes postman_collection.json for easy testing.

Developer

Name: Aman Gupta
Email: amangupta3611@gmail.com
