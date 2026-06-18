---
# 📝 Todo App (React + Apollo Client + GraphQL)

A simple Todo application built with **React**, **Apollo Client**, **GraphQL**, and **Material UI**.
It supports creating, updating, deleting, and toggling todos with real-time cache updates.
---

## 🚀 Features

- ➕ Add new todos
- ✏️ Edit existing todos
- ❌ Delete todos
- ✅ Mark todos as completed
- ⚡ Apollo Client cache updates (no refetch needed)
- 🎨 Styled with Material UI + Emotion
- 🌐 GraphQL API using `json-graphql-server`

---

## 🧱 Tech Stack

- React 19
- Apollo Client 4
- GraphQL
- React Router DOM
- Material UI (MUI)
- Emotion (styled components)
- Vite
- json-graphql-server (mock backend)

---

## 📂 Project Structure

```
src/
├── app/
│   ├── api/         # Apollo Client setup
│   ├── db/          # Mock JSON database
│   ├── router/      # React Router setup
│   ├── styles/      # Global styles
│   └── theme/       # MUI theme
├── components/      # UI components (Form, TodoList, etc.)
├── graphql/         # Queries & mutations
├── hooks/           # Custom hooks (useTodo)
├── pages/           # Pages (Todo page)
└── main.jsx         # App entry point
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Avo444/Todo_Apollo_GraphQL_MaterialUI.git
cd Todo_Apollo_GraphQL_MaterialUI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start mock GraphQL server

```bash
npm run db
```

Server will run on:

```
http://localhost:3000
```

---

### 4. Start development server

```bash
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🌐 Environment Variables

Create a `.env` file in the root:

```env
VITE_BACKEND_API="http://localhost:3000"
```

---

## 📡 GraphQL API

### Queries

```graphql
query {
    allTodos {
        id
        title
        isCompleted
    }
}
```

### Mutations

#### Create Todo

```graphql
mutation CreateTodo($title: String!, $isCompleted: Boolean!) {
    createTodo(title: $title, isCompleted: $isCompleted) {
        id
        title
        isCompleted
    }
}
```

#### Update Todo

```graphql
mutation UpdateTodo($id: ID!, $title: String, $isCompleted: Boolean) {
    updateTodo(id: $id, title: $title, isCompleted: $isCompleted) {
        id
        title
        isCompleted
    }
}
```

#### Remove Todo

```graphql
mutation RemoveTodo($id: ID!) {
    removeTodo(id: $id) {
        id
    }
}
```

---

## 🎨 UI Theme

Custom Material UI theme:

- Primary: `#9D6638`
- Secondary: `#B0BA99`
- Background: `#F7F1DE`
- Font: `Raleway`

---

## 🧠 Apollo Client Setup

```js
export const client = new ApolloClient({
    link: new HttpLink({
        uri: import.meta.env.VITE_BACKEND_API,
    }),
    cache: new InMemoryCache(),
});
```

---

## 📦 Scripts

```bash
npm run dev      # Start frontend
npm run build    # Build project
npm run preview  # Preview build
npm run db       # Start GraphQL mock server
npm run lint     # Run ESLint
```

---

## 📌 Notes

- This project uses **Apollo cache updates** instead of refetching queries.
- Backend is a mock server (`json-graphql-server`).
- Designed for learning GraphQL + React architecture.

---

## 📄 License

This project is open-source and free to use.

---
