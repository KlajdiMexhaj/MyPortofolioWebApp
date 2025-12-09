MyPortofolioWebApp

A full-stack portfolio application showcasing both React + TypeScript on the frontend and Python + Flask on the backend.
Built as a demonstration of modern, clean, maintainable full-stack architecture.

📌 Features

Fully separated frontend and backend

Modern React + TypeScript UI

Flask API with clean routing

Ready for local development or deployment

Easy to extend with more portfolio sections, projects, media, or services



📂 Project Structure
MyPortofolioWebApp/
│
├── my-app-frontend/    # React + TypeScript (Vite)
├── my-app-backend/     # Python Flask REST API
│
├── LICENSE
├── README.md
└── .gitignore


🚀 Getting Started
1. Clone the repository
git clone https://github.com/KlajdiMexhaj/MyPortofolioWebApp.git
cd MyPortofolioWebApp

🖥️ Frontend (React + TypeScript)
Install dependencies
cd my-app-frontend
npm install

Run development server
npm run dev


The frontend will start on:

http://localhost:3000

🧠 Backend (Python + Flask)
Create virtual environment (recommended)
cd my-app-backend
python -m venv venv
venv\Scripts\activate   # Windows

Install backend dependencies
pip install -r requirements.txt

Run the Flask server
python app.py


The backend will start on:

http://localhost:5001

🔗 API & Frontend Integration

The React app communicates with the Flask API via fetch/axios.
You can configure API URLs inside your frontend environment files (.env).

📦 Build for Production
Frontend build
npm run build


This outputs the production build into /dist.

Backend production

Deploy the Flask app using:

Gunicorn

Docker

Render

Railway

AWS / Azure / Google Cloud

📜 License

This project is licensed under the MIT License — see the LICENSE file for details.