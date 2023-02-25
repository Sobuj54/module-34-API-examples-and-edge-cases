const loadMeals = (searchedText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  console.log(meals);
  //   step: 1- container element
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";
  meals.forEach((meal) => {
    console.log(meal);
    // step 2: creating child element
    const div = document.createElement("div");
    div.classList.add("col");
    // step 3: setting value of the child element
    div.innerHTML = `
    <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal} </h5>
            <p class="card-text">
            ${meal.strInstructions}
            </p>
            <button onclick="loadMealId(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal"            data-bs-target="#mealDetails">
                Details
            </button>
        </div>
    </div>
    `;
    // step 4: append child
    mealsContainer.appendChild(div);
  });
};

const searchMeals = () => {
  const searchText = document.getElementById("search-field").value;
  document.getElementById("search-field").value = "";
  console.log(searchText);
  loadMeals(searchText);
};

const loadMealId = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
  document.getElementById("mealDetailsLabel").innerText = meal.strMeal;
  const mealDetails = document.getElementById("mealDetailsBody");
  mealDetails.innerHTML = `
  <img class="img-fluid" src="${meal.strMealThumb}">
  <p>${meal.strInstructions}</p>
  `;
};

loadMeals("rice");
