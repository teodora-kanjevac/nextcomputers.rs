# nextcomputers.rs

Welcome to nextcomputers.rs, an e-commerce platform designed to provide a seamless shopping experience for a wide range of tech products. Our web shop offers everything from the latest computer hardware to essential home appliances, ensuring you find what you need, all in one place.

## Installation

Make sure to install **node.js** from their official [website](https://nodejs.org/en).

## Installing Dependencies

First, set Execution Policy to `Remote Signed` in PowerShell

```bash
Set-ExecutionPolicy  RemoteSigned
```

Next, install `pnpm` with the command:

```bash
npm  install  -g  pnpm
```

Run the `pnpm` setup through the command:

```bash
pnpm  setup
```

Install all the dependencies with this command:

```bash
pnpm  install
```

-   Run this command in both **frontend**, **backend** and the **main project** folder to install all dependencies of the project.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm  dev
```

Run scripts in the main project folder (`D:\Next-Computers`) and make sure you have **Chrome** installed to be able to run the scripts properly.

<br/>

If you want to run _frontend_ or _backend_ only, use these commands:

```bash
# frontend only
pnpm  dev:frontend

# backend only
pnpm  dev:backend
```

## TypeScript Configuration for Splide

To avoid TypeScript errors for `@splidejs/vue-splide`, add the following to your `tsconfig.json`:

```json
{
    "compilerOptions": {
        "typeRoots": ["./custom-types", "./node_modules/@types"]
    }
}
```

## Adding .env Files

**API** and **Database** keys are in two seperate `.env` folders. Add one `.env` file in the root of the project with the API URL and add the other `.env` file in the `backend/prisma` folder with the Database URL.
