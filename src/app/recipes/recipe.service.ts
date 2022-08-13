import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [new Recipe('Imam Bayildi', 'A tasty Imama Bayildi',
  'https://commons.wikimedia.org/wiki/File:Imam_bay%C4%B1ld%C4%B1.jpg', [
  new Ingredient('aubergine', 5),
  new Ingredient('tomato', 5)
  ]),
  new Recipe('Mucver', 'Best Vegetarian Dinner',
  'https://yemek.com/tarif/havuclu-kabak-mucveri/', [
  new Ingredient('Potato', 3),
  new Ingredient('Carrot', 3)
  ]),

  ];
  // private recipes: Recipe[] = [];

  constructor(private shoppingService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
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
