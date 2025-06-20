# 📚 Book Review Web Application (MERN Stack)

A modern, full-stack web app to browse, review, and discover books! Built with MongoDB, Express.js, React.js, and Node.js.


---

## ✨ Features
- ⚡ **Responsive UI**: Seamless experience across devices
- 🔍 **Search**: Find books by title, author, or genre
- 📖 **Book Details**: View title, author, description, rating, and reviews
- 📝 **User Reviews**: Submit ratings and comments
- ✅ **Form Validation**: Ensures data integrity
- 📊 **Pagination & Sorting**: Easy navigation and organization
- 🔐 **Authentication**: Register, log in, and personalize
- ⭐ **Favorites**: Mark books for quick access

---

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/cheshta0112/BookReview-Application.git
cd BookReview-Application
```

### 2. Install dependencies for both client & server
```bash
cd client
npm install
cd ../Server
npm install
```

### 3. Set up environment variables
- Create a `.env` file in `/Server` and `/client` (see `.env.example` if available)
- Example for `/Server/.env`:
```
PORT=5000
SECRET=yourSecretKey
MONGODB_URI=yourMongoDBConnectionString
FRONTEND_URL=http://localhost:3000
```
- Example for `/client/.env`:
```
REACT_APP_API_URL=http://localhost:5000
```

### 4. Start the development servers
- In one terminal:
```bash
cd Server
npm start
```
- In another terminal:
```bash
cd client
npm start
```

---

## 💡 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
[MIT](LICENSE)

---

# BookReview Application

This is a full-stack Book Review web application with a React frontend and a Node.js/Express backend.

## Prerequisites
- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

## Project Structure
- `client/` — React frontend
- `Server/` — Node.js/Express backend

---

## 1. Install Dependencies

### Backend (Server)
1. Open a terminal and navigate to the `Server` directory:
   ```sh
   cd Server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Frontend (Client)
1. Open a new terminal and navigate to the `client` directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

---

## 2. Start the Application

### Start the Backend Server
In the `Server` directory, run:
```sh
npm start
```
This will start the backend API server (by default on port 5000).

### Start the Frontend React App
In the `client` directory, run:
```sh
npm start
```
This will start the React development server (by default on port 3000).

---

## 3. Usage
- Open your browser and go to [http://localhost:3000](http://localhost:3000)
- Register or log in to start using the Book Review application.

---

## 4. Notes
- Make sure both the backend and frontend servers are running for the app to work correctly.
- If you change backend ports, update the API URLs in the frontend accordingly.

---

## 5. Troubleshooting
- If you encounter issues, ensure all dependencies are installed and both servers are running.
- For any database-related errors, check your MongoDB connection settings in `Server/dbConnection.js`.

---

## 6. Customization
- You can modify styles in `client/src/index.css` and `client/src/App.css`.
- Backend logic can be updated in the `Server/src/controllers` and `Server/src/models` folders.

---

## License
This project is for educational purposes.
