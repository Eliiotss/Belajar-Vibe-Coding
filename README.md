# Belajar Vibe Coding

Backend project built with **Bun**, **ElysiaJS**, **Drizzle ORM**, and **MySQL**.

## Getting Started

### 1. Install Dependencies
```bash
bun install
```

### 2. Environment Variables
Copy `.env.example` to `.env` and configure your MySQL credentials:
```bash
cp .env.example .env
```

### 3. Database Migration
Generate and run migrations:
```bash
bun run db:generate
bun run db:push
```

### 4. Run Development Server
```bash
bun run dev
```

Server will be running at `http://localhost:3000`.
Health check endpoint: `http://localhost:3000/health`.
