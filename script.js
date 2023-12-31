//nav bar to make responsive
const toggleIcon = document.getElementById('toggle-icon');

toggleIcon.addEventListener('click', () => {
  navlink.classList.toggle('show');
});


  
//json data 
  const dishes = [
    // Your provided JSON data
    
  {
      "name": "Veggie Delight",
      "imageSrc": "https://source.unsplash.com/random?veggies",
      "time": "30 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Chicken Grill",
      "imageSrc": "https://source.unsplash.com/random?chicken",
      "time": "45 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Cheese Pizza",
      "imageSrc": "https://source.unsplash.com/random?pizza",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.1
  },
  {
      "name": "Steak",
      "imageSrc": "https://source.unsplash.com/random?steak",
      "time": "60 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.7
  },
  {
      "name": "Grilled Salmon",
      "imageSrc": "https://source.unsplash.com/random?salmon",
      "time": "50 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Tomato Pasta",
      "imageSrc": "https://source.unsplash.com/random?pasta",
      "time": "35 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.0
  },
  {
      "name": "Vegan Salad",
      "imageSrc": "https://source.unsplash.com/random?salad",
      "time": "20 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.9
  },
  {
      "name": "Fried Chicken",
      "imageSrc": "https://source.unsplash.com/random?friedChicken",
      "time": "55 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Mushroom Risotto",
      "imageSrc": "https://source.unsplash.com/random?risotto",
      "time": "45 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Burger",
      "imageSrc": "https://source.unsplash.com/random?burger",
      "time": "30 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Paneer Tikka",
      "imageSrc": "https://source.unsplash.com/random?paneerTikka",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.4
  },
  {
      "name": "BBQ Ribs",
      "imageSrc": "https://source.unsplash.com/random?ribs",
      "time": "70 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Caesar Salad",
      "imageSrc": "https://source.unsplash.com/random?caesarSalad",
      "time": "25 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.8
  },
  {
      "name": "Fish Tacos",
      "imageSrc": "https://source.unsplash.com/random?fishTacos",
      "time": "35 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Chocolate Cake",
      "imageSrc": "https://source.unsplash.com/random?chocolateCake",
      "time": "90 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.9
  },
  {
      "name": "Cheese Pizza",
      "imageSrc": "https://source.unsplash.com/random?pizza",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.1
  },
  {
      "name": "Steak",
      "imageSrc": "https://source.unsplash.com/random?steak",
      "time": "60 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.7
  },
  {
      "name": "Grilled Salmon",
      "imageSrc": "https://source.unsplash.com/random?salmon",
      "time": "50 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Tomato Pasta",
      "imageSrc": "https://source.unsplash.com/random?pasta",
      "time": "35 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.0
  },
  {
      "name": "Vegan Salad",
      "imageSrc": "https://source.unsplash.com/random?salad",
      "time": "20 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.9
  },
  {
      "name": "Fried Chicken",
      "imageSrc": "https://source.unsplash.com/random?friedChicken",
      "time": "55 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Mushroom Risotto",
      "imageSrc": "https://source.unsplash.com/random?risotto",
      "time": "45 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Burger",
      "imageSrc": "https://source.unsplash.com/random?burger",
      "time": "30 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Paneer Tikka",
      "imageSrc": "https://source.unsplash.com/random?paneerTikka",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.4
  },
  {
      "name": "BBQ Ribs",
      "imageSrc": "https://source.unsplash.com/random?ribs",
      "time": "70 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Caesar Salad",
      "imageSrc": "https://source.unsplash.com/random?caesarSalad",
      "time": "25 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.8
  },
  {
      "name": "Fish Tacos",
      "imageSrc": "https://source.unsplash.com/random?fishTacos",
      "time": "35 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Chocolate Cake",
      "imageSrc": "https://source.unsplash.com/random?chocolateCake",
      "time": "90 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.9
  },
  {
      "name": "Cheese Pizza",
      "imageSrc": "https://source.unsplash.com/random?pizza",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.1
  },
  {
      "name": "Steak",
      "imageSrc": "https://source.unsplash.com/random?steak",
      "time": "60 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.7
  },
  {
      "name": "Grilled Salmon",
      "imageSrc": "https://source.unsplash.com/random?salmon",
      "time": "50 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Tomato Pasta",
      "imageSrc": "https://source.unsplash.com/random?pasta",
      "time": "35 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.0
  },
  {
      "name": "Vegan Salad",
      "imageSrc": "https://source.unsplash.com/random?salad",
      "time": "20 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.9
  },
  {
      "name": "Fried Chicken",
      "imageSrc": "https://source.unsplash.com/random?friedChicken",
      "time": "55 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Mushroom Risotto",
      "imageSrc": "https://source.unsplash.com/random?risotto",
      "time": "45 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Burger",
      "imageSrc": "https://source.unsplash.com/random?burger",
      "time": "30 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Paneer Tikka",
      "imageSrc": "https://source.unsplash.com/random?paneerTikka",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.4
  },
  {
      "name": "BBQ Ribs",
      "imageSrc": "https://source.unsplash.com/random?ribs",
      "time": "70 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Caesar Salad",
      "imageSrc": "https://source.unsplash.com/random?caesarSalad",
      "time": "25 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.8
  },
  {
      "name": "Fish Tacos",
      "imageSrc": "https://source.unsplash.com/random?fishTacos",
      "time": "35 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Chocolate Cake",
      "imageSrc": "https://source.unsplash.com/random?chocolateCake",
      "time": "90 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.9
  }
]
  ;

  const ratingFilter = document.getElementById('rating-filter');
  const resultContainer = document.getElementById('result-container');

    ratingFilter.addEventListener('change', updateRecipes);

    function updateRecipes() {
      const selectedFilter = document.querySelector('input[name="rating"]:checked');
      
      if (selectedFilter) {
        const filterValue = selectedFilter.value;
        
        let filteredDishes = [];

        if (filterValue === 'above') {
          filteredDishes = dishes.filter(dish => dish.rating > 4.5);
        } else if (filterValue === 'below') {
          filteredDishes = dishes.filter(dish => dish.rating < 4.0);
        }
        console.log(filteredDishes)
        displayResults(filteredDishes);
      }
    }

    function displayResults(results) {
      resultContainer.innerHTML = '';

      if (results.length === 0) {
        resultContainer.innerHTML = '<p>No matching dishes found.</p>';
        return;
      }

      results.forEach(dish => {
        const dishDetail = document.createElement('div');
        dishDetail.classList.add('dish-detail');
        dishDetail.innerHTML = `
          <img src="${dish.imageSrc}" alt="${dish.name}">
          <div class="type">${dish.type}</div>
          <div class="name">
            <div class="dish-name">${dish.name}</div> 
            <div id="dish-rating"><img src="./img/Frontend 2/Iconly/Bold/Star.svg" alt="" width="8px">${dish.rating}</div>
          </div>
          <div class="time">
            <div>${dish.time}</div>
            <div class="social-media">
              <span><img src="./img/like.svg" alt=""></span>
              <span><img src="./img/comments.svg" alt=""></span>
            </div>
          </div>
        `;
        resultContainer.appendChild(dishDetail);
      });
    }
    let veg = document.getElementById('vegRecipes');
    veg.addEventListener('click',vegOnly)

      function vegOnly(){
        let vegetarian = [];
        vegetarian = dishes.filter(dish => dish.type === 'veg');
        displayVegResults(vegetarian) ;
      }

      function displayVegResults(results) {
        resultContainer.innerHTML = '';
  
        if (results.length === 0) {
          resultContainer.innerHTML = '<p>No matching dishes found.</p>';
          return;
        }
  
        results.forEach(dish => {
          const dishDetail = document.createElement('div');
          dishDetail.classList.add('dish-detail');
          dishDetail.innerHTML = `
            <img src="${dish.imageSrc}" alt="${dish.name}">
            <div class="type">${dish.type}</div>
            <div class="name">
              <div class="dish-name">${dish.name}</div> 
              <div id="dish-rating"><img src="./img/Frontend 2/Iconly/Bold/Star.svg" alt="" width="8px">${dish.rating}</div>
            </div>
            <div class="time">
              <div>${dish.time}</div>
              <div class="social-media">
                <span><img src="./img/like.svg" alt=""></span>
                <span><img src="./img/comments.svg" alt=""></span>
              </div>
            </div>
          `;
          resultContainer.appendChild(dishDetail);
        });
      }

let nonveg =  document.getElementById('Nonveg');
nonveg.addEventListener('click' ,nonVegOnly)
 function nonVegOnly(){
  let Nonvegetarian = [];
  Nonvegetarian = dishes.filter(dish => dish.type === 'non-veg');
        displayNonVegResults(Nonvegetarian) ;
 }



 function displayNonVegResults(results) {
  resultContainer.innerHTML = '';

  if (results.length === 0) {
    resultContainer.innerHTML = '<p>No matching dishes found.</p>';
    return;
  }

  results.forEach(dish => {
    const dishDetail = document.createElement('div');
    dishDetail.classList.add('dish-detail');
    dishDetail.innerHTML = `
      <img src="${dish.imageSrc}" alt="${dish.name}">
      <div class="type">${dish.type}</div>
      <div class="name">
        <div class="dish-name">${dish.name}</div> 
        <div id="dish-rating"><img src="./img/Frontend 2/Iconly/Bold/Star.svg" alt="" width="8px">${dish.rating}</div>
      </div>
      <div class="time">
        <div>${dish.time}</div>
        <div class="social-media">
          <span><img src="./img/like.svg" alt=""></span>
          <span><img src="./img/comments.svg" alt=""></span>
        </div>
      </div>
    `;
    resultContainer.appendChild(dishDetail);
  });
}

let allDishes =  document.getElementById('allrecipes') ;
allDishes.addEventListener('click' , availableDishes)
 function availableDishes(){
   let allDishes = [];
   dishes.forEach(ele =>{
    allDishes.push(ele);
   })
   displayAvailableDishes(allDishes)
 }

 function displayAvailableDishes(results) {
  resultContainer.innerHTML = '';

  if (results.length === 0) {
    resultContainer.innerHTML = '<p>No matching dishes found.</p>';
    return;
  }

  results.forEach(dish => {
    const dishDetail = document.createElement('div');
    dishDetail.classList.add('dish-detail');
    dishDetail.innerHTML = `
      <img src="${dish.imageSrc}" alt="${dish.name}">
      <div class="type">${dish.type}</div>
      <div class="name">
        <div class="dish-name">${dish.name}</div> 
        <div id="dish-rating"><img src="./img/Frontend 2/Iconly/Bold/Star.svg" alt="" width="8px">${dish.rating}</div>
      </div>
      <div class="time">
        <div>${dish.time}</div>
        <div class="social-media">
          <span><img src="./img/like.svg" alt=""></span>
          <span><img src="./img/comments.svg" alt=""></span>
        </div>
      </div>
    `;
    resultContainer.appendChild(dishDetail);
  });
}
const searchInput = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const searchDishContainer = document.getElementById('result-found');

searchButton.addEventListener("click", function () {
  searchDish(dishes);
});

searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    searchDish(dishes);
  }
});

function searchDish(data) {
  const searchTerm = searchInput.value.toLowerCase();
  const foundDish = data.find(dish => dish.name.toLowerCase() === searchTerm);

  if (foundDish) {
    displaySearchDish(foundDish);
  } else {
    console.log("Dish not found");
    
    clearSearchResults();
  }
}

function displaySearchDish(foundDish) {
  const dishDetail = document.createElement('div');
  dishDetail.classList.add('dish-detail');
  dishDetail.innerHTML = `
    <img src="${foundDish.imageSrc}" alt="${foundDish.name}">
    <div class="type">${foundDish.type}</div>
    <div class="name">
      <div class="dish-name">${foundDish.name}</div> 
      <div id="dish-rating"><img src="./img/Frontend 2/Iconly/Bold/Star.svg" alt="" width="8px">${foundDish.rating}</div>
    </div>
    <div class="time">
      <div>${foundDish.time}</div>
      <div class="social-media">
        <span><img src="./img/like.svg" alt=""></span>
        <span><img src="./img/comments.svg" alt=""></span>
      </div>
    </div>
  `;

 
  clearSearchResults();
  searchDishContainer.appendChild(dishDetail);
}

function clearSearchResults() {
  while (searchDishContainer.firstChild) {
    searchDishContainer.removeChild(searchDishContainer.firstChild);
  }
}
