# Starter Kit README

## Introduction

Welcome to the Starter Kit! This project is built with Next.js, Shadcn UI, and Clerk authentication. It provides a robust foundation for building web applications with modern front-end technologies and secure authentication mechanisms.

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

#### Clerk Authentication

> [!NOTE] Skip this section for now. This is still in the works

This project requires [Clerk Authentication](https://clerk.com/) API setup before you begin.

- Create an account if you don't have one already
  - You can use GitHub or GitLab OAuth
- Input your application name and select at minimum email and Google. Then click on "Create Application"
  - This will build out your `<SignIn />` component
- Copy the environment files (see [Environment Variables](#environment-variables) on where to place those values)
  - If you followed along with the instructions for installing `package.json` dependencies, you won't need to install `@clerk/nextjs`

### Auth.js Setup

Follow along with [the installation guide](https://authjs.dev/getting-started/installation).

Otherwise, go ahead and run the following command.

```sh
npx auth secret
```

### Database setup

This application uses Postgres and Prisma. You'll have to setup your `DATABASE_URL` within `schema.prisma`.

#### Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```text
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
CLERK_API_KEY=<your-clerk-api-key>
```

Replace `<your-clerk-frontend-api>` and `<your-clerk-api-key>` with your actual Clerk credentials.

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

```
starter-kit/
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
- **Clerk Authentication**: Secure and easy-to-use authentication for your application.

## Usage

### Authentication

This starter kit uses Clerk for authentication. Clerk provides a seamless way to add user authentication to your application. For more details on how to use Clerk, refer to the [Clerk documentation](https://clerk.dev/docs).

### UI Components

Shadcn UI components are used to build the user interface. These components are highly customizable and can be tailored to fit your design requirements. For more details, refer to the [Shadcn UI documentation](https://shadcn.dev/docs).

### Custom Hooks

Custom React hooks are available in the `src/hooks/` directory to help manage state and side effects in your application.

### Contexts

React contexts are used to manage global state, such as user authentication status. These contexts are located in the `src/contexts/` directory.

### Known Issues

###### Error: Cannot access Image.propTypes on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.

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

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thank you for using this starter kit! If you have any questions or feedback, please feel free to open an issue or contact the maintainers.
