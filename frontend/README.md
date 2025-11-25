# Mental Coach Frontend

A modern, responsive Next.js frontend for the Mental Coach Assistant application. This frontend provides a beautiful chat interface that connects to the FastAPI backend.

## Features

- 🎨 Modern, clean UI with Tailwind CSS
- 💬 Real-time chat interface with message history
- 📱 Fully responsive design
- ⚡ Fast and optimized with Next.js 14
- 🎯 Excellent UX with loading states and error handling
- 🌈 Beautiful gradient design with high contrast for accessibility

## Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- The FastAPI backend should be running (see `/api/README.md`)

## Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

### Development Mode

Start the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`.

**Important:** Make sure your FastAPI backend is running on `http://localhost:8000` for the frontend to connect to it.

### Production Build

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Configuration

The frontend is configured to connect to the backend API. By default, it will use:
- Local development: `/api/chat` (relative URL, assumes backend on same domain)
- Production: The API will be proxied through Vercel

To configure a custom API URL, set the `NEXT_PUBLIC_API_URL` environment variable:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000 npm run dev
```

## Project Structure

```
frontend/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Main chat page
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/          # React components
│   └── ChatInterface.tsx  # Main chat component
├── lib/                # Utility functions
│   └── api.ts          # API client
└── package.json        # Dependencies and scripts
```

## Usage

1. Start the backend server (see `/api/README.md`)
2. Start the frontend development server (`npm run dev`)
3. Open `http://localhost:3000` in your browser
4. Start chatting with your mental coach!

## Deployment

This frontend is configured for Vercel deployment. The `vercel.json` in the project root handles routing between the frontend and backend.

To deploy:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Next.js app and deploy it

The frontend will automatically connect to the backend API routes configured in Vercel.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
