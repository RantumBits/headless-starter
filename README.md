# headless
## the shopify + gatsby starter theme for digital commerce


made by [ecomloop](https://ecomloop.com)
We help uncommon businesses succeed in the digital economy

### Quick Start

#### Create a Gatsby site

```sh
# Create a new Gatsby site using the Lumen starter
gatsby new shop https://github.com/ecomloop/headless
```

#### Start Developing

Navigate into your new site’s directory and start it up.

```sh
cd shop
gatsby develop
```

##### Deploy with Netlify

Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/ecomloop/headless" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

## Deploy to Github Pages

To deploy to github pages, simply do the following:

- Ensure that your `package.json` file correctly reflects where this repo lives
- Change the `pathPrefix` in your `config.js`
- Run the standard deploy command

```sh
npm run deploy
```


#### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ gatsby serve
```
