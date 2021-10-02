import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";
import { Subject } from 'rxjs';


@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
    

  // private  recipes: Recipe[] =[
  //       new Recipe('A Test Recipe',
  //        'This is simply a test',
  //         'https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png',
  //           [
  //             new Ingredient('meat', 1),
  //             new Ingredient('French Fries', 20)
  //           ]),
  //       new Recipe('Another Test Recipe',
  //        'This is simply a test',
  //         'https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png',
  //         [
  //           new Ingredient('Buns', 2),
  //             new Ingredient('cheese', 2)
  //         ])
  //     ];

    private recipes: Recipe[]= [];

      constructor(private slService: ShoppingListService) {

      }

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
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

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}

