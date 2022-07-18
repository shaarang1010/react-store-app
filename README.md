# React + Typescript Ecommerce App

**Bootstraped with Create-React-App**

### Dependencies

- React and React Dom v18.x
- react-router-dom@6
- react-bootstrap
- react-testing-library

### API

We are using a Fake store api to retrieve list of products, add products to cart, user details, etc.

You can access the api below. Also, available is postman collection.

[Fake-Store-API](https://fakestoreapi.com/docs)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/1486577-f171c6e2-10ab-4349-bc10-9db4449da719?action=collection%2Ffork&collection-url=entityId%3D1486577-f171c6e2-10ab-4349-bc10-9db4449da719%26entityType%3Dcollection%26workspaceId%3D18e6f11c-8e45-4bea-b35a-8f6ad5fa2c29)

### Get Started

Ensure you have Nodejs installed.[Nodejs](https://nodejs.org/en/)

Clone the repo and install dependencies using the following cmd - `npm install` or using yarn `yarn install`

### User stories

**STR-US1. As a user, I would like to view all products in the online store**

Acceptance criteria:

1. As a user I should be able login using my credentials and view the dashboard.
2. As a user I should be able to view all the products on the dashboard.
3. Each product should have a title, image and price.

**STR-US2. As a user, I would like to view only 8 products on a page**

Acceptance criteria:

1. As a user I should be able login using my credentials and view the dashboard.
2. As a user I should be able to view only 8 products per page on the dashboard.
3. The product results should be paginated and there should be a next and previous button at the bottom of the product list to
   navigate to next page and show next 8 products.

**STR-US3. As a user, when I click on a product on the dashboard, it should me the details of the product**

Acceptance criteria:

1. A user clicks on a product image on the dashboard.
2. The user is navigated to the products page where the product image, title, descritpion, category and price are shown.
3. A button `Add to cart` is shown below the product details.
4. When the user clicks on the `Add to cart` button, the product is added to the user's cart. _(This functionality can be either mocked or you can implement this via React Context API)_

_Option 1: Mock the functionality [Complexity: Easy]_

- Make an api call to fake-store-api to add new product to the cart as shown [here](https://fakestoreapi.com/docs#c-new).
- Store the response and either show it as a modal or an alert (you can use React-Bootstrap [Modal](https://react-bootstrap.github.io/components/modal/) or [Alert](https://react-bootstrap.github.io/components/alerts/) components).
- On clicking back, the user should be navigated back to dashboard.

_Option 2: Use Context API [Complexity: Hard]_

- Create a Context named - CartContext.
- CartContext should store array of Products.
- When a user adds product to cart, the product including its details should be added to the context.
- These details should persist when the user is navigated back to the dashboard
- [BONUS]: In the Navbar, you can display the total number of products in the cart.

**STR-US4. As a user, I would like to sort products on dashboard in either accending or descending order**

Acceptance criteria:

1. Add a dropdown, with options to Sort - ASC, Sort-DESC.
2. The dropdown should be added below the navbar and floated to right. You can use `flex justify-content-end` class or `float:right`.
3. When the user chooses `SORT-ASC` the products should be sorted by their price in ascending order. When user chooses `SORT-DESC` the products on dashboard should be sorted according to their prices in descending order.
