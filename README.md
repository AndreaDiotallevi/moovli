# Moovli

[Description](#description) | [Live Demo](#live-demo) | [The Team](#the-team) | [Challenges and Goals](#challenges-and-goals) | [Features](#features) | [User Stories](#user-stories) | [Getting Started](#getting-started) | [How to Run the Tests](#how-to-run-the-tests) | [How to Run the App](#how-to-run-the-app) | [Design Approach](#design-approach) | [Technologies Used](#technologies-used) | [Code Quality](#code-quality) | [Continuous Integration](#continuous-integration)

## Description

Struggling to find a great movie? Are you spending hours scrolling down Netflix as your eyes glaze over and you become increasingly bored?

Introducing Moovli - a movie suggestion app that allows you to find the best movies from across the world. Moovli allows users to interact with a map and click on any country to see some of best movies available.

## Live Demo

The application is deployed to Heroku at this link: [https://moovli.herokuapp.com](https://moovli.herokuapp.com/)

## The Team

This was a group project during the final two weeks at [Makers Academy](https://makers.tech/). The team was composed by:

* [Tuan Nguyen](https://github.com/TuanNguyen1010)
* [Hisham Bokhari](https://github.com/hishambokhari)
* [Andrea Diotallevi](https://github.com/AndreaDiotallevi)
* [Daniel Martinez-Gatell](https://github.com/denriquem)

## Challenges and Goals

* Build a front-end web application that people would use and have fun playing around with.
* Use and understand React design patterns and its testing frameworks Jest and Enzyme.
* Handle nested asynchronous requests from multiple APIs within a React application.
* Deploy a front-end app to Heroku, given API restrictions for production websites.
* Use Python to scrape data from the internet and save it into a usable JSON format.

## Features

* If you go to the Moovli homepage [https://moovli.herokuapp.com](https://moovli.herokuapp.com/) you will see a map of the world:

![Homapage](./images/1-homepage.png)

* If you click on a country that doesn't have any available movie, the info window shows a useful message to the user:

![No Movies](./images/2-no-movies.png)

* If you click on a country that has available movies, you are redirected to the movies page, with the best movies from that country:

![Movies](./images/3-movies.png)

* If you click on one of the genre buttons, you can filter the movies by genre:

![Filter Movies by Genre](./images/4-filter-by-genre.png)

* If you click on the IMDB link, you are redirected to the IMDB web page of the selected movie:

![Imdb Hyperlink](./images/5-imdb.png)

## User Stories

```
As a user,
So that I can see all countries,
I'd like to see a map of the World

As a user,
So that I can choose a country,
I'd like to be able to be able to click on a country

As a user,
So that I can see some great movie suggestions,
I'd like to see a list of movies for the country I selected,

As a user,
So that I can recognize each movie,
I'd like to see the title of each movie.

As a user,
So that I can know what a movie is about,
I'd like to see a description of each movie.

As a user,
So that I can know the level of a movie,
I'd like to see the ratings for each movie.

As a user,
So that I can know how old is a movie,
I'd like to see the release date for each movie

As a user,
So that I can return to the home page,
I'd like to be able to use a back button on the movies page.

As a user,
So that I can pick my favorite type of movie,
I'd like to be able to filter the available movies by genre.

As a user,
So that I can read reviews and learn more about a movie,
I would like to see a link to the IMDB page for each movie.
```

## Getting Started

* Clone this repository with ```git clone git@github.com:AndreaDiotallevi/moovli.git```
* Change into the folder with ```cd moovli```
* Install all the dependencies with ```npm install```

## How to Run the Tests

To run all the tests type ```npm test```

## How to Run the App

Start the local server with ```npm start```

## Design Approach

The application has four react components and each of them has a clear responsibility:

  - ```App```: application main container.
  
  - ```Home```: responsible for showing the homepage title and containing the MapContainer component.
  
  - ```MapContainer```: responsible for showing the map and managing the info window.
  
  - ```Movies```: responsible for listing the best movies for each country and filtering them by genre.

## Technologies Used

- Main technologies:
  * [React](https://reactjs.org/): a JavaScript library we used to build the user interface and gather data from external APIs.
  * [Google Maps React](https://www.npmjs.com/package/google-maps-react): a library that includes a helper to wrap around the Google maps API.
  * [Python](https://www.python.org/): a general purpose programming language we used for web scraping (see [this](https://github.com/AndreaDiotallevi/movie-titles-scraper) helper repository).
  * [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox): the flexible box layout module makes it easier to design flexible responsive layout structure without using float or positioning.
  
- External APIs:
  * [Google Maps Api](https://developers.google.com/maps/documentation): web service we used to show the map on the page and get geographical coordinates from the user click.
  * [LocationIQ API](https://locationiq.com/docs): web service we used to get the country information from geographical coordinates.
  * [OMDb API](http://www.omdbapi.com/): web service we used to get each movie information by title.
  
  
- Testing frameworks:
  * [Jest](https://jestjs.io/): a JavaScript Testing Framework with a focus on simplicity.
  * [Enzyme](https://www.npmjs.com/package/enzyme): a JavaScript Testing utility for React that makes it easier to test the React Components' output.

## Code Quality

[ESLint](https://eslint.org/): tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

## Continuous Integration

[CircleCI](https://circleci.com/): tool for automating the development process quickly, safely, and at scale.
