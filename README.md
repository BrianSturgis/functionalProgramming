<div align="center">
<p align="center">Super Galactic Age Calculator</p>
</div>
<p align="center"> Authored by Brian Sturgis</p>
<p align="center">Updated on Feb 8th, v1.5 2021</p>

## Application Description
This web application will take a person's age in years and do the following:

- Returns their age in Mercury years and can display it in the dom.
- Returns their age in Venus years and can display it in the dom..
- Returns their age in Mars years and can display it in the dom..
- Returns their age in Jupiter years and can display it in the dom..
- Determines how many years a user has left to live on each planet… This function is built into the applications logic but must be displayed via the contents of the applications output.
- If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. This function is built into the applications logic but must be displayed via the contents of the applications output.

## USING THIS APPLICATION
- This app uses node.js. If you do not already have node.js installed, visit https://nodejs.org/en/download/ and install.
- After installing node, navigate to the root directory of the cloned repo in a as Command Prompt or Git Bash.
- Type in "npm install".
- Then type in "npm run build".

If you would like to run the program through the server, you can type "npm run start" which will build the program and launch the preview to the local server.  Move to the "dist" folder in root and run a live server from the index

If you use Jest to run your tests, open your terminal and go to the root of the project directory and type in "npm test".
If you would like to run the program through the server, you can type "npm run start" which will build the program and launch the preview to the local server.

## The projects objectives were to complete the following (MVP)
- Business logic has 100% line coverage with Jest.
- Each spec was committed before writing its corresponding code.
- Project utilizes ES6 features including classes and template literals.
- Dependencies are managed with npm.
- Webpack is used to lint, bundle, and process code.

## Stretch Goals
- The output is formatted inside of a snarky paragraph and would rather it have the tone of a robot.  I was listening to Bill Burr the Comedian and his snarky personality heavily influenced the content choice.
- A UI for the application that has css styling.
- Will return the date of a user's next birthday on each planet.
- Will return the age Keith Richards will be in dog years on the planet Jupiter in 2073.
- It will assume that the average lifespan of a mayfly is 5 minutes, then determine how many mayfly lifespans a human user has lived and then compare it the current age (in Earth years) of our sun.

## Known Bugs
none as of yet but don't fret as there will be.

## Setup/Installation Requirements
- repository location (https://github.com/BrianSturgis/JanWeek5Project)
- open through a git terminal or clone editor.
- got to repo location.
- using git commands clone to local repo
- or click "download" and unpack on machine


## GIT HUB PAGES LINK
- (https://briansturgis.github.io/JanWeek5Project/)


## SPECS
```JS

// create an Object to hold all relevant key values
Test: "should create an instance of Calculator"
code:calculatorObject();
Expect:(calculatorObject).toEqual(inputtedAge,0,0);


// create an array holding inputted age divided by each planets factor (loop)
Test: " should calculate 0 years into Mercury years by returning an array of the number divided by Mercury years"
code: alienAge();
Expect:(AlienAge[0]).toEqual([0]);

Test: "should calculate 0 years into Mercury years by returning an array of the number divided by Venus years"
code: alienAge();
Expect:(AlienAge[0]).toEqual([0]);

Test: "should calculate 0 years into Mercury years by returning an array of the number divided by Mars years"
code: alienAge();
Expect:(AlienAge[0]).toEqual([0]);

Test: "should calculate 0 years into Mercury years by returning an array of the number divided by Jupiter years"
code: alienAge();
Expect:(AlienAge[0]).toEqual([0]);


// should divide overage of ageCheck into planets factor (loop)
Test: "should calculate 0 years into years left to live in Mercury years"
code: lifeExpectancy();
Expect:().toEqual();

Test: "should calculate 0 years into years left to live in Venus years"
code: lifeExpectancy();
Expect:().toEqual();

Test: "should calculate 0 years into years left to live in Mars years"
code: lifeExpectancy();
Expect:().toEqual();

Test: "should calculate 0 years into years left to live in Jupiter years"
code: lifeExpectancy();
Expect:().toEqual();


// should check whether age is over under 73  (branch or switch)
Test: "should determine whether inputtedAge is under 73"
code: ageCheck();
Expect:().toEqual();

Test: "should determine whether inputtedAge is over 73"
code: ageCheck();
Expect:().toEqual();

```

## Support and contact details
email Brian Sturgis @ <sturujisu@gmail.com>

## Technologies Used
* HTML
* Bootstrap
* CSS
* Jquery
* Visual Studio Code
* Jest 
* babel
* es-lint
* Git
* GitHub
* coffee

## Resources Quoted
- w3schools
- Epicodus Documentation

### License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE..

Copyright (c) 2020 **Brian Micheal Sturgis**