# Countrilla

A web-application that can be used to see many different countries and some useful information about the country via their respective region.

## Installation
To use the application please make sure to clone the package, open terminal and then follow the instruction below.

### Install the packages
```
npm i
```

### Running the tests
```
npm run test
```
### Running in DEV environment
```
npm run dev
```
### Building the application
```
npm run build
```

## Usage and Instructions
To use the application run the `npm run dev` command from above. It is also recommended to run all the test cases by running `npm run test`.
<br />
Afterwards goto `http://localhost:3000` in your browser to see the application.


## Thought Process
Next.JS was used due to the simplicity and easiness along with its amazing router. The routing system was extremely easy to understand and implement. 
<br>
Tailwind was used as CSS as it was much faster to write in-line CSS. It was also quicker to debug any issues from component as it’s all in-line.
<br>
API was [REST Countries](https://restcountries.com/) to fetch data of regions and countries. 

## Functionalities Implemented 
- 3 different dynamic routes (landing page, list page, and info page)
- Use of 60-30-10 rule for colours.
- Use of Flexbox to make the web-app desktop and mobile friendly.
- User interactive animation.
- Implementation of loading skeletons.
- Search bar with list view (list view only available on info page).
- Use of Local Storage for saving data.
- Implementaion of test cases for all possible endpoints.
- Error page and error handlings.

## To Improve
- Improve landing page by making the images darker/blurry but gets lighter/unblurry when hovering.
- Reuse component more often and split the compontents to further atoms/molecules (atmoic design).
- Implement more test cases. 
- Implement dark mode.
- Add more country information on info page.