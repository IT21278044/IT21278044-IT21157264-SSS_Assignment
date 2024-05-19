# IT21278044-IT21278044-IT21157264-SSS_Assignment
SSS_Assignment - Splash_chat_App

**SPLASH CHAT Web Application**

**Overview**
SPLASH CHAT is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, and Node.js)and socket.io. It allows users to create accounts, log in, and communicate with each other in real-time. Key features include private messaging, group chats, and media sharing.

**Features:**
User Authentication (Sign Up, Login, Logout)
Real-time Messaging
Group Chat Support
Media Sharing (Images, Videos)
Responsive Design

**Technology Stack:**
Frontend: React
Backend: Node.js, Express.js
Database: MongoDB
WebSockets: Socket.io for real-time communication

**Prerequisites:**
Node.js
MongoDB

**Installation:**
Clone the Repository
cd slash-chat

**Backend Setup**
1.Navigate to the backend directory:
cd backend

2.Install dependencies:
npm install

3.Create a .env file with the following content:
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>

4.Start the backend server:
npm start


**Frontend Setup**
1.Navigate to the frontend directory:
cd ../frontend

2.Install dependencies:
npm install

3.Create a .env file with the following content:
REACT_APP_API_URL=http://localhost:5000

4.Start the frontend development server:
npm start

**Usage**
Access the application in your browser at http://localhost:3000.
Sign up for a new account or log in with an existing account.
Start chatting with your friends in real-time.
