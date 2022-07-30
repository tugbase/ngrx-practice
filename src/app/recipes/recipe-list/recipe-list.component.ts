import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[
  
  ] = [new Recipe('A Test Recipe', 'This is simply a test', 
  'https://https://c.pxhere.com/images/d0/54/15a09b734bfd3e341434c2191a94-1417896.jpg!dpxhere.com/en/photo/1620832'),
  new Recipe('A Test Recipe', 'This is simply a test', 
  'https://https://c.pxhere.com/images/d0/54/15a09b734bfd3e341434c2191a94-1417896.jpg!dpxhere.com/en/photo/1620832'),

];

  constructor() { }

  ngOnInit(): void {
  }

}
