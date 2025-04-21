import type { FileTemplate } from "./types"

export const templates: FileTemplate[] = [
  // Git related
  {
    id: "gitignore",
    name: ".gitignore",
    content: `# Dependencies
node_modules
.pnp
.pnp.js

# Testing
coverage

# Next.js
.next/
out/

# Production
build
dist

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts`,
    language: "plaintext",
    description: "Standard .gitignore file for Node.js projects",
    category: "Git"
  },
  {
    id: "gitkeep",
    name: ".gitkeep",
    content: "",
    language: "plaintext",
    description: "Empty file to keep an empty directory in Git",
    category: "Git"
  },
  
  // Environment files
  {
    id: "env",
    name: ".env",
    content: `# Environment Variables
API_KEY=your_api_key_here
DATABASE_URL=your_database_url_here
PORT=3000`,
    language: "plaintext",
    description: "Environment variables configuration",
    category: "Environment"
  },
  {
    id: "env-local",
    name: ".env.local",
    content: `# Local Environment Variables (Not committed to Git)
API_KEY=your_local_api_key_here
DATABASE_URL=your_local_database_url_here
DEBUG=true`,
    language: "plaintext",
    description: "Local environment variables (not committed to Git)",
    category: "Environment"
  },
  
  // Config files
  {
    id: "package-json",
    name: "package.json",
    content: `{
  "name": "my-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}`,
    language: "json",
    description: "NPM package configuration",
    category: "Configuration"
  },
  {
    id: "tsconfig",
    name: "tsconfig.json",
    content: `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`,
    language: "json",
    description: "TypeScript configuration",
    category: "Configuration"
  },
  {
    id: "prettierrc",
    name: ".prettierrc",
    content: `{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80
}`,
    language: "json",
    description: "Prettier code formatter configuration",
    category: "Configuration"
  },
  {
    id: "eslintrc",
    name: ".eslintrc.json",
    content: `{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "warn"
  }
}`,
    language: "json",
    description: "ESLint configuration",
    category: "Configuration"
  },
  {
    id: "editorconfig",
    name: ".editorconfig",
    content: `# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true
charset = utf-8
trim_trailing_whitespace = true
indent_style = space
indent_size = 2

# 4 space indentation for Python files
[*.py]
indent_size = 4

# Tab indentation for Makefiles
[Makefile]
indent_style = tab`,
    language: "plaintext",
    description: "EditorConfig configuration",
    category: "Configuration"
  },
  
  // Documentation
  {
    id: "readme",
    name: "README.md",
    content: `# Project Name

A brief description of what this project does and who it's for.

## Installation

\`\`\`bash
npm install my-project
cd my-project
npm run dev
\`\`\`

## Features

- Feature 1
- Feature 2
- Feature 3

## API Reference

\`\`\`javascript
// Example API usage
const api = require('my-api');
const data = api.getData();
\`\`\`

## License

[MIT](https://choosealicense.com/licenses/mit/)`,
    language: "markdown",
    description: "Project README file",
    category: "Documentation"
  },
  {
    id: "license",
    name: "LICENSE",
    content: `MIT License

Copyright (c) 2023 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
    language: "plaintext",
    description: "MIT License file",
    category: "Documentation"
  },
  
  // Web Development
  {
    id: "html-template",
    name: "index.html",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>About Us</h2>
      <p>This is a sample website template.</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2023 My Website. All rights reserved.</p>
  </footer>
  
  <script src="script.js"></script>
</body>
</html>`,
    language: "html",
    description: "Basic HTML template",
    category: "Web Development"
  },
  {
    id: "css-template",
    name: "styles.css",
    content: `/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav ul li a:hover {
  color: #0070f3;
}

main {
  padding: 40px 0;
}

section {
  margin-bottom: 40px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

p {
  margin-bottom: 15px;
}

footer {
  padding: 20px 0;
  border-top: 1px solid #eee;
  text-align: center;
}`,
    language: "css",
    description: "Basic CSS template",
    category: "Web Development"
  },
  {
    id: "js-template",
    name: "script.js",
    content: `// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Document loaded and ready!');
  
  // Example of a simple interactive element
  const header = document.querySelector('h1');
  if (header) {
    header.addEventListener('click', function() {
      this.style.color = getRandomColor();
    });
  }
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // You can add more JavaScript functionality here
});`,
    language: "javascript",
    description: "Basic JavaScript template",
    category: "Web Development"
  },
  
  // Backend Development
  
  {
    id: "github-workflow",
    name: ".github/workflows/ci.yml",
    content: `name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x, 18.x]
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'
    - name: Install dependencies
      run: npm ci
    - name: Run linter
      run: npm run lint
    - name: Run tests
      run: npm test
    - name: Build
      run: npm run build`,
    language: "yaml",
    description: "GitHub Actions CI workflow",
    category: "CI/CD",
  },
  
  {
    id: "next-api",
    name: "api/hello.js",
    content: `// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe', message: 'Hello from the API!' })
}`,
    language: "javascript",
    description: "Next.js API route template",
    category: "Backend Development"
  },
  {
    id: "express-server",
    name: "server.js",
    content: `const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/items', (req, res) => {
  // Example data
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const { name } = req.body;
  // In a real app, you would save to a database
  res.status(201).json({ id: Date.now(), name });
});

// Start server
app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`,
    language: "javascript",
    description: "Express.js server template",
    category: "Backend Development"
  },
  
  // Database
  {
    id: "sql-schema",
    name: "schema.sql",
    content: `-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Posts table
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Comments table
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_comments_post_id ON comments(post_id);
CREATE INDEX idx_comments_user_id ON comments(user_id);`,
    language: "sql",
    description: "SQL database schema template",
    category: "Database"
  },
  
  // Shell scripts
  {
    id: "bash-script",
    name: "deploy.sh",
    content: `#!/bin/bash

# Simple deployment script

echo "Starting deployment process..."

# Variables
APP_NAME="my-app"
DEPLOY_DIR="/var/www/$APP_NAME"
BACKUP_DIR="/var/backups/$APP_NAME"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Create backup
echo "Creating backup..."
mkdir -p $BACKUP_DIR
cp -r $DEPLOY_DIR $BACKUP_DIR/$TIMESTAMP

# Pull latest code
echo "Pulling latest code..."
cd $DEPLOY_DIR
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building application..."
npm run build

# Restart the service
echo "Restarting service..."
pm2 restart $APP_NAME

echo "Deployment completed successfully!"`,
    language: "bash",
    description: "Bash deployment script template",
    category: "Shell Scripts"
  },
  
  // Docker
  {
    id: "dockerfile",
    name: "Dockerfile",
    content: `FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]`,
    language: "dockerfile",
    description: "Dockerfile for Node.js applications",
    category: "Docker"
  },
  {
    id: "docker-compose",
    name: "docker-compose.yml",
    content: `version: '3'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://postgres:postgres@db:5432/mydb
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:14-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_DB=mydb
    ports:
      - "5432:5432"

volumes:
  postgres_data:`,
    language: "yaml",
    description: "Docker Compose configuration",
    category: "Docker"
  },
  
  // CI/CD

];
