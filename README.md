# PYMTECH Website

Welcome to the official GitHub repository for PymTech's corporate website, powered by the Hugo framework. This repository serves as the central hub for the development, maintenance, and deployment of our website.

It contains the source code for the PYMTECH website, built with Hugo, Alpine.js, and TailwindCSS. It includes custom styling with Tailwind CSS and dynamic functionality with Alpine.js.


## Getting Started

### Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) and [Hugo](https://gohugo.io/) installed on your machine. You can check the installation by running:

```bash
node --version
```
Ensure you have Hugo Extended version installed on your machine. If not, please follow the steps below to install it and verify the installation:

1. **Installation**:
   - Visit the [Hugo releases page](https://github.com/gohugoio/hugo/releases) and download the latest Extended version for your operating system.
   - Follow the installation instructions specific to your OS.

2. **Verification**:
   - Open a terminal or command prompt.
   - Run the command `hugo version` to verify the installation. Ensure that the output mentions the "Extended" version to confirm that the correct version of Hugo is installed.

### Installation

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/pymtech-co/pymtech_website.git
cd pymtech_website
```

Install the necessary Node.js dependencies:

```bash
npm install
```

### Development

To start the development server with live reloading and Tailwind CSS watching for changes (`concurrently \"npm run dev\" \"npm run watch:tw\"`), run:

```bash
npm start
```

This command concurrently runs Hugo in development mode and the Tailwind CSS watch task, allowing you to see changes in real-time.

### Building for Production

To create a production build of the website, run:

```bash
npm run build
```

This command generates a minified version of the site in the `public` directory, ready to be deployed.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Hugo server in development mode with live reloading.
- `npm run watch:tw`: Watches the Tailwind CSS files for changes and rebuilds the stylesheet.
- `npm start`: Runs both the Hugo server and the Tailwind CSS watch task concurrently.
- `npm run build`: Generates a production build of the site with minification.
- `npm run test`: Runs Hugo to test the site build.


## Author

PYMTECH S.A.S

