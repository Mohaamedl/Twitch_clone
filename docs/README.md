**twitch** • [**Docs**](modules.md)

***

# Twitch Clone

A modern web application that replicates core features of Twitch, built with Next.js, React, and Prisma.

## Features

- User authentication with Clerk
- Live streaming capabilities
- User profiles
- Follow system
- Responsive design
- Real-time chat(coming soon)

## Tech Stack

- [Next.js 14+](https://nextjs.org/) - React framework for building the UI
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Open-source relational database
- [Clerk](https://clerk.dev/) - Authentication and user management
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/mohaamedl/twitch-clone.git
   cd twitch-clone
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   DATABASE_URL="your_postgresql_connection_string"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   ```

4. Run Prisma migrations:
   ```
   npx prisma migrate dev
   ```

5. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/` - Next.js 14 app directory
- `components/` - Reusable React components
- `lib/` - Utility functions and shared logic
- `prisma/` - Prisma schema and migrations
- `public/` - Static assets
- `store/` - Zustand store configurations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
