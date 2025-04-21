# Micro-Nuxt Frontend

This is a micro-frontend architecture built with Nuxt.js 3, featuring a clean and professional structure.

## Project Structure

```
micro-nuxt/
├── apps/                  # Micro-frontend applications
│   ├── feature1/         # First feature application
│   └── feature2/         # Second feature application
├── shared/               # Shared components and utilities
├── nginx/                # Nginx configuration
│   ├── conf.d/          # Virtual host configurations
│   └── nginx.conf       # Main Nginx configuration
├── docker-compose.yml    # Docker Compose configuration
├── package.json
└── README.md
```

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

### Docker Deployment

1. Build and start all services:
```bash
docker-compose up --build
```

2. To run in detached mode:
```bash
docker-compose up -d --build
```

3. Stop all services:
```bash
docker-compose down
```

4. View logs:
```bash
docker-compose logs -f
```

## Accessing the Applications

- Feature 1: http://localhost/feature1
- Feature 2: http://localhost/feature2

## Features

- Clean architecture with separation of concerns
- TypeScript support
- Tailwind CSS for styling
- ESLint and Prettier for code quality
- Shared components and utilities
- Micro-frontend architecture for better maintainability
- Docker containerization
- Nginx reverse proxy for routing

## Development Guidelines

- Each feature should be self-contained in its own directory
- Shared components should be placed in the `shared` directory
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain consistent code formatting with Prettier
- Use Docker for consistent development and deployment environments 