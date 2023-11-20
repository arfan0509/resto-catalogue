import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
    <div class="jumbotron">
      <h1>Welcome to Roid's Resto Katalog</h1>
      <p>Discover the best restaurants and dishes in town!</p>
    </div>
  
    <div class="about-me">
      <div class="container">
        <h2 tabindex="0">About Us</h2>
        <p>
          Roid Resto Catalogue, tempat di mana Anda dapat
          menemukan restoran-restoran terbaik di seluruh kota. Kami memiliki
          hasrat dalam mengeksplorasi makanan lezat dan berbagi pengalaman
          kuliner dengan semua orang.
        </p>
        <p>
          Kami berkomitmen untuk memberikan informasi yang akurat dan berguna
          tentang restoran-restoran yang kami tampilkan di sini. Terima kasih
          atas dukungan Anda dalam menjadikan Roid's Resto Katalog sebagai
          sumber utama untuk menemukan tempat makan yang luar biasa.
        </p>
        <p>
          Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau
          masukan. Kami akan dengan senang hati mendengar dari Anda!
        </p>
      </div>
    </div>
  
    <h2 id="restaurants-heading" class="content__heading">Explore Restaurants</h2>
    <div id="restaurants" class="restaurants">
    </div>
  </div>
    `;
  },

  async afterRender() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.style.display = 'none'; // Sembunyikan loading screen setelah penundaan
      }, 1000); // Ganti 1000 menjadi jumlah milidetik penundaan yang Anda inginkan
    }

    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
