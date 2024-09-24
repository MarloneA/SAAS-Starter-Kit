# Starter Kit README

## Introduction

Welcome to the Starter Kit! This project is built with Next.js, Shadcn UI, and Auth.js authentication. It provides a robust foundation for building web applications with modern front-end technologies and secure authentication mechanisms.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Features](#features)
4. [Configuration](#configuration)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Ensure you have the following installed:

- Node.js (v20.x or later)
- Package manager for Node.js projects
  - npm (suggested)
  - yarn

### Installation

Clone the repository:

```sh
git clone https://github.com/MarloneA/SAAS-Starter-Kit.git
cd SAAS-Starter-Kit
```

Install the dependencies:

```sh
npm install
# or
yarn install
```

### Configuration

The configuration will

### Auth.js Setup

Follow along with [the installation guide](https://authjs.dev/getting-started/installation).

Otherwise, go ahead and run the following command.

```sh
npx auth secret
```

### Database setup

This application uses Postgres and Prisma. You'll have to setup your `DATABASE_URL` within your `.env` file.

> [!NOTE] This is different to the environment variables you would setup with Next.js since that uses `.env.local`

- See: [Connect your database using TypeScript and PostgreSQL | Prisma Documentation](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql)
- Also, for a deeper dive into connection URLs, see [Connection URLs (Reference) | Prisma Documentation](https://www.prisma.io/docs/orm/reference/connection-urls)

Then migrate the schema

```sh
npx prisma migrate dev --name init
```

You should see something like the following:

```text
Applying migration `20240627104047_init`
Applying migration `20240627165126_update_user_records`
Applying migration `20240826232012_add_tables`

The following migration(s) have been applied:

migrations/
  └─ 20240627104047_init/
    └─ migration.sql
  └─ 20240627165126_update_user_records/
    └─ migration.sql
  └─ 20240826232012_add_tables/
    └─ migration.sql
```

### Environment Variables

Create a `.env.local` file in the root directory. This is an example of what will be included in the env file.

```text
AUTH_SECRET=""
```

Create a `.env` for prisma setup

```text
DATABASE_URL=""
```

### Running the Development Server

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:3000`. You should see the application running.

## Project Structure

Here's an overview of the project structure:

```text
SAAS-starter-kit/
├── public/             # Static assets
├── src/
│   ├── components/     # UI components
│   ├── actions/        # Next.js server actions
│   ├── app/            # fullstack web + api
│   ├── lib/            # Utility functions
│   ├── hooks/          # Custom React hooks
│   └── contexts/       # React contexts
│   └── icons/          # UI Icons
│   └── schemas/        # Form validation schemas
│   └── constants/      # App constants
│   └── middleware.ts   # API middleware
├── .env.local          # Environment variables
├── next.config.js      # Next.js configuration
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

## Features

- **Next.js**: A React framework for production.
- **Shadcn UI**: A set of customizable UI components.
- **Auth.js**: Secure and easy-to-use authentication for your application.

## Usage

### Authentication

This starter kit uses Auth.js for authentication. Auth.js provides a seamless way to add user authentication to your application.

[Auth.js Documentation](https://authjs.dev/)

### UI Components

Shadcn UI components are used to build the user interface. These components are highly customizable and can be tailored to fit your design requirements.

[Shadcn UI documentation](https://shadcn.dev/docs)

### Custom Hooks

Custom React hooks are available in the `src/hooks/` directory to help manage state and side effects in your application.

### Contexts

React contexts are used to manage global state, such as user authentication status. These contexts are located in the `src/contexts/` directory.

### Known Issues

#### Error: Cannot access Image.propTypes on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.

This typically happens when you try to use next js Image component directly with next-MDX, not sure why it happened but has been a thing since next 13.3

_fix_: add this code under useMDXComponents custom components

```javascript
Image: (props) => <Image {...props} />;
```

Related to [github issue](https://github.com/hashicorp/next-mdx-remote/issues/405)

## Contributing

We welcome contributions! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

---

Thank you for using this starter kit! If you have any questions or feedback, please feel free to open an issue or contact the maintainers.
