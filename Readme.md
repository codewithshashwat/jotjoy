
# 📝 JotJoy

**JotJoy** is a minimalist and modern note-taking web app built with **React**, **Tailwind CSS**, and **TypeScript**. It allows users to create, read, and delete notes seamlessly — all stored in the browser via `localStorage`.

---

## ✨ Slogan

**"Jot it down, feel the joy!"**

---

## 🚀 Features

- 🖊️ Create and delete text notes easily
- 💾 Persistent storage using localStorage
- 💡 Beautiful UI with blue gradient themes
- 📱 Fully responsive design
- ⚡ Fast performance – no backend required

---

## 🧰 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)

---

## 📁 Folder Structure

```
jotjoy/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── NoteList.tsx
│   │   └── AddNote.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
└── package.json
```

---

## 🎨 UI/UX Design

### 🌈 Gradients Used

- **Navbar**: `#1e3c72 → #2a5298` (Aqua Dream)
- **Main UI**: `#4facfe → #00f2fe`

### 🖋️ Font

- **Ubuntu** with weights: Light, Regular, Medium, Bold

---

## 🔧 How to Run

1. **Clone the repository**
```bash
git clone https://github.com/your-username/jotjoy.git
cd jotjoy
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

Your app will be available at: `http://localhost:5173`

---

## 📂 Functionality

- **Note Storage**: Notes are stored in `localStorage`, so your data persists even after page refreshes.
- **No login, no fuss**: Just open and start jotting.
- **CRUD**: Add and delete notes — that's the "Joy" part!

---

## 🤔 Why LocalStorage?

This app is made to be **super lightweight** and **offline-friendly**. Storing notes in `localStorage` ensures they are fast to access and don’t require a backend.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

> JotJoy – _Just type it down, your thoughts deserve a place._
