
# Menu Project

## Table of Contents

1. [Intro](#intro)
2. [Video](#video)
3. [Technical design](#technical-design)
4. [Available scripts](#available-scripts)
5. [Getting started](#getting-started)
  
## Intro

This project was developed using [React Native](https://reactnative.dev/) and uses [TypeScript](https://www.typescriptlang.org/).

The project can retrieve information about an specific restaurant from the [Documenu API](https://documenu.com/docs). It makes a request to the API to get information about the restaurant and displays it on the screen to the user.

The application was created following the Clean Architecture principle. It's probably more than this simple application needs but it was used as a personal study.

## Video

 You can see a brief explanation of the project by clicking [here](https://drive.google.com/file/d/1bYrDGpeYy4mUQUqhkOzUZLag6T_Z0EnN/view?usp=sharing)
 
## Technical design  

You can see the technical design by clicking [here](https://docs.google.com/document/d/1Yc7ww5Eix4Egt6Ha1ir-EM27X2W_vZoV22XW_LXw1kM/edit?usp=sharing)

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
$ npm install
//or if you are using yarn
$ yarn
```
Install the pods (via Cocoapods) to complete the linking:
```
$ cd ios && pod install
```
Before running the project locally, we need to configure our .env file. So, create a file in the project's root directory called `.env`. Its content will be something like that:
```
API_URL=<inser the api's url here>
API_KEY=<insert your api key here>
RESTAURANT_ID=<insert the restaurant's id here>
ENV=development // this is optional, but can be used with the log package created to help us with logs
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