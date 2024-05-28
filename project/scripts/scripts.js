




/**
 * INDEX.HMTL
  * method to fetch data from API and display it in carousel and recipe of the day 
  * 
  */





document.addEventListener("DOMContentLoaded", function () {
    fetchCourusel();
    fetchRecipeDay();
});
function fetchCourusel() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => {
            const categories = data.categories.slice(0, 5);
            const carouselContent = document.getElementById('carousel-content');
            categories.forEach((category, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
                carouselItem.innerHTML = `
                <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
                <div class="carousel-caption">
                    <h3>${category.strCategory}</h3>
                    <p>${category.strCategoryDescription.substring(0, 100)}...</p>
                </div>
            `;
                carouselContent.appendChild(carouselItem);
            });
        })
        .catch(error => console.error('Error:', error));
}


function fetchRecipeDay() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const recipe = data.meals[0];
            document.getElementById('recipe-day-img').src = recipe.strMealThumb;
            document.getElementById('recipe-day-img').alt = recipe.strMeal;
            document.getElementById('recipe-day-desc').textContent = recipe.strInstructions.substring(0, 200) + '...';
        })
        .catch(error => console.error('Error:', error));
}






/**
 * RECIPES.HMTL
  * method to fetch data from API and display it in recipe list and modal
  * 
  */





document.addEventListener('DOMContentLoaded', () => {
    const apiEndpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    fetchRecipes(apiEndpoint);
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    searchInput.addEventListener('input', filterRecipes);
    categoryFilter.addEventListener('change', filterRecipes);
    setupModal();

});

let allRecipes = [];

function fetchRecipes(apiEndpoint) {
    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            allRecipes = data.meals || [];
            populateCategoryFilter(allRecipes);
            displayRecipes(allRecipes);
        })
        .catch(error => console.error('Error fetching recipes:', error));
}

function populateCategoryFilter(recipes) {
    const categoryFilter = document.getElementById('category-filter');
    const categories = [...new Set(recipes.map(recipe => recipe.strCategory))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function displayRecipes(recipes) {
    const recipeList = document.querySelector('.recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipe-item';
        recipeItem.setAttribute('data-category', recipe.strCategory);

        recipeItem.innerHTML = `
            <h3>${recipe.strMeal}</h3>
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" loading="lazy">
            <button class="details-button" data-recipe-id="${recipe.idMeal}">See Recipe</button>
        `;
        recipeItem.querySelector('.details-button').addEventListener('click', () => {
            showRecipeDetails(recipe);
        });
        recipeList.appendChild(recipeItem);
    });
}

function setupModal() {
    const modal = document.getElementById('recipe-modal');
    const span = document.getElementsByClassName('close')[0];

    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

function showRecipeDetails(recipe) {
    const modal = document.getElementById('recipe-modal');
    document.getElementById('modal-title').textContent = recipe.strMeal;
    document.getElementById('modal-image').src = recipe.strMealThumb;

    const overallRating = Math.floor(Math.random() * 5) + 1;
    document.getElementById('modal-details').innerHTML = `
        <h3>Instructions</h3>
        <p>${recipe.strInstructions}</p>
        <h3>Ingredients</h3>
        <p>${recipe.strIngredient1} : ${recipe.strMeasure1}</p>
        <p>${recipe.strIngredient2} : ${recipe.strMeasure2}</p>
        <p>${recipe.strIngredient3} : ${recipe.strMeasure3}</p>
        <p>${recipe.strIngredient4} : ${recipe.strMeasure4}</p>
        <p>${recipe.strIngredient5} : ${recipe.strMeasure5}</p>
        <p>${recipe.strIngredient6} : ${recipe.strMeasure6}</p>
        <p>${recipe.strIngredient7} : ${recipe.strMeasure7}</p>
        <h3>Rating: ${overallRating}/5</h3>
    `;
    modal.style.display = "block";
}


function filterRecipes() {
    const query = document.getElementById('search').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;
    const filteredRecipes = allRecipes.filter(recipe => {
        const matchesQuery = recipe.strMeal.toLowerCase().includes(query);
        const matchesCategory = selectedCategory === '' || recipe.strCategory === selectedCategory;
        return matchesQuery && matchesCategory;
    });
    displayRecipes(filteredRecipes);
}







/**
 * CONTACT.HMTL
  * method to submit form and store data in local storage 
  * 
  */






document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({ name, email, message });
        localStorage.setItem('messages', JSON.stringify(messages));
        alert('Message sent!');
        form.reset();
    } else {
        alert('Please fill in all fields');
    }
}

function setupModal() {
    const modal = document.getElementById('recipe-modal');
    const span = document.getElementsByClassName('close')[0];

    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}






/**
 * Update Footer And Navigation
  * method to update footer and navigation with current year and last modified date and toggle menu and navigation hamburger
  * 
  */




function updateFooter() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleString();
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
}

updateFooter();