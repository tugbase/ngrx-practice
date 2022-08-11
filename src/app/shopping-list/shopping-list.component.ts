import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private subscription!: Subscription;

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingService.getIngredients();
    this.subscription=this.shoppingService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }

  onEditItem(index:number){
    this.shoppingService.startedEditing.next(index);
  }

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.subscription.unsubscribe();
}

}
