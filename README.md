# 🌍 React + Node + Express: Epic Places App

Welcome to the **Epic Places App**! This project is a full-stack web application built with React (frontend) and Express (backend). It lets you browse, save, and manage amazing places from around the world. Yes, there are images. Yes, you can save your favorites.

---

## 🚀 Project Structure

```
Sending HTTP Requests/
├── backend/           # Express.js backend (API, static images, data)
│   ├── app.js         # Main server file
│   ├── data/          # JSON data files
│   └── images/        # Place images
├── public/            # Static assets for frontend
├── src/               # React frontend source code
│   ├── components/    # React components
│   └── assets/        # Frontend images/assets
├── index.html         # App entry point
└── ...
```

---

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone <this-repo-url>
cd "Sending HTTP Requests"
```

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ..
npm install
```

### 3. Run the App

#### Start Backend (Express)

```bash
cd backend
node app.js
```

Server runs at: [http://localhost:3000](http://localhost:3000)

#### Start Frontend (React + Vite)

```bash
cd ..
npm run dev
```

Frontend runs at: [http://localhost:5173](http://localhost:5173) (default Vite port)

---

## 📡 API Endpoints (Backend)

- `GET /places` — Get all available places
- `GET /user-places` — Get user's saved places
- `PUT /user-places` — Update user's saved places (send `{ places: [...] }` in JSON body)
- Static images: `/images/<image-name>.jpg`

> **Pro tip:** The backend uses CORS, so your frontend can talk to it without drama. 🎭

---

## 🧩 Frontend

- Built with React 19 + Vite
- Components for places, modals, error handling, progress bar, and more
- Fetches data from the backend using HTTP requests (no GraphQL, no gRPC, just good ol' REST)

---

## 📦 Dependencies

- **Backend:** express, body-parser
- **Frontend:** react, react-dom, vite, eslint, and friends

---

## 🖼️ Images

All place images are served from the backend `/images` folder. No copyright infringement intended — these are for demo purposes!

---

## 🤓 Dev Notes

- Data is stored in JSON files (no database, no problem)
- Hot reload for frontend via Vite
- Backend is minimal, but you can extend it (add POST, DELETE, authentication, etc.)
- If you break it, you get to keep both pieces

---

## 📬 Contact

For questions, memes, or bug reports, open an issue or send a carrier pigeon.
