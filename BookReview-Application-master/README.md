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





#   B o o k - r e v i e w - P l a t f o r m  
 