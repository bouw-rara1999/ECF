let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
body.classList.toggle('open'); 
});
// toggle menu burger ouvert et je lui ajoute un clic

const meal_container = document.querySelector('#meal');
//image de mes repas

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(res => {
      createMeal(res.meals[0]);
    });
// je vais chercher mon bouton, ensuite je parse en tableau je vais chercher tous les éléments de mon repas dans une foncion createMeal

const createMeal = (meal) => {
//je défini createMeal
const ingredients = [];
// je vais chercher les 20 ingredients de createMeal
  for(let i=1; i<=20; i++)
// boucle qui parcour mes 20 ingredients
  {
    if(meal[`strIngredient${i}`])
// je réalise une condition qui dit si mes ingredients et mon indice parcour mes 20 ingredients est réalisé
    {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
// alors j'ajoute la quantité nécessaire à la réalisation du plat
    } else {
// Si il n'y a pas plus d'ingredient je m'arrête
      break;
    }
  }
  
  const newInnerHTML = `
    <div class="row">
      <div class="columns five">
        <img src="${meal.strMealThumb}" class="miam" lt="Meal Image" width="200" height="200" alt="my plate">
        
        ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
        ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
        <h3>Ingredients:</h3>
        <ul>
          ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
      <div class="columns seven">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strInstructions}</p>
      </div>
    </div>`;
// j'ajoute des éléments stylisé dans mon HTML
// j'ajoute 5 colonnes que je met en row donc en ligne l'une en dessous des autres
// j'ajoute le chemin d'accès de mon image et un alt au cas ou elle marche pas
// la catégorie de mon repas
// la provenance
// et les mots clés
// je met mes ingrédients en liste et en string

  meal_container.innerHTML = newInnerHTML;
}
// je met tous ces éléments dans ma div meal qui est dans meal_container

const meal_container2 = document.querySelector('#meal2');
 
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
createMeal2(data.meals[0]);  
});
// je vais chercher mon bouton, ensuite je parse en tableau je vais chercher tous les éléments de mon repas dans une foncion createMeal

const createMeal2 = (meal) => {
     //  je défini createMeal
     const ingredients2 = [];
     // je vais chercher les 20 ingredients de createMeal
        for(let i=1; i<=20; i++)
     // boucle qui parcour mes 20 ingredients
        {
          if(meal[`strIngredient${i}`])
     // je réalise une condition qui dit si mes ingredients et mon indice parcour mes 20 ingredients est réalisé
          {
            ingredients2.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
      //alors j'ajoute la quantité nécessaire à la réalisation du plat
          } else {
     // Si il n'y a pas plus d'ingredient je m'arrête
            break;
          }
        }

    const newInnerHTML2 = `
    <div class="row">
      <div class="columns five">
        <img src="${meal.strMealThumb}" class="miam" lt="Meal Image" width="200" height="200" alt="my plate">
       
        ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
        ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
        <h3>Ingredients:</h3>
        <ul>
          ${ingredients2.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
      <div class="columns seven">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strInstructions}</p>
      </div>
    </div>`;
// j'ajoute des éléments stylisé dans mon HTML
// j'ajoute 5 colonnes que je met en row donc en ligne l'une en dessous des autres
// j'ajoute le chemin d'accès de mon image et un alt au cas ou elle marche pas
// la catégorie de mon repas
// la provenance
// et les mots clés
// je met mes ingrédients en liste et en string
 
    meal_container2.innerHTML = newInnerHTML2;
    // je met tous ces éléments dans ma div meal qui est dans meal_container
  }

     const meal_container3 = document.querySelector('#meal3');
 
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
createMeal3(data.meals[0]);  
});
 
const createMeal3 = (meal) => {
    //  je défini createMeal
    const ingredients3 = [];
    // je vais chercher les 20 ingredients de createMeal
       for(let i=1; i<=20; i++)
    // boucle qui parcour mes 20 ingredients
       {
         if(meal[`strIngredient${i}`])
    // je réalise une condition qui dit si mes ingredients et mon indice parcour mes 20 ingredients est réalisé
         {
           ingredients3.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
     //alors j'ajoute la quantité nécessaire à la réalisation du plat
         } else {
    // Si il n'y a pas plus d'ingredient je m'arrête
           break;
         }
        }

    const newInnerHTML3 = `
    <div class="row">
      <div class="columns five">
        <img src="${meal.strMealThumb}" class="miam" lt="Meal Image" width="200" height="200" alt="my plate">
       
        ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
        ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
        <h3>Ingredients:</h3>
        <ul>
          ${ingredients3.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
      <div class="columns seven">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strInstructions}</p>
      </div>
    </div>`;
// j'ajoute des éléments stylisé dans mon HTML
// j'ajoute 5 colonnes que je met en row donc en ligne l'une en dessous des autres
// j'ajoute le chemin d'accès de mon image et un alt au cas ou elle marche pas
// la catégorie de mon repas
// la provenance
// et les mots clés
// je met mes ingrédients en liste et en string
 
    meal_container3.innerHTML = newInnerHTML3;
    // je met tous ces éléments dans ma div meal qui est dans meal_container
  }
   
     const meal_container4 = document.querySelector('#meal4');
 
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
createMeal4(data.meals[0]);  
});
 
const createMeal4 = (meal) => {
   //  je défini createMeal
   const ingredients4 = [];
   // je vais chercher les 20 ingredients de createMeal
      for(let i=1; i<=20; i++)
   // boucle qui parcour mes 20 ingredients
      {
        if(meal[`strIngredient${i}`])
   // je réalise une condition qui dit si mes ingredients et mon indice parcour mes 20 ingredients est réalisé
        {
          ingredients4.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
    //alors j'ajoute la quantité nécessaire à la réalisation du plat
        } else {
   // Si il n'y a pas plus d'ingredient je m'arrête
          break;
        }
      }

    const newInnerHTML4 = `
    <div class="row">
      <div class="columns five">
        <img src="${meal.strMealThumb}" class="miam" lt="Meal Image" width="200" height="200" alt="my plate">
       
        ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
        ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
        <h3>Ingredients:</h3>
        <ul>
          ${ingredients4.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
      <div class="columns seven">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strInstructions}</p>
      </div>
    </div>`;
// j'ajoute des éléments stylisé dans mon HTML
// j'ajoute 5 colonnes que je met en row donc en ligne l'une en dessous des autres
// j'ajoute le chemin d'accès de mon image et un alt au cas ou elle marche pas
// la catégorie de mon repas
// la provenance
// et les mots clés
// je met mes ingrédients en liste et en string
 
    meal_container4.innerHTML = newInnerHTML4;
    // je met tous ces éléments dans ma div meal qui est dans meal_container
  }
   
     const meal_container5 = document.querySelector('#meal5');
 
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
createMeal5(data.meals[0]);  
});
 
const createMeal5 = (meal) => {
  //  je défini createMeal
  const ingredients5 = [];
  // je vais chercher les 20 ingredients de createMeal
     for(let i=1; i<=20; i++)
  // boucle qui parcour mes 20 ingredients
     {
       if(meal[`strIngredient${i}`])
  // je réalise une condition qui dit si mes ingredients et mon indice parcour mes 20 ingredients est réalisé
       {
         ingredients5.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
   //alors j'ajoute la quantité nécessaire à la réalisation du plat
       } else {
  // Si il n'y a pas plus d'ingredient je m'arrête
         break;
       }
     }

    const newInnerHTML5 = `
    <div class="row">
      <div class="columns five">
        <img src="${meal.strMealThumb}" class="miam" lt="Meal Image" width="200" height="200" alt="my plate">
       
        ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
        ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
        <h3>Ingredients:</h3>
        <ul>
          ${ingredients5.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
      <div class="columns seven">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strInstructions}</p>
      </div>
    </div>`;
// j'ajoute des éléments stylisé dans mon HTML
// j'ajoute 5 colonnes que je met en row donc en ligne l'une en dessous des autres
// j'ajoute le chemin d'accès de mon image et un alt au cas ou elle marche pas
// la catégorie de mon repas
// la provenance
// et les mots clés
// je met mes ingrédients en liste et en string
 
    meal_container5.innerHTML = newInnerHTML5;
    // je met tous ces éléments dans ma div meal qui est dans meal_container
  }
 
     const meal_container6 = document.querySelector('#meal6');
 
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
createMeal6(data.meals[0]);  
});
 
const createMeal6 = (meal) => {
    //  je défini createMeal
    const ingredients6 = [];
    // je vais chercher les 20 ingredients de createMeal
       for(let i=1; i<=20; i++)
    // boucle qui parcour mes 20 ingredients
       {
         if(meal[`strIngredient${i}`])
    // je réalise une condition qui dit si mes ingredients et mon indice parcour mes 20 ingredients est réalisé
         {
           ingredients6.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
     //alors j'ajoute la quantité nécessaire à la réalisation du plat
         } else {
    // Si il n'y a pas plus d'ingredient je m'arrête
           break;
         }
       }

    const newInnerHTML6 = `
    <div class="row">
      <div class="columns five">
        <img src="${meal.strMealThumb}" class="miam" lt="Meal Image" width="200" height="200" alt="my plate">
       
        ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
        ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
        <h3>Ingredients:</h3>
        <ul>
          ${ingredients6.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
      <div class="columns seven">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strInstructions}</p>
      </div>
    </div>`;
// j'ajoute des éléments stylisé dans mon HTML
// j'ajoute 5 colonnes que je met en row donc en ligne l'une en dessous des autres
// j'ajoute le chemin d'accès de mon image et un alt au cas ou elle marche pas
// la catégorie de mon repas
// la provenance
// et les mots clés
// je met mes ingrédients en liste et en string
 
    meal_container6.innerHTML = newInnerHTML6;
    // je met tous ces éléments dans ma div meal qui est dans meal_container
  }
 
     const meal_container7 = document.querySelector('#meal7');
 
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
createMeal7(data.meals[0]);  
});
 
const createMeal7 = (meal) => {
   //  je défini createMeal
   const ingredients7 = [];
   // je vais chercher les 20 ingredients de createMeal
      for(let i=1; i<=20; i++)
   // boucle qui parcour mes 20 ingredients
      {
        if(meal[`strIngredient${i}`])
   // je réalise une condition qui dit si mes ingredients et mon indice parcour mes 20 ingredients est réalisé
        {
          ingredients7.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
    //alors j'ajoute la quantité nécessaire à la réalisation du plat
        } else {
   // Si il n'y a pas plus d'ingredient je m'arrête
          break;
        }
      }
 
    const newInnerHTML7 = `
    <div class="row">
      <div class="columns five">
        <img src="${meal.strMealThumb}" class="miam" lt="Meal Image" width="200" height="200" alt="my plate">
       
        ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
        ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
        <h3>Ingredients:</h3>
        <ul>
          ${ingredients7.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
      <div class="columns seven">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strInstructions}</p>
      </div>
    </div>`;
// j'ajoute des éléments stylisé dans mon HTML
// j'ajoute 5 colonnes que je met en row donc en ligne l'une en dessous des autres
// j'ajoute le chemin d'accès de mon image et un alt au cas ou elle marche pas
// la catégorie de mon repas
// la provenance
// et les mots clés
// je met mes ingrédients en liste et en string
 
    meal_container7.innerHTML = newInnerHTML7;
    // je met tous ces éléments dans ma div meal qui est dans meal_container
  }
 
 
  

