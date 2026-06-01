# Internship Reward DApp

Internship Reward DApp is a React and Node.js based web application developed to demonstrate frontend-backend integration in a Web3-inspired reward distribution system.

The application allows users to connect a MetaMask wallet, distribute rewards to multiple wallet addresses, view distributed addresses in a dynamic table, and check reward balances.

---
## Features

* MetaMask Wallet Connection
* React Frontend Interface
* Express.js Backend API
* Reward Distribution System
* Dynamic Address Management
* Balance Checking Functionality
* Frontend to Backend Communication using Axios
* Responsive User Interface

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd Internship_Reward_Dapp
```

### Install Frontend Dependencies

```bash
npm install
```

### Start Frontend

```bash
npm start
```

Frontend runs at:

```text
http://localhost:3000
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start server:

```bash
node server.js
```

Backend runs at:

```text
http://localhost:5000
```

---

## API Endpoints

### Get Reward Data

```http
GET /reward
```

### Store Reward Distribution

```http
POST /reward
```

### Sample Request

```json
{
  "addresses": [
    "0x111",
    "0x222",
    "0x333"
  ]
}
```

---

## Application Workflow

1. Connect MetaMask wallet.
2. Enter wallet addresses separated by commas.
3. Click **Distribute Token**.
4. Frontend sends data to Express backend using Axios.
5. Backend stores reward information.
6. Distributed addresses are displayed in a dynamic table.
7. Users can search an address and view its reward balance.
