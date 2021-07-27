import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] =[
        new Recipe('A Test Recipe', 'This is simply a test', 'https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png')
      ];
    

      getRecipes() {
          return this.recipes.slice();
      }
}

