const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;
const hotels = require('./hotels');

// console.log(hotels);

app.get('/', (req, res) => {
  let platformName = 'TripWithUs'.bold();
  res.send(`Welcome to ${platformName} Hotel Chain`);
});

// hotels sorted by pricing
function sortFromLowToHigh(hotel1, hotel2) {
  return hotel1.price - hotel2.price;
}
function sortFromHighToLow(hotel1, hotel2) {
  return hotel2.price - hotel1.price;
}
app.get('/hotels/sort/pricing', (req, res) => {
  let pricing = req.query.pricing;
  let copyHotels = hotels.slice(); // since sort() method modifies the original array, we make a copy
  if (pricing === 'low-to-high') {
    copyHotels.sort(sortFromLowToHigh);
  } else if (pricing === 'high-to-low') {
    copyHotels.sort(sortFromHighToLow);
  }
  res.json({ hotels: copyHotels });
});

// hotels sorted by ratings
function sortByRatings(hotels, rating) {
  if (rating === 'low-to-high') {
    hotels.sort((hotel1, hotel2) => hotel1.rating - hotel2.rating);
  } else if (rating === 'high-to-low') {
    hotels.sort((hotel1, hotel2) => hotel2.rating - hotel1.rating);
  }
  return hotels;
}
app.get('/hotels/sort/rating', (req, res) => {
  let rating = req.query.rating;
  let copyHotels = hotels.slice();
  let result = sortByRatings(copyHotels, rating);
  res.json({ hotels: result });
});

// hotels sorted by reviews
function sortByReviews(hotels, reviews) {
  if (reviews === 'least-to-most') {
    hotels.sort((hotel1, hotel2) => hotel1.reviews - hotel2.reviews);
  } else if (reviews === 'most-to-least') {
    hotels.sort((hotel1, hotel2) => hotel2.reviews - hotel1.reviews);
  }
  return hotels;
}
app.get('/hotels/sort/reviews', (req, res) => {
  let reviews = req.query.reviews;
  let copyHotels = hotels.slice();
  let result = sortByReviews(copyHotels, reviews);
  res.json({ hotels: result });
});

// filter hotels based on amenity
function filterHotelsByAmenity(hotel, amenity) {
  return hotel.amenity.toLowerCase() === amenity.toLowerCase();
}
app.get('/hotels/filter/amenity', (req, res) => {
  let amenity = req.query.amenity;
  let filteredHotels = hotels.filter((hotel) =>
    filterHotelsByAmenity(hotel, amenity)
  );
  res.json({ hotels: filteredHotels });
});

// filter hotels based on country
app.get('/hotels/filter/country', (req, res) => {
  let country = req.query.country;
  let filteredHotels = hotels.filter(
    (hotel) => hotel.country.toLowerCase() === country.toLowerCase()
  );
  res.json({ hotels: filteredHotels });
});

// filter hotels based on category
app.get('/hotels/filter/category', (req, res) => {
  let category = req.query.category;
  let filteredhotels = hotels.filter(
    (hotel) => hotel.category.toLowerCase() === category.toLowerCase()
  );
  res.json({ hotels: filteredhotels });
});

// display all hotels
app.get('/hotels', (req, res) => {
  res.json({ hotels });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
