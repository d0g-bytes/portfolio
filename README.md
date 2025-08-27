# Portfolio Application

A full-stack portfolio application built with React, TypeScript, Express.js, and PostgreSQL, all containerized with Docker.

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS + Framer Motion + Vite
- **Backend**: Express.js + TypeScript + PostgreSQL
- **Containerization**: Docker + Docker Compose
- **Database**: PostgreSQL

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your system
- Git (to clone the repository)

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Set up environment variables**

   ```bash
   # Copy example environment files
   cp backend/env.example backend/.env
   cp frontend/env.example frontend/.env
   ```

3. **Start the development environment**

   ```bash
   npm run dev
   ```

   This will start:

   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - PostgreSQL database on port 5432

### Available Scripts

| Command                 | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `npm run dev`           | Start development environment with hot reload        |
| `npm run dev:detached`  | Start development environment in background          |
| `npm run stop`          | Stop development environment                         |
| `npm run clean`         | Stop and remove all containers, volumes, and orphans |
| `npm run logs`          | View logs from all services                          |
| `npm run logs:backend`  | View backend logs only                               |
| `npm run logs:frontend` | View frontend logs only                              |
| `npm run prod`          | Start production environment                         |
| `npm run install:all`   | Install dependencies for both frontend and backend   |

### Development Workflow

1. **Start the development environment**:

   ```bash
   npm run dev
   ```

2. **Make changes** to your code - changes will be automatically reflected due to hot reload

3. **View logs** if needed:

   ```bash
   npm run logs
   ```

4. **Stop the environment** when done:
   ```bash
   npm run stop
   ```

### Project Structure

```
portfolio/
├── backend/                 # Express.js API
│   ├── src/                # Source code
│   ├── Dockerfile          # Production Docker image
│   ├── Dockerfile.dev      # Development Docker image
│   ├── .prettierrc         # Backend Prettier config
│   ├── tsconfig.json       # TypeScript configuration
│   └── package.json        # Backend dependencies & scripts
├── frontend/               # React application
│   ├── src/               # Source code
│   ├── Dockerfile         # Production Docker image
│   ├── Dockerfile.dev     # Development Docker image
│   ├── .prettierrc        # Frontend Prettier config
│   ├── vite.config.ts     # Vite configuration
│   └── package.json       # Frontend dependencies & scripts
├── .vscode/               # VS Code settings
│   ├── settings.json      # Auto-format on save
│   └── extensions.json    # Recommended extensions
├── docker-compose.yml     # Production configuration
├── docker-compose.dev.yml # Development configuration
├── .dockerignore          # Docker ignore rules
└── package.json          # Root scripts & project info
```

### Environment Variables

#### Backend (`backend/.env`)

- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (default: 5000)
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: Secret for JWT tokens
- `FRONTEND_URL`: Frontend URL for CORS

#### Frontend (`frontend/.env`)

- `VITE_API_URL`: Backend API URL
- `VITE_APP_TITLE`: Application title

### Database

The PostgreSQL database runs in a separate container with persistent data storage. The database will be automatically initialized on first run.

### Production Deployment

For production deployment:

```bash
npm run prod
```

This will build optimized versions of both frontend and backend and serve them through nginx and Node.js respectively.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run dev`
5. Submit a pull request

## License

ISC
