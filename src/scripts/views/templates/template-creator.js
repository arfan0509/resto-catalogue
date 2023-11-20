import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h3 class="restaurant__name">${restaurant.name}</h3>
  <img loading="lazy" class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />
  <div class="restaurant__info">
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>In ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>
  </div>
  <div class="restaurant__description">
    <h3>Description of ${restaurant.name}</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__description">
  <h3>Food Menu</h3>
  <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
</div>
<div class="restaurant__description">
  <h3>Drink Menu</h3>
  <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
</div>
  <div class="restaurant__description">
  <h3>Customer Reviews</h3>
  <p>${restaurant.customerReviews.map((customer) => customer.review).join(' | ')}</p>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img loading="lazy" class="restaurant-item__header__image lazyload" alt="${restaurant.name}" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/small/placeholder.jpg'}" crossorigin="anonymous">
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <div class="restaurant-item__content__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
      <p>City: ${restaurant.city}</p>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
