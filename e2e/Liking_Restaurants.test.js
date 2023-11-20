/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking and Unliking Restaurants');

Scenario('Liking and Unliking one restaurant', async ({ I }) => {
  // Liking a restaurant
  I.amOnPage('/');
  I.waitForElement('#mainContent', 5);
  I.waitForElement('#restaurants', 5);
  I.waitForElement('.restaurant-item__content', 5);
  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  I.click(firstRestaurant);
  I.waitForElement('#likeButton', 5);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('#mainContent', 5);
  I.waitForElement('.restaurant-item__content', 5);

  // Unliking the same restaurant
  const likedRestaurant = locate('.restaurant-item__content h3 a').first();
  I.click(likedRestaurant);
  I.waitForElement('#likeButton', 5);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('#mainContent', 5);
  I.dontSeeElement('.restaurant-item__content'); // Verify that the restaurant is unliked
});
