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

To document the process of deploying your site on GitHub Pages using Hugo, you can follow this structure:

---

## Deploying a Hugo Site on GitHub Pages

This document outlines the steps taken to deploy a Hugo site on GitHub Pages. The deployment process leverages GitHub Actions for automation, ensuring that each push or pull request to the `main` branch triggers a build and deployment sequence.

### Prerequisites

- A Hugo site stored in a GitHub repository.
- Basic familiarity with GitHub Actions.

### Steps

1. **Create a GitHub Actions Workflow**

   A GitHub Actions workflow was created in the repository to automate the deployment process. The workflow is defined in a file named [`hugo.yaml`] located in the [`.github/workflows`] directory.

2. **Configure the Workflow Triggers**

   The workflow is configured to trigger on three events:
   - **Pushes to the `main` branch**: Automatically builds and deploys the site whenever changes are pushed to the `main` branch.
   - **Pull requests to the `main` branch**: Ensures the site builds successfully on pull requests, but does not deploy until the changes are merged into `main`.
   - **Manual triggers via the Actions tab**: Allows for manual builds and deployments, useful for testing and debugging.

   ```yaml
   push:
       branches:
         - main
     # Runs on pull requests to the default branch
     pull_request:
       branches:
         - main

     # Allows you to run this workflow manually from the Actions tab
     workflow_dispatch:
   ```

3. **Set Up Hugo Build Step**

   Within the workflow, a step is included to install Hugo and build the static site content. This step uses the Hugo version specified in the site's configuration to ensure compatibility.

4. **Deploy to GitHub Pages**

   After the site is built, the workflow deploys the static files to GitHub Pages. This is achieved by pushing the built content to the `gh-pages` branch, which GitHub Pages is configured to serve.

5. **Verify Deployment**

   Once the workflow completes, the site should be accessible at the configured GitHub Pages URL. It's important to check the site for any issues resulting from the deployment process.



For more detailed information on hosting with GitHub Pages and using Hugo, refer to the official Hugo documentation: [Hosting on GitHub](https://gohugo.io/hosting-and-deployment/hosting-on-github/).


### Configuring a Custom Domain for GitHub Pages on Windows

After deploying the Hugo site on GitHub Pages, you might want to use a custom domain instead of the default `username.github.io` domain. Here's how to configure a custom domain by adding a CNAME file and setting up DNS records on Windows.

#### Adding a CNAME File to Your Repository

1. **Create a CNAME File**: In the root of your GitHub Pages repository, create a file named `CNAME` without any extension.
2. **Specify Your Custom Domain**: Inside the `CNAME` file, enter your custom domain name (e.g., `www.example.com`). Ensure there are no spaces or additional text in the file.
3. **Commit and Push the CNAME File**: Commit the `CNAME` file to your repository and push it to GitHub. GitHub Pages will automatically recognize this file and use the custom domain you specified.

#### Configuring DNS Records

1. **Access Your DNS Provider**: Log in to the control panel of your DNS provider (e.g., AWS). Set the general Domain: example.com as a new record TXT:
   - _github-pages-challenge-<ORGANIZATION_NAME>-co.example-co.com and the given value on Github (Organization/Settings/Pages ---> Add a domain). 
2. **Create a CNAME Record**: For any subdomains (e.g., `www.example.com`), create a CNAME record pointing to your GitHub Pages default domain (`username.github.io`) (on AWS).
3. **Save Your DNS Settings**: Make sure to save the changes. DNS changes may take up to 48 hours to propagate across the internet.

#### Verifying Your Custom Domain

After configuring the CNAME file and DNS records, you can verify your custom domain setup in your GitHub repository settings under the "Pages" section. GitHub will indicate if the domain is correctly set up and if HTTPS is enabled.

### Conclusion

By adding a CNAME file to your repository and configuring DNS records, you can use a custom domain with your GitHub Pages site. This enhances your site's branding and makes it more accessible to your audience. Remember, DNS changes might take some time to propagate, so your site might not be immediately accessible via the new domain.

For more detailed information on configuring a custom domain for GitHub Pages, refer to the official GitHub documentation: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) and [Getting started with github pages](https://docs.github.com/es/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)
