# 🎬 Moodflix

**Moodflix** is a website project made using **React.js** for the user interface, **Appwrite** for the Trending Movies Algorithm, and styled with **TailwindCSS.**The platform offers a sleek and modern experience for browsing and discovering movies.

---

## 🔋 Features

- 🔥 **Browse All Movies**: Explore a wide range of movies available on the platform.
- 💅 **Search Movies**: Easily search for specific movies using a search function.
- 🎬 **Movie Details Modal** – View movie info like rating, genres, cast, and overview in a modal popup.
- 🎯 **Trending Movies Algorithm**: Displays trending movies based on a dynamic algorithm.
- ⚡ **Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.
- ✨ **Responsiveness**: Fully responsive design that works seamlessly across devices.
       and many more, including code architecture and reusability
---

## 🛠️ Tech Stack

| Tech        | Purpose                  |
|-------------|--------------------------|
| React.js    | Frontend UI              |
| Appwrite    | Backend, DB, Auth        |
| TailwindCSS | Styling and Responsiveness |


---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/73be9ddc-7494-4d3b-a29e-0c5e7b8cebd7)

---
![image](https://github.com/user-attachments/assets/c522718b-b86b-4186-953f-3ae8706523db)


---
![image](https://github.com/user-attachments/assets/4f045643-19d9-4b84-893c-828aed99540c)


## 📦 Installation & Setup

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/JavaScript-Mastery-Pro/moodflix.git
cd moodflix
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
VITE_IMDB_API_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

Replace the placeholder values with your actual **[TheMovieDatabase API](https://developer.themoviedb.org/reference/intro/getting-started)** and **[Appwrite](https://apwr.dev/JSM050)** credentials. You can obtain these credentials by signing up on the [TheMovieDatabase](https://developer.themoviedb.org/reference/intro/getting-started) and creating a new project on the [Appwrite](https://apwr.dev/JSM050)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
