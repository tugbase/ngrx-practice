import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes:Recipe[] = [new Recipe('Imam Bayildi', 'A tasty Imama Bayildi', 
  'https://commons.wikimedia.org/wiki/File:Imam_bay%C4%B1ld%C4%B1.jpg', [
    new Ingredient('aubergine', 5),
    new Ingredient('tomato', 5)
  ]),
  new Recipe('Mucver', 'Best Vegetarian Dinner', 
  'https://yemek.com/tarif/havuclu-kabak-mucveri/',[
    new Ingredient('Potato', 3),
    new Ingredient('Carrot', 3)
  ]),

];

recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingListService) { }

getRecipes(){
  return this.recipes.slice();
}
getRecipe(index:number){
return this.recipes.slice()[index];
}

addIngredientsToShoppingList(ingredients : Ingredient[]){
this.shoppingService.addIngredients(ingredients);
}
}
