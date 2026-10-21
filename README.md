This is a portfolio designed by me and built in react.

Page link: https://wilmayasuda.se

## Deploying to GitHub Pages

Run `npm run deploy` to build the site and publish the `dist` directory to the
`gh-pages` branch of the Git remote named `origin`. The `predeploy` script runs
the production build automatically before publishing.

In the repository's **Settings > Pages**, select **Deploy from a branch**, then
choose **gh-pages** and **/ (root)** after the first deployment. The Vite `base`
setting must match the repository path used by GitHub Pages.

![alt text](src/assets/img/portfolio-design-thumbnail.jpg)

About the creation of this page:

The reason I choose to use react for this project is because there are several advantages to using it, such as faster load times, smoother user interaction, and more responsive user interface, as well as reusable components and improved SEO.

One thing I noticed when I first started with react was the difference in how the code was structured. It took some time to get properly used to, especially understanding JSX and how to write it. In several ways the writing is different from how one would usually write both HTML and Javascript. Another key learning point in this project was understanding how asset handling, particularly images, works within the React build process. I discovered the importance of correctly importing images to ensure they were included and displayed in the final build.

After I had created the brand image, logo, as well as the design for the website, I began with creating a simple Desktop version, just to get the HTML elements on the page where I could see them. I also styled it simply with CSS to make it look structurally closer to the final product. The first parts of the page I added was the header and footer. Since they were to be visible at all times, they would later come to affect the balance of the design in between.

After I had a base structure, I added images as well as descriptions. The reason for adding it this early was that I knew I would end up changing some of the page design when I added the images and text for my projects. Mostly because I wanted to add more information to the page than I had calculated for when I first designed the page. Fortunately none of the changes I had to make was overly time-consuming.

It was first after I had finalized most of the HTML and CSS that I added the Javascript and made the page responsive. The reason for adding it last was that I had my own set deadline, so I was afraid that if I added Javascript or made the page responsive in the beginning, I would lose myself in adjusting the smaller details and not finish in time. This way it was easier to calculate the time left over for adding more advanced functions or further change the design if I so wanted. For example, one function that I decided to add later was the fade-in effect for a more dynamic page, and an accordion to hide some of the text.

______________________________________________________________________

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
