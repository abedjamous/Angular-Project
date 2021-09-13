import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";


@Injectable()

export class RecipeService {
    

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
              new Ingredient('cheese', 2)
          ])
      ];

      constructor(private slService: ShoppingListService) {

      }
    

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index]
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}

