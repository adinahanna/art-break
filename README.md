# Art Break

## Project Description

Art Break is exactly what it sounds like - a way to use art to take a break from the world. Art Break is a fully functional React app that receives live data from the Harvard Art Museums API, displays the data randomly, and allows you to draw on a digital sketchpad. Visit Art Break: https://art-break.netlify.app/

## Technologies Used
1. React
2. CSS FLexbox
3. CSS Grid
4. JSX
5. Yarn
6. React-Canvas-Draw
7. Balsamiq

## Planning Process
Step one included building out my app idea, identifying MVP and stretch goals, writing user stories, and planning a timeline.

THe next steps were identifying which API I wanted to use and building out my component architecture as pictured below. Planning the component structure included identifying which components would need to share data, where state variables needed to be initialized, and which React hooks I would be implementing.

![component hierarchy] ( ./images/component-hierarchy.png )

I then used Balsamiq to wireframe the different components of my app at different breakpoints.

Links to wireframes:
* Homepage-large screen: https://share.balsamiq.com/c/pxCHm1J7ek3ecYTqSc7wfN.png
* Homepage-mobile: https://share.balsamiq.com/c/pxCHm1J7ek3ecYTqSc7wfN.png
* Gallery-large screen: https://share.balsamiq.com/c/4u3ZmYRp8bE3GpV8AEaLGJ.png
* Gallery-mobile: https://share.balsamiq.com/c/fUrLaYtWYgNzQDXDAXFPTR.png
* Studio-large screen: https://share.balsamiq.com/c/6U9xDPSRY1cojLkeZT1XrV.png
* Studio-mobile: https://share.balsamiq.com/c/fikpMf7yL7yJ46TpGUp4UX.png

And finally, it was time to get to coding!

## Challenges
The biggest challenge in building this app was the Canvas component. I had originally planned to build my own sketchpad using the HTML Canvas component with React. However, due to time constraints, I chose to incorporate React-Canvas-Draw instead, with plans to build out that functionality myself at a later date.
Additionally, some of the features I had initially planned (like a search form) were not supported by the data included in the API, so I had to pivot away from that idea and focus on other features.

## Features to Add in the Future
* build out the sketchpad myself and add a color picker and brush size
* consider switching to a different API that would better support a search functionality for better user interaction
* add a tablet breakpoint to the styles



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
