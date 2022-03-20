# Menu Project

## Table of Contents

1.  [Intro](#intro)
2.  [Video](#video)
3. [Technical design](#technical-design)
4.  [Demo](#demo)
5.  [Available scripts](#available-scripts)
6.  [Getting started](#getting-started)

## Intro

This project was developed using  [React Native](https://reactnative.dev/)  and uses  [TypeScript](https://www.typescriptlang.org/).

The project can retrieve information about an specific restaurant from the  [Documenu API](https://documenu.com/docs). It makes a request to the API to get information about the restaurant and displays it on the screen to the user.

The application was created following the Clean Architecture principle. It's probably more than this simple application needs but it was used as a personal study.

## Video


## Technical design


## Demo


## Available scripts

In the project directory, you can run:

### `yarn start`

Starts the React Native Metro Bundler. It's recommended to run this command in a new terminal before runs `android` or `ios` commands.

### `yarn android`

It will run the application in your connected android device or in an android emulator.

### `yarn ios`

It will run the application in your connected ios device or in an ios emulator.

### `yarn test`

This command is used to run the application tests. If you want to see the coverage report, you can add the `--coverage` option to this command.

## Getting started

Clone the project:
```
$ git clone https://github.com/guilhermemcardoso/menu.git
//if you are using SSH:
$ git clone git@github.com:guilhermemcardoso/menu.git 
```

Access the project folder:
```
$ cd menu
```
Install the dependencies
```
$ npm  install
//or if you are using yarn
$ yarn
```
Install the pods (via Cocoapods) to complete the linking:
```
$ cd ios && pod install
```
Start the metro server in a terminal tab:
```
$ npx react-native start
```
And start the application in another terminal tab:
```
$ npm run android //to run the android application
//or 
$ yarn android
$ npm run ios //to run the ios application
// or 
$ yarn ios
```