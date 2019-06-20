# Grolist frontend
This React App is the frontend (GUI) for the [Grolist API](https://github.com/jolbax/grolist-backend#readme) and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

At the time I started this project, I already had applied experience with React. Which means that I already had completed some learning projects like [chat-react](https://github.com/jolbax/chat-react) and [jams-react](https://github.com/jolbax/jams-react)

## Deployment
Firebase was chosen as hosting platform:
https://grolist-frontend.firebaseapp.com/

## Built with
- React - without store management (like Redux)
- HTML5
- SCSS/SASS
- Bulma - [react-bulma-components](https://couds.github.io/react-bulma-components)
- Authentication via JWT
- [Axios](https://github.com/axios/axios) - Used instead of the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Features

* Authentication capabilities using JSON Web Tokens *(work in progress)*
* CRUD users, lists and list-item.
* Updated and accessible across users and devices
* Check/Uncheck list items
* Add collaborators *(work in progress)*
* Assigned tasks *(work in progress)*
* Search *(work in progress)*
* Task prioritization *(work in progress)*

## Possible enhancements
* Redux - I would like to manage the state in a "state of the art" way.
* Responsiveness - There is infinite room for improvement.
* Real-Time Synchronicity - Propagate state using WebSockets and React Hooks
* React component testing


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

