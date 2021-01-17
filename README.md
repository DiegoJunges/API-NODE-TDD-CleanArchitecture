<p align="center">
  <img src="CleanArchitecture.jpg" width="320" alt="cleanArchiteture" /></a>
</p>

<h3 align="center">
  NestJS Application API to manage tasks.
</h3>

<div align="center">

[![Coverage Status](https://coveralls.io/repos/github/DiegoJunges/API-NODE-TDD-CleanArchitecture/badge.svg?branch=master)](https://coveralls.io/github/DiegoJunges/API-NODE-TDD-CleanArchitecture?branch=master)
[![Build Status](https://travis-ci.org/DiegoJunges/API-NODE-TDD-CleanArchitecture.svg?branch=master)](https://travis-ci.org/DiegoJunges/API-NODE-TDD-CleanArchitecture)

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/DiegoJunges/gobarber-api?color=%23FF9000">

  <a href="https://www.linkedin.com/in/diego-junges/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Diego%20Junges-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/DiegoJunges/gobarber-api?color=%23FF9000">

  <a href="https://github.com/DiegoJunges/gobarber-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/DiegoJunges/gobarber-api?color=%23FF9000">
  </a>

  <a href="https://github.com/DiegoJunges/gobarber-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/DiegoJunges/gobarber-api?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/DiegoJunges/gobarber-api?color=%23FF9000">
  
</div>

## Description

## 🏗️ About the project

A api with login feature and MongoDB to persist data, to mock the MongoDB i used MongoDB memory Server it's built with some design patterns and tdd, 100% test coverage. For CI/CD Travis-CI has been used.

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT-token](https://jwt.io/)
- [MongoDb Memory Server](https://github.com/nodkz/mongodb-memory-server)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js/)
- [Travis-ci](https://travis-ci.org/)
- [Coveralls](https://coveralls.io/)
- [Prettier](https://prettier.io/)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm start
```
## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- One instance of [MongoDB](https://www.mongodb.com/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/DiegoJunges/API-NODE-TDD-CleanArchitecture.git && cd API-NODE-TDD-CleanArchitecture
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Create the instance of MongoDB using docker
$ docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb

# To finish, run the api service
$ npm start

# Well done, project is started!
```
## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run coverage
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork DiegoJunges/API-NODE-TDD-CleanArchitecture
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd API-NODE-TDD-CleanArchitecture

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Diego Junges 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/diego-junges/)
