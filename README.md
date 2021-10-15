# BBQ restaurant web page app

This is a web page for a BBQ restaurant that shows information about restaurant and its food. The data is connected to Firebase Database (Cloud Firestore). It also has an admin page where you can edit menu categories and see the categories' products, as well as you can add a new category. Soon you will be able to add products too (work in progress).

## How to use it 

When you start the app, the first page you are going to see is the Home page, which has a pitch of the restaurant and a button to the Menu page. When you are in a different page of the app, by clicking on the navigation logo it will bring you back to this page. The Footer has clickable links to the restaurant’s email, and to social media links.

The Menu page showcases the menu categories. Each category has a short description, a photo and a button which will open a more detailed page of that section. The Menu button on the navigation bar opens the Menu page. 

Each catgeory consists of a list of dishes within that category. When you click the View details button, it will open a new page with a detailed information about that particular item such as photo, price as well as a short description. You can click on the Go Back button which will send you back to the category page.

The admin page can be found through " /admin " path, example of the address: " localhost:3000/admin ". The Admin page shows existing categories and when you click on any category it will open a new page with the particular category's information inside the form which you can edit and save. On the same page you can see if there are dishes associated with that category.

## How to start 

You need to have npm installed on your computer. In the project terminal first run:

### `npm install`

It would compile the project before you would run it. After this go to the next step:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Diagram

The diagram/component tree of the project structure: https://whimsical.com/bbqrestaurantdiagram-Se4gzs1YTdxrWzJfxxnxbp

## Prototype

The prototype is made in Figma and available through the link: https://www.figma.com/file/fl7UhTHGN4wJoy3WAM6qM0/OpenFire-Food-Experience?node-id=127%3A450

## Organisational documentation

The documentation of the project is available through the links: 
https://docs.google.com/spreadsheets/d/1x691eEIS4e5rGNAEQBcNt9HoS9ScNXpO/edit?usp=sharing&ouid=100998197949313405589&rtpof=true&sd=true
https://docs.google.com/document/d/1ZXBLL_DtHc0E_NQelL4gpyIZXuf_vJOW/edit?usp=sharing&ouid=100998197949313405589&rtpof=true&sd=true

## Link

The app is hosted on: https://openfire-bbqexperience.web.app
