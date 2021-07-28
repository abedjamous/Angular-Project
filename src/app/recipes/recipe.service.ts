import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] =[
        new Recipe('A Test Recipe',
         'This is simply a test',
          'https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png',
            [
              new Ingredient('meat', 1),
              new Ingredient('French Fries', 20)
            ]),
        new Recipe('Another Test Recipe',
         'This is simply a test',
          'https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png',
          [
            new Ingredient('Buns', 2),
              new Ingredient('chees', 2)
          ])
      ];
    

      getRecipes() {
          return this.recipes.slice();
      }
}

