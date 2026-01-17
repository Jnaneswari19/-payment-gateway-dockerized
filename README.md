
# 💳 Payment Gateway (Dockerized Full‑Stack Project)

A full‑stack payment gateway application built with **Spring Boot (backend)**, **React (frontend)**, and **Node.js (webhook + SDK)**.  
The project is fully containerized using **Docker** and orchestrated with **Docker Compose** for reproducibility and evaluator‑friendly setup.

---

## 🚀 Project Overview
- **Backend**: Spring Boot REST API for payment processing.
- **Frontend**: React UI for initiating payments.
- **Webhook**: Node.js service to handle backend callbacks.
- **SDK**: Node.js service simulating external payment SDK integration.
- **Dockerized**: Each service runs in its own container, orchestrated via `docker-compose.yml`.

---

## 🛠️ Tech Stack
- **Java 17 + Spring Boot**
- **React + Webpack**
- **Node.js 18 (Alpine)**
- **Docker & Docker Compose**

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Jnaneswari19/-payment-gateway-dockerized.git
cd payment-gateway-dockerized
```

### 2. Build & Run with Docker Compose
```bash
docker-compose up --build
```

### 3. Access the services
- **Frontend** → `http://localhost:3000` [(localhost in Bing)](https://www.bing.com/search?q="http%3A%2F%2Flocalhost%3A3000%2F")  
- **Backend** → `http://localhost:8080` [(localhost in Bing)](https://www.bing.com/search?q="http%3A%2F%2Flocalhost%3A8080%2F")  
- **Webhook** → `http://localhost:8081` [(localhost in Bing)](https://www.bing.com/search?q="http%3A%2F%2Flocalhost%3A8081%2F")  
- **SDK** → `http://localhost:8082` [(localhost in Bing)](https://www.bing.com/search?q="http%3A%2F%2Flocalhost%3A8082%2F")  

---

## 📸 Proof of Execution (Screenshots)

The following screenshots demonstrate successful setup, execution, and verification of the payment gateway project:

- **Backend Health Check**  
  ![Backend Health](screenshots/backend-health.png)

- **Docker Build Process**  
  ![Docker Build](screenshots/docker-build.png)

- **Docker Compose Up**  
  ![Docker Compose Up](screenshots/docker-compose-up.png)

- **Docker Containers Running (`docker ps`)**  
  ![Docker Containers](screenshots/docker-ps.png)

- **Order Created (Backend)**  
  ![Order Created](screenshots/order-created.png)

- **Order Created via Docker**  
  ![Docker Order Created](screenshots/docker-order-created.png)

- **Curl Test via Docker Compose**  
  ![Curl Test](screenshots/docker-compose-curl.png)

- **SDK Popup (Frontend Integration)**  
  ![SDK Popup](screenshots/sdk-popup.png)

- **Webhook Logs**  
  ![Webhook Logs](screenshots/webhook-logs.png)


## 📂 Project Structure
```
payment-gateway-dockerized/
│── backend/          # Spring Boot backend
│── frontend/         # React frontend
│── webhook/          # Node.js webhook service
│── sdk/              # Node.js SDK service
│── docker/           # Dockerfiles for services
│── docker-compose.yml
│── screenshots/      # Proof of execution images
│── docs/             # Documentation
│── .gitignore
│── README.md
│── LICENSE
```

---

## 🧹 Repo Hygiene
- `.gitignore` excludes `target/`, `node_modules/`, and logs.
- Clear commit history: Step‑wise commits (packaging, Dockerization, proof).
- Screenshots included for evaluator transparency.

---

## 🏆 Achievements
- ✅ Backend packaged into runnable JAR (`payment-backend-0.0.1-SNAPSHOT.jar`)
- ✅ Dockerized all services with clean `Dockerfile`s
- ✅ Verified full stack runs via Docker Compose
- ✅ Uploaded proof screenshots for evaluator review
- ✅ Polished documentation for professional submission

---

## 👩‍💻 Author
**Jnaneswari**  
Ambitious backend engineer passionate about reproducible setups, repo polish, and evaluator‑friendly workflows.
```

---

