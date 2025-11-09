export const Htmltopics = {
  HTML: {
    title: "HTML - Structure of the Web",
    description:
      "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using tags like <html>, <head>, <body>, <p>, <a>, and many more.",
    examples: [
      `<!DOCTYPE html>
        <html>
        <head>
            <title>My First Page</title>
        </head>
        <body>
            <h1>Hello World!</h1>
        </body>
    </html>`,
    ],
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    content: [
      `HTML is the backbone of every web page. It defines the structure and layout of content using elements and tags.
Key Points:
Describes how text, images, links, and other content appear on a web page.
Each HTML page begins with <!DOCTYPE html> and includes <html>, <head>, and <body> sections.
Tags are written inside angle brackets — e.g., <p>, <a>, <h1>.

Important Topics:
HTML Structure – Understanding <html>, <head>, and <body> tags.
Text Formatting – Using headings, paragraphs, bold, italic, and lists.
Links and Images – Adding hyperlinks and displaying images.
Tables and Forms – Creating structured data and input fields.
Semantic Tags – Using <header>, <footer>, <article>, <section> for better readability.
Media Elements – Embedding video, audio, and iframes.

Goal:
Learn to create a well-structured static webpage using HTML only.`,
    ],
  },
  CSS: {
    title: "CSS - Styling the Web",
    description:
      "CSS (Cascading Style Sheets) is used to style and layout web pages. You can control colors, fonts, spacing, and responsive design.",
    examples: [
      `body { background-color: #121212; color: white; }
          h1 { color: tomato; },
          p { font-size: 18px; }`,
    ],
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    content: [`
Overview:
CSS styles the content written in HTML — controlling colors, layouts, fonts, and overall page appearance.

Key Points:

Separates design from content.
Uses selectors (like class, id, element) to target HTML elements.
Supports modern layout systems like Flexbox and Grid.

Important Topics:

Selectors and Properties – Targeting elements and applying styles.
Box Model – Understanding margin, border, padding, and content area.
Positioning – Using relative, absolute, fixed, and sticky.
Flexbox & Grid – Building modern, responsive layouts.
Colors and Fonts – Applying typography and color schemes.
Transitions & Animations – Adding smooth visual effects.
Media Queries – Making designs responsive for mobile and desktop.

Goal:

Learn to design visually appealing, responsive websites with clean CSS.
        `],
  },
  JavaScript: {
    title: "JavaScript - Logic of the Web",
    description:
      "JavaScript adds interactivity to your websites. You can respond to user actions, manipulate the DOM, and even communicate with servers using APIs.",
    examples: [
      `document.getElementById('demo')
      .innerHTML = 'Hello JavaScript!';
        console.log('JavaScript Loaded');`,
    ],
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    content: [`"
Overview:

JavaScript brings life to web pages by making them interactive. It’s a programming language that runs in the browser (and on servers using Node.js).

Key Points:

Works alongside HTML and CSS to add logic and interactivity.
Manipulates web page elements dynamically through the DOM (Document Object Model).
Supports modern ES6+ features for cleaner, faster coding.

Important Topics:

Basics – Variables, data types, operators, and loops.
Functions – Writing reusable blocks of code.
Arrays & Objects – Storing and managing data efficiently.
DOM Manipulation – Selecting and modifying HTML elements dynamically.
Events – Handling user interactions like clicks and inputs.
ES6+ Concepts – Arrow functions, template literals, destructuring.
Async JavaScript – Using Promises and async/await with APIs.

Goal:
Build interactive web pages and dynamic front-end applications using JavaScript.

Example:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JavaScript Todo List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f3f4f6;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      background: white;
      padding: 20px;
      border-radius: 10px;
      width: 350px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    h2 {
      text-align: center;
      color: #333;
    }
    input {
      width: 75%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
    button {
      padding: 8px 10px;
      margin-left: 5px;
      background: #3b82f6;
      border: none;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    }
    ul {
      margin-top: 15px;
      list-style: none;
      padding: 0;
    }
    li {
      background: #e5e7eb;
      padding: 8px;
      margin: 5px 0;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .delete-btn {
      background: #ef4444;
      border: none;
      color: white;
      padding: 4px 8px;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>📝 JavaScript Todo List</h2>
    <div>
      <input type="text" id="taskInput" placeholder="Enter a new task" />
      <button onclick="addTask()">Add</button>
    </div>
    <ul id="taskList"></ul>
  </div>

  <script>
    // Get elements
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    let tasks = [];

    // Add new task
    function addTask() {
      const task = taskInput.value.trim();
      if (task === "") return alert("Please enter a task!");

      tasks.push(task);
      taskInput.value = "";
      renderTasks();
    }

    // Remove a task
    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

    // Display all tasks
    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = 
          {task}
          <button class="delete-btn" 
          onclick="deleteTask({index})">
          Delete
        </button>
        ;
        taskList.appendChild(li);
      });
    }
  </script>
</body>
</html>

        "`],
  },
  React: {
    title: "React - Build Modern Web Apps",
    description:
      "React is a JavaScript library for building user interfaces. It uses components, props, and state to make development modular and efficient.",
    examples: [
      `function App() { 
           return <h1>Hello React!</h1>;
          }
       export default App;

       //OR

       const App=()=> { 
           return (
               <h1>Hello React!</h1>;
            )}
       export default App;
       `,
    ],
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    content: [`
Overview:

React is a powerful JavaScript library used to build fast, interactive, and component-based user interfaces. It allows developers to create reusable UI components and handle application state efficiently.

Key Points:

Developed and maintained by Meta (Facebook).
Uses a component-based architecture for modular development.
Employs a virtual DOM for efficient UI updates.
JSX (JavaScript XML) is used to write HTML-like syntax in JavaScript.

Important Topics:

Components – Functional and Class components.
Props & State – Passing data and managing internal component data.
Hooks – Using useState, useEffect, and custom hooks for logic.
Routing – Navigation using react-router-dom.
Conditional Rendering – Displaying UI based on conditions.
Context API – Managing global state without props drilling.
API Integration – Fetching and displaying backend data.

Goal:

Build modern, responsive, single-page web apps that handle user interactions smoothly.
        `],
  },
  NodeJS: {
    title: "Node.js - JavaScript on the Server",
    description:
      "Node.js allows you to run JavaScript on the server side. It is built on Chrome's V8 engine and is ideal for scalable backend services.",
    examples: [
      `const http = require('http');
        http.createServer((req,res)=>{
           res.write('Hello from Node.js');
           res.end();
      }).listen(3000);`,
    ],
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    content: [`
Overview:
Node.js is a JavaScript runtime built on Chrome’s V8 engine. It allows developers to use JavaScript for server-side programming, enabling full-stack development with a single language.

Key Points:

Uses an event-driven, non-blocking I/O model for scalability.
Handles file systems, databases, and HTTP requests easily.
Supports npm (Node Package Manager) for installing libraries.

Important Topics:

Modules – Importing and exporting functions.
File System – Reading and writing files.
HTTP Module – Creating web servers.
NPM Packages – Installing and using dependencies.
Environment Variables – Using .env for secure configurations.
Error Handling – Managing exceptions in async operations.
Express Integration – Building APIs using Express.js on Node.

Goal:
Create a backend server capable of handling requests and responses efficiently.
        `],
  },

  ExpressJS: {
    title: "Express.js - Server Framework for Node.js",
    description:
      "Express.js is a lightweight web framework for Node.js that simplifies routing, middleware, and server creation.",
    examples: [
      `const express = require('express');
       const app = express();

       app.get('/', (req,res)=>{
           res.send('Welcome to Express'));
        } 
       app.listen(5000, ()=>{
           console.log('Server running on port 5000')
       });`,
    ],
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    content: [`
Overview:
Express.js is a minimal and flexible Node.js framework used to build robust backend servers and RESTful APIs.

Key Points:

Simplifies routing, middleware handling, and API creation.
Integrates easily with databases and authentication systems.
Works as the main backend framework in the MERN stack.

Important Topics:

Routing – Handling GET, POST, PUT, DELETE requests.
Middleware – Using built-in and custom middleware for logic.
Request & Response – Managing API inputs and outputs.
Error Handling – Handling invalid routes and server issues.
CORS – Managing cross-origin requests from frontend apps.
JWT Authentication – Securing routes using JSON Web Tokens.
Integration with MongoDB – Connecting APIs with a database.

Goal:
Develop RESTful APIs that serve data and handle business logic for web apps.    
        `],
  },

  MongoDB: {
    title: "MongoDB - NoSQL Database",
    description:
      "MongoDB is a document-oriented NoSQL database used for storing large volumes of data in JSON-like documents.",
    examples: [
      `const mongoose = require('mongoose');
      mongoose
      .connect(
      'mongodb://localhost:27017/myDB'
      );
      const UserSchema = new mongoose
      .Schema({
       name: String, 
       email: String 
       });
      const User = mongoose
      .model('User', UserSchema);
      User.create({
       name: 'Tasauvar', 
       email: 'test@example.com' 
       })`,
    ],
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    content: [`
Overview:

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents instead of tables. It’s widely used with Node.js for building scalable applications.

Key Points:

Stores data in collections instead of tables.
Uses BSON (binary JSON) format.
Supports schema-less design for flexibility.
Works perfectly with Express and Node.js.

Important Topics:

Documents & Collections – Core structure of data in MongoDB.
CRUD Operations – Create, Read, Update, Delete data.
Mongoose Library – ODM for MongoDB in Node.js.
Schema & Models – Defining structure and validation.
Queries & Filters – Fetching specific data efficiently.
Aggregation – Performing advanced data analysis.
Connection Handling – Connecting with Node and handling errors.

Goal:
Manage and store dynamic application data effectively using MongoDB.    
        `],
  },
  ReactHooks: {
    title: "React Hooks - Powerful React Features",
    description:
      "Hooks let you use state and lifecycle methods inside functional components. Common hooks include useState, useEffect, and useContext.",
    examples: [
      `import React, { useState, useEffect } from 'react';
      function Timer() {
        const [seconds, setSeconds] = useState(0);
        useEffect(() => {
          const timer = setInterval(() => setSeconds(s => s + 1), 1000);
          return () => clearInterval(timer);
        }, []);",
        return <p>Timer: {seconds}s</p>;
      }`,
    ],
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    content:[ `
Overview:

React Hooks are special functions that let you use state and other React features in functional components — without writing class components.

Key Points:

Introduced in React 16.8.
Allow logic reuse and cleaner, more readable code.
Replace lifecycle methods like componentDidMount with simpler hooks.

Important Hooks:

useState() – Manages state within a component.
useEffect() – Handles side effects like fetching data or updating the DOM.
useContext() – Accesses global data without prop drilling.
useRef() – Refers to DOM elements directly.
useReducer() – Manages complex state logic.
useMemo() – Optimizes performance by memoizing values.
useCallback() – Prevents unnecessary re-rendering of functions.

Goal:
Build dynamic, efficient components with clean and reusable state management.        
        `],
  },
  RESTAPI: {
    title: "REST API - Connecting Frontend & Backend",
    description:
      "REST APIs allow communication between frontend (React) and backend (Node/Express) using HTTP methods like GET, POST, PUT, DELETE.",
    examples: [
      `// Express Example
      app.get('/api/users', (req, res) => res.json(users));
      app.post('/api/users', (req, res) =>{ 
        users.push(req.body); 
        res.send('User added'); 
      });
      
      // React Fetch Example
      useEffect(()=> {
        fetch('/api/users')
        .then(res=>res.json())
        .then(data=>setUsers(data));
      }, []);`,
    ],
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    content: [`
Overview:

A REST API defines a set of rules for creating web services
 that allow communication between client (frontend) and server (backend).
  It uses HTTP methods for data transfer.

Key Points:

Stateless — every request contains all needed information.
Commonly uses JSON format for data exchange.
Built using Express.js in the MERN stack.

HTTP Methods:

GET – Retrieve data from the server.
POST – Send data to the server to create something new.

PUT / PATCH – Update existing data.
DELETE – Remove data from the server.

Example:
Frontend calls → fetch("https://api.example.com/users")
Backend route → app.get("/users", (req, res) => { ... })

Goal:
Connect frontend and backend seamlessly to exchange and manipulate data.       
        `],
  },

  Auth: {
    title: "Authentication using JWT",
    description:
      "Authentication is used to verify users. JWT (JSON Web Token) is a secure way to handle login sessions.",
    examples: [
      `"const jwt = require('jsonwebtoken');
      const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
      app.get('/dashboard', verifyToken, (req,res)=> res.send('Secure Access'));
      
      // Middleware
      function verifyToken(req,res,next){
          const token = req.headers['authorization'];
          if(!token) return res.status(403).send('Access Denied');
          jwt.verify(token,'secretkey',(err,data)=>{
         if(err) return res.status(403).send('Invalid Token');
         next();
        });,
      }"`,
    ],
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    content: [`
Overview:

Authentication ensures that only authorized users can access certain parts of your web app. In MERN, it’s typically done using JWT (JSON Web Tokens).

Key Points:

Signup/Login system validates user credentials.
JWT is generated upon login and stored in localStorage or cookies.
The token is verified in every protected API request.
bcrypt.js is used for password hashing.

Common Auth Flow:

User signs up → data stored in MongoDB.
User logs in → backend verifies credentials.
JWT created & sent → stored in frontend.
Protected routes → backend validates token before access.

Goal:
Secure your app by verifying user identity and protecting private routes.        
        `],
  },

  Deployment: {
    title: "Deployment - Hosting Your MERN App",
    description:
      "Deploy your MERN app on platforms like Render, Netlify, or Vercel for the frontend and MongoDB Atlas for database hosting.",
    examples: [
      `1. Push your code to GitHub.
      2. Deploy backend on Render (https://render.com).
      3. Deploy frontend React app on Netlify or Vercel.
      4. Use MongoDB Atlas for cloud database.",
      5. Connect all URLs in your environment variables.`,
    ],
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    content: [`
Overview:

Deployment is the process of publishing your MERN app online so others can access it.

Key Points:

Frontend (React) can be deployed on Netlify or Vercel.
Backend (Node + Express) is usually hosted on Render, Railway, or VPS.
Database (MongoDB) is hosted using MongoDB Atlas.

Deployment Steps:

Frontend → Build app with npm run build → Deploy /dist or /build folder.
Backend → Push to GitHub → Connect with Render/Railway → Deploy.
Database → Create cluster on MongoDB Atlas and connect URI.
Environment Variables → Store keys like MONGO_URI, JWT_SECRET.
Integration → Link frontend API calls to deployed backend URLs.

Goal:
Make your full MERN app accessible on the internet — stable, scalable, and secure.       
        `],
  },
};
