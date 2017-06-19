# tic-tac-toe

[![codebeat badge](https://codebeat.co/badges/1d8a7ce8-50bd-4591-8c53-981bbc6ac919)](https://codebeat.co/projects/github-com-hijiangtao-tic-tac-toe-master)

## Introduction

The app is programmed under the guidance of [React Official Tutorial](https://facebook.github.io/react/tutorial/tutorial.html), and implements with following features:

* Display the move locations in the format "(1, 3)" instead of "6".
* Bold the currently-selected item in the move list.
* Rewrite Board to use two loops to make the squares instead of hardcoding them.
* Add a toggle button that lets you sort the moves in either ascending or descending order.
* When someone wins, highlight the three squares that caused the win.

## Install and run

### Install

```
git clone git@github.com:hijiangtao/tic-tac-toe.git
cd tic-tac-toe
yarn install
```

After installation, you can run following scripts:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## LICENSE

Apache License 2.0
