//nav bar to make responsive
const toggleIcon = document.getElementById('toggle-icon');

toggleIcon.addEventListener('click', () => {
  navlink.classList.toggle('show');
});
let veg = document.getElementById('vegRecipes');
veg.addEventListener('click', () => {
    
    let vegRecipesDiv = document.querySelector('.veg-only');
    let nonvegDiv = document.querySelector('.non-veg');
  
    vegRecipesDiv.style.display = 'flex';
    nonvegDiv.style.display = 'none';
  });

  let nonveg = document.getElementById('Nonveg');
nonveg.addEventListener('click', () => {
   
    let vegRecipesDiv = document.querySelector('.veg-only');
    let nonvegDiv = document.querySelector('.non-veg');
  
    vegRecipesDiv.style.display = 'none';
    nonvegDiv.style.display = 'flex';
  });

  let allType = document.getElementById('allrecipes');
let vegRecipesDiv = document.querySelector('.veg-only');
let nonvegDiv = document.querySelector('.nonveg');

allType.addEventListener('click', () => {
    vegRecipesDiv.style.display = 'flex';
    nonvegDiv.style.display = 'flex';
});


const aboveRadio = document.getElementById('above');
const belowRadio = document.getElementById('below');
// Add this if you have non-veg dishes

aboveRadio.addEventListener('change', filterDishes);
belowRadio.addEventListener('change', filterDishes);

function filterDishes() {
    // Replace this placeholder with the actual reference to your veg dishes container
    const vegDishes = document.querySelector('.veg-only');
  
    const ratingFilter = document.querySelector('input[name="rating"]:checked');
    const ratingThreshold = ratingFilter.value === 'above' ? 4.0 : 3.0; 
  
    
    Array.from(vegDishes.children).forEach(dish => {
      const dishRating = parseFloat(dish.querySelector('#dish-rating img').alt);
      dish.style.display = dishRating > ratingThreshold ? 'flex' : 'none';
    });
  }
  


  
