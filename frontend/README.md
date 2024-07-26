# Nuxt 3 Minimal Starter

## Setup

Make sure to install **node.js** from their official [website](https://nodejs.org/en)


## Installing Dependencies

First, set Execution Policy to `Remote Signed` in PowerShell

```bash
Set-ExecutionPolicy RemoteSigned
```

Next, install `pnpm` with the command:

```bash
npm install -g pnpm
```

Run the `pnpm` setup through the command:

```bash
pnpm setup
```

Install all the dependencies with this command:

```bash
pnpm install
```

- Run this command in both **frontend**, **backend** and the **main project** folder to install all dependencies of the project.


## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```
Run scripts in the main project folder (`D:\Next-Computers`) and make sure you have **Chrome** installed to be able to run the scripts properly. 
<br/>
If you want to run *frontend* or *backend* only use these commands:

```bash
# frontend only
pnpm dev:frontend

# backend only
pnpm dev:backend
```